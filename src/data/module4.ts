import type { Module } from '../types';

export const module4: Module = {
  id: 'mod-4',
  title: 'Services & Dependency Injection',
  description: 'Understand Angular\'s DI system, creating services, and provider scopes.',
  topics: [
    {
      id: 'mod4-t1',
      title: 'Creating Services',
      explanation: `## Angular Services

A **service** is a class that encapsulates reusable logic — data fetching, business rules, state management.

### Creating a Service

\`\`\`typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // singleton, available app-wide
})
export class UserService {
  private users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}
\`\`\`

### Injecting a Service

\`\`\`typescript
@Component({
  selector: 'app-user-list',
  standalone: true,
  template: \\\`
    @for (user of users; track user.id) {
      <p>{{ user.name }}</p>
    }
  \\\`,
})
export class UserListComponent {
  users: User[];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
}
\`\`\`

### inject() Function (Modern Approach)

\`\`\`typescript
import { inject } from '@angular/core';

export class UserListComponent {
  private userService = inject(UserService);
  users = this.userService.getUsers();
}
\`\`\``,
      tasks: [{
        description: 'Create a TodoService with methods to get all todos, add a todo, and toggle a todo\'s completed status. Use providedIn: root.',
        starterCode: `import { Injectable } from '@angular/core';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  // TODO: Implement getAll, add, and toggle methods
}`,
        solution: `import { Injectable } from '@angular/core';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private todos: Todo[] = [];
  private nextId = 1;

  getAll(): Todo[] {
    return this.todos;
  }

  add(text: string): void {
    this.todos.push({ id: this.nextId++, text, completed: false });
  }

  toggle(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}`,
        hints: [
          '@Injectable({ providedIn: "root" }) makes a singleton service',
          'Use private arrays to store state in the service',
          'The inject() function is the modern alternative to constructor injection',
        ],
      }],
    },
    {
      id: 'mod4-t2',
      title: 'Dependency Injection Deep Dive',
      explanation: `## DI Provider Scopes

### providedIn Options

\`\`\`typescript
// App-wide singleton
@Injectable({ providedIn: 'root' })

// Per-module instance
@Injectable({ providedIn: SomeModule })

// Not provided automatically — must register manually
@Injectable()
\`\`\`

### Providing in Components

\`\`\`typescript
@Component({
  providers: [MyService], // new instance per component
})
\`\`\`

### Injection Tokens

\`\`\`typescript
import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL');

// In providers:
{ provide: API_URL, useValue: 'https://api.example.com' }

// In component:
private apiUrl = inject(API_URL);
\`\`\`

### useClass, useValue, useFactory

\`\`\`typescript
providers: [
  { provide: Logger, useClass: ConsoleLogger },
  { provide: API_URL, useValue: 'https://api.example.com' },
  {
    provide: DataService,
    useFactory: (http: HttpClient) => new DataService(http),
    deps: [HttpClient],
  },
]
\`\`\``,
      tasks: [{
        description: 'Create an InjectionToken for an API configuration object and provide it at the app level. Inject it in a service.',
        starterCode: `import { InjectionToken, Injectable, inject } from '@angular/core';

interface ApiConfig {
  baseUrl: string;
  timeout: number;
}

// TODO: Create InjectionToken
// TODO: Create service that uses it`,
        solution: `import { InjectionToken, Injectable, inject } from '@angular/core';

interface ApiConfig {
  baseUrl: string;
  timeout: number;
}

export const API_CONFIG = new InjectionToken<ApiConfig>('API_CONFIG');

// In app config:
// providers: [
//   { provide: API_CONFIG, useValue: { baseUrl: 'https://api.example.com', timeout: 5000 } }
// ]

@Injectable({ providedIn: 'root' })
export class ApiService {
  private config = inject(API_CONFIG);

  getBaseUrl(): string {
    return this.config.baseUrl;
  }
}`,
        hints: [
          'InjectionToken takes a description string and optional type parameter',
          'Use useValue to provide a constant object',
          'inject() works inside constructors and field initializers',
        ],
      }],
    },
    {
      id: 'mod4-t3',
      title: 'Hierarchical Injectors',
      explanation: `## Hierarchical Injector System

Angular's DI system is hierarchical. Each component can have its own injector.

### Injector Tree

\`\`\`
Platform Injector
  └── Root Injector (providedIn: 'root')
        └── Module Injector
              └── Component Injector (providers: [...])
                    └── Child Component Injector
\`\`\`

### Resolution Modifiers

\`\`\`typescript
// @Optional — don't throw if not found
constructor(@Optional() private logger: Logger) {}

// @Self — only look in this component's injector
constructor(@Self() private service: MyService) {}

// @SkipSelf — skip this component, look in parent
constructor(@SkipSelf() private service: MyService) {}

// @Host — look up to the host component only
constructor(@Host() private service: MyService) {}
\`\`\`

### Providing Different Instances

\`\`\`typescript
@Component({
  selector: 'app-editor',
  providers: [EditorState], // each editor gets its own state
  template: '...',
})
export class EditorComponent {
  constructor(private state: EditorState) {}
}
\`\`\``,
      tasks: [{
        description: 'Create a LoggerService and provide it at different levels. Use @Optional and @SkipSelf to control resolution.',
        starterCode: `import { Injectable, Optional, SkipSelf } from '@angular/core';

@Injectable()
export class LoggerService {
  prefix = 'DEFAULT';
  // TODO: Add log method
}

// TODO: Create a component that uses @Optional and @SkipSelf`,
        solution: `import { Injectable, Optional, SkipSelf, Component } from '@angular/core';

@Injectable()
export class LoggerService {
  prefix = 'DEFAULT';

  log(message: string): void {
    console.log(\`[\${this.prefix}] \${message}\`);
  }
}

@Component({
  selector: 'app-feature',
  providers: [{ provide: LoggerService, useFactory: () => {
    const logger = new LoggerService();
    logger.prefix = 'FEATURE';
    return logger;
  }}],
  template: '<p>Feature Component</p>',
})
export class FeatureComponent {
  constructor(
    private logger: LoggerService,
    @Optional() @SkipSelf() private parentLogger?: LoggerService,
  ) {
    this.logger.log('Feature initialized');
    this.parentLogger?.log('Parent notified');
  }
}`,
        hints: [
          '@Optional prevents errors when a provider is missing',
          '@SkipSelf looks at the parent injector, not the current one',
          'Component-level providers create unique instances per component',
        ],
      }],
    },
  ],
  test: [
    { id: 'mod4-q1', question: 'What does providedIn: "root" do?', options: ['Creates a new instance per component', 'Registers the service as a singleton available app-wide', 'Makes the service available only in the root component', 'Provides the service lazily'], correctAnswer: 1, explanation: 'providedIn: "root" registers the service in the root injector as a singleton — one instance shared across the entire application.' },
    { id: 'mod4-q2', question: 'What is the modern way to inject a service in Angular?', options: ['Using the constructor only', 'Using the inject() function', 'Using @Inject decorator only', 'Using providers array only'], correctAnswer: 1, explanation: 'The inject() function (Angular 14+) allows injecting dependencies in field initializers and constructors, and is the modern preferred approach.' },
    { id: 'mod4-q3', question: 'What does @Optional() do in DI?', options: ['Makes the service optional to provide', 'Returns null instead of throwing if the dependency is not found', 'Provides a default value', 'Skips the service registration'], correctAnswer: 1, explanation: '@Optional() tells Angular to return null instead of throwing an error if the requested dependency cannot be found.' },
    { id: 'mod4-q4', question: 'When would you provide a service at the component level?', options: ['Always', 'When you need a new instance per component', 'When you need a singleton', 'When using lazy loading'], correctAnswer: 1, explanation: 'Component-level providers create a new service instance for each component instance, useful for component-scoped state.' },
    { id: 'mod4-q5', question: 'What is an InjectionToken used for?', options: ['Token-based authentication', 'Providing non-class dependencies (strings, objects, configs) via DI', 'Creating HTTP tokens', 'Generating unique IDs'], correctAnswer: 1, explanation: 'InjectionToken creates a unique token for injecting non-class values like configuration objects, strings, or factory functions.' },
  ],
};
