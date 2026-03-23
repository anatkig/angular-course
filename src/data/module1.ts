import type { Module } from '../types';

export const module1: Module = {
  id: 'mod-1',
  title: 'TypeScript & Angular Fundamentals',
  description:
    'Learn the core building blocks: TypeScript essentials, Angular CLI, project structure, and your first component.',
  topics: [
    {
      id: 'mod1-t1',
      title: 'TypeScript Essentials for Angular',
      explanation: `## TypeScript Essentials

Angular is built with **TypeScript**, a superset of JavaScript that adds static types.

### Basic Types

\`\`\`typescript
let name: string = 'Alice';
let age: number = 30;
let isActive: boolean = true;
let items: string[] = ['a', 'b', 'c'];
let tuple: [string, number] = ['hello', 42];
\`\`\`

### Interfaces & Types

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email?: string; // optional
}

type Status = 'active' | 'inactive' | 'pending';

const user: User = { id: 1, name: 'Alice' };
\`\`\`

### Classes & Decorators

\`\`\`typescript
class Animal {
  constructor(public name: string, private age: number) {}

  greet(): string {
    return \`Hi, I'm \${this.name}\`;
  }
}

// Decorators are crucial in Angular
function Log(target: any, key: string) {
  console.log(\`\${key} was accessed\`);
}
\`\`\`

### Generics

\`\`\`typescript
function identity<T>(value: T): T {
  return value;
}

interface ApiResponse<T> {
  data: T;
  status: number;
}
\`\`\`

### Enums

\`\`\`typescript
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
\`\`\``,
      tasks: [{
        description:
          'Create a TypeScript interface for a Product with id (number), name (string), price (number), and an optional description (string). Then create a generic function that filters an array by a predicate.',
        starterCode: `// TODO: Create Product interface

// TODO: Create generic filter function
// function filterItems<T>(items: T[], predicate: (item: T) => boolean): T[]`,
        solution: `interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

function filterItems<T>(items: T[], predicate: (item: T) => boolean): T[] {
  return items.filter(predicate);
}

const products: Product[] = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 25, description: 'Wireless' },
];

const expensive = filterItems(products, p => p.price > 100);`,
        hints: [
          'Use ? after a property name to make it optional',
          'Generics use <T> syntax for type parameters',
          'The predicate is a function that returns a boolean',
        ],
      }],
    },
    {
      id: 'mod1-t2',
      title: 'Angular CLI & Project Structure',
      explanation: `## Angular CLI

The **Angular CLI** is the official tool for creating and managing Angular projects.

### Creating a Project

\`\`\`bash
npm install -g @angular/cli
ng new my-app
cd my-app
ng serve
\`\`\`

### Project Structure

\`\`\`
my-app/
├── src/
│   ├── app/
│   │   ├── app.component.ts      # Root component
│   │   ├── app.component.html    # Root template
│   │   ├── app.component.css     # Root styles
│   │   ├── app.component.spec.ts # Root tests
│   │   ├── app.module.ts         # Root module (NgModule)
│   │   └── app.config.ts         # Standalone config (v17+)
│   ├── assets/                   # Static files
│   ├── index.html                # Main HTML
│   ├── main.ts                   # Entry point
│   └── styles.css                # Global styles
├── angular.json                  # CLI configuration
├── tsconfig.json                 # TypeScript config
└── package.json
\`\`\`

### Common CLI Commands

| Command | Description |
|---------|-------------|
| \`ng generate component name\` | Create a component |
| \`ng generate service name\` | Create a service |
| \`ng generate module name\` | Create a module |
| \`ng build\` | Build for production |
| \`ng test\` | Run unit tests |
| \`ng e2e\` | Run end-to-end tests |

### Standalone vs NgModule

Angular 17+ defaults to **standalone components**:

\`\`\`typescript
// Standalone (modern)
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: '<h1>Hello Angular!</h1>',
})
export class AppComponent {}
\`\`\``,
      tasks: [{
        description:
          'Write the Angular CLI commands to: 1) Create a new project called "task-manager", 2) Generate a component called "task-list", 3) Generate a service called "task".',
        starterCode: `// Write the CLI commands as comments:
// 1. Create project:
// 2. Generate component:
// 3. Generate service:`,
        solution: `// 1. Create project:
// ng new task-manager --standalone

// 2. Generate component:
// ng generate component task-list
// or: ng g c task-list

// 3. Generate service:
// ng generate service task
// or: ng g s task`,
        hints: [
          'ng new <name> creates a new project',
          'ng generate (or ng g) creates new files',
          'Use shorthand: c for component, s for service',
        ],
      }],
    },
    {
      id: 'mod1-t3',
      title: 'Your First Component',
      explanation: `## Angular Components

A **component** controls a portion of the screen (a *view*). It consists of:

1. **TypeScript class** — the logic
2. **HTML template** — the view
3. **CSS styles** — the appearance
4. **Metadata** — the @Component decorator

### Anatomy of a Component

\`\`\`typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: \\\`
    <h1>Hello, {{ name }}!</h1>
    <p>Welcome to Angular</p>
  \\\`,
  styles: [\\\`
    h1 { color: #dd0031; }
  \\\`],
})
export class HelloComponent {
  name = 'World';
}
\`\`\`

### Using Templates & Styles from Files

\`\`\`typescript
@Component({
  selector: 'app-hello',
  standalone: true,
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  name = 'World';
}
\`\`\`

### Interpolation

Use **double curly braces** to display component data:

\`\`\`html
<h1>{{ title }}</h1>
<p>{{ 1 + 1 }}</p>
<p>{{ user.name.toUpperCase() }}</p>
\`\`\``,
      tasks: [{
        description:
          'Create a standalone Angular component called UserCardComponent that displays a user\'s name, email, and role using interpolation.',
        starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  template: \`
    <!-- TODO: Display name, email, and role -->
  \`,
})
export class UserCardComponent {
  // TODO: Add properties
}`,
        solution: `import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  template: \`
    <div class="user-card">
      <h2>{{ name }}</h2>
      <p>Email: {{ email }}</p>
      <p>Role: {{ role }}</p>
    </div>
  \`,
  styles: [\`
    .user-card {
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
  \`],
})
export class UserCardComponent {
  name = 'Alice Johnson';
  email = 'alice@example.com';
  role = 'Developer';
}`,
        hints: [
          'Use {{ propertyName }} for interpolation',
          'Define properties directly in the class',
          'The @Component decorator configures the component',
        ],
      }],
    },
    {
      id: 'mod1-t4',
      title: 'Data Binding Basics',
      explanation: `## Data Binding in Angular

Angular provides four types of data binding:

### 1. Interpolation (One-way: Component → View)

\`\`\`html
<h1>{{ title }}</h1>
\`\`\`

### 2. Property Binding (One-way: Component → View)

\`\`\`html
<img [src]="imageUrl" />
<button [disabled]="isLoading">Submit</button>
<div [class.active]="isActive">Content</div>
<div [style.color]="textColor">Styled</div>
\`\`\`

### 3. Event Binding (One-way: View → Component)

\`\`\`html
<button (click)="onClick()">Click Me</button>
<input (input)="onInput($event)" />
<form (submit)="onSubmit()">...</form>
\`\`\`

### 4. Two-Way Binding

\`\`\`html
<input [(ngModel)]="username" />
\`\`\`

This is shorthand for:

\`\`\`html
<input [ngModel]="username" (ngModelChange)="username = $event" />
\`\`\`

> **Note:** To use \`ngModel\`, import \`FormsModule\` in your component's imports array.

### Example Component

\`\`\`typescript
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [FormsModule],
  template: \\\`
    <h2>Count: {{ count }}</h2>
    <button (click)="increment()">+1</button>
    <button (click)="decrement()">-1</button>
    <input [(ngModel)]="count" type="number" />
  \\\`,
})
export class CounterComponent {
  count = 0;

  increment() { this.count++; }
  decrement() { this.count--; }
}
\`\`\``,
      tasks: [{
        description:
          'Create a component with a text input that uses two-way binding to update a greeting message displayed below it. Add a button that resets the input to empty.',
        starterCode: `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [FormsModule],
  template: \`
    <!-- TODO: Add two-way bound input -->
    <!-- TODO: Display greeting message -->
    <!-- TODO: Add reset button -->
  \`,
})
export class GreetingComponent {
  // TODO: Add properties and methods
}`,
        solution: `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [FormsModule],
  template: \`
    <input [(ngModel)]="name" placeholder="Enter your name" />
    <p>Hello, {{ name || 'stranger' }}!</p>
    <button (click)="reset()">Reset</button>
  \`,
})
export class GreetingComponent {
  name = '';

  reset() {
    this.name = '';
  }
}`,
        hints: [
          'Use [(ngModel)]="property" for two-way binding',
          'Import FormsModule to use ngModel',
          'Use (click)="method()" for event binding',
        ],
      }],
    },
  ],
  test: [
    { id: 'mod1-q1', question: 'What is the purpose of the @Component decorator?', options: ['To create a module', 'To attach metadata that defines a component\'s selector, template, and styles', 'To inject dependencies', 'To define routes'], correctAnswer: 1, explanation: 'The @Component decorator attaches metadata to a class, telling Angular how to process it as a component — including its selector, template, and styles.' },
    { id: 'mod1-q2', question: 'What syntax is used for two-way data binding in Angular?', options: ['{{value}}', '[value]', '(value)', '[(ngModel)]'], correctAnswer: 3, explanation: '[(ngModel)] is the banana-in-a-box syntax for two-way binding, combining property binding [] and event binding ().' },
    { id: 'mod1-q3', question: 'Which Angular CLI command generates a new component?', options: ['ng create component', 'ng generate component', 'ng add component', 'ng new component'], correctAnswer: 1, explanation: 'ng generate component (or ng g c) is the CLI command to scaffold a new component.' },
    { id: 'mod1-q4', question: 'What does "standalone: true" in @Component mean?', options: ['The component runs independently of Angular', 'The component doesn\'t need to be declared in an NgModule', 'The component has no dependencies', 'The component can\'t be imported'], correctAnswer: 1, explanation: 'Standalone components don\'t need to be declared in an NgModule. They declare their own imports directly in the @Component decorator.' },
    { id: 'mod1-q5', question: 'Which property binding syntax sets an HTML attribute?', options: ['{{attr}}', '(attr)="value"', '[attr]="value"', 'attr={{value}}'], correctAnswer: 2, explanation: 'Square brackets [attr]="expression" binds to an element property. For HTML attributes, use [attr.name]="expression".' },
  ],
};
