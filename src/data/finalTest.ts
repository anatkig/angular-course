import type { QuizQuestion } from '../types';

export const finalTest: QuizQuestion[] = [
  {
    id: 'ft-1',
    question: 'What is the difference between a component and a directive in Angular?',
    options: ['They are identical', 'Components have templates; directives modify existing DOM elements', 'Directives have templates; components do not', 'Components cannot have inputs'],
    correctAnswer: 1,
    explanation:
      'Components are directives with templates — they define views. Attribute and structural directives modify behavior or structure of existing DOM elements without their own template.',
  },
  {
    id: 'ft-2',
    question: 'What is the purpose of the @Injectable decorator?',
    options: ['To create components', 'To mark a class as available for dependency injection', 'To inject CSS styles', 'To make a class abstract'],
    correctAnswer: 1,
    explanation:
      '@Injectable marks a class so Angular\'s DI system can create and deliver instances of it. providedIn: "root" registers it as a singleton.',
  },
  {
    id: 'ft-3',
    question: 'What is the difference between @Input() and @Output()?',
    options: ['No difference', '@Input receives data from the parent; @Output emits events to the parent', '@Input is for services; @Output is for components', '@Output receives data from the parent'],
    correctAnswer: 1,
    explanation:
      '@Input() creates a one-way data binding from parent to child. @Output() creates an EventEmitter that sends data from child to parent via custom events.',
  },
  {
    id: 'ft-4',
    question: 'What is the Angular change detection mechanism?',
    options: ['A CSS detection system', 'A system that checks for data changes and updates the DOM accordingly', 'A security scanning mechanism', 'A build optimization tool'],
    correctAnswer: 1,
    explanation:
      'Change detection traverses the component tree checking for data changes. Default strategy checks everything; OnPush only checks when inputs change or events fire.',
  },
  {
    id: 'ft-5',
    question: 'What is the purpose of ngOnInit vs the constructor?',
    options: ['They do the same thing', 'The constructor handles DI; ngOnInit handles initialization logic after inputs are set', 'ngOnInit runs before the constructor', 'The constructor should contain all initialization'],
    correctAnswer: 1,
    explanation:
      'The constructor should only be used for DI. ngOnInit runs after Angular initializes input properties, making it the right place for initialization logic.',
  },
  {
    id: 'ft-6',
    question: 'What is lazy loading and how is it configured?',
    options: ['Loading CSS lazily', 'Loading modules on demand using loadComponent/loadChildren in route configuration', 'Slow rendering on purpose', 'Deferred API calls'],
    correctAnswer: 1,
    explanation:
      'Lazy loading uses dynamic imports in route config (loadComponent: () => import(...)) to defer loading until the route is accessed, reducing initial bundle size.',
  },
  {
    id: 'ft-7',
    question: 'What is the async pipe and why is it recommended?',
    options: ['A pipe for async/await only', 'A pipe that subscribes to Observables and auto-unsubscribes on component destruction', 'A pipe for HTTP requests', 'A pipe that makes synchronous code async'],
    correctAnswer: 1,
    explanation:
      'The async pipe subscribes to Observables/Promises in the template, displays emitted values, and automatically unsubscribes when the component is destroyed — preventing memory leaks.',
  },
  {
    id: 'ft-8',
    question: 'What is the difference between switchMap, mergeMap, and concatMap?',
    options: ['No difference', 'switchMap cancels previous; mergeMap runs concurrently; concatMap queues sequentially', 'mergeMap cancels previous', 'concatMap runs concurrently'],
    correctAnswer: 1,
    explanation:
      'switchMap cancels the previous inner Observable on new emissions. mergeMap maintains all subscriptions concurrently. concatMap queues and processes them one at a time in order.',
  },
  {
    id: 'ft-9',
    question: 'What is the purpose of route guards?',
    options: ['To guard CSS routes', 'To control navigation by allowing, denying, or redirecting access to routes', 'To protect API endpoints', 'To guard database queries'],
    correctAnswer: 1,
    explanation:
      'Route guards (canActivate, canDeactivate, resolve, canMatch) run before navigation to check conditions like authentication, permissions, or data availability.',
  },
  {
    id: 'ft-10',
    question: 'What is Reactive Forms vs Template-Driven Forms?',
    options: ['They are identical', 'Reactive: model-driven in TypeScript; Template-driven: directive-driven in templates', 'Template-driven is more powerful', 'Reactive only works with RxJS'],
    correctAnswer: 1,
    explanation:
      'Reactive Forms define the form model in TypeScript (FormGroup, FormControl) for explicit control. Template-driven forms use ngModel directives for simpler two-way binding.',
  },
  {
    id: 'ft-11',
    question: 'What is Angular Signals and how do they differ from RxJS?',
    options: ['Signals replace RxJS completely', 'Signals provide synchronous fine-grained reactivity; RxJS handles async streams and complex operators', 'Signals are only for templates', 'RxJS is deprecated in favor of Signals'],
    correctAnswer: 1,
    explanation:
      'Signals provide synchronous, fine-grained reactivity for UI state. RxJS handles complex async operations, streams, and operators. They complement each other.',
  },
  {
    id: 'ft-12',
    question: 'What are HTTP interceptors used for?',
    options: ['Intercepting CSS requests', 'Adding headers, handling errors, caching, and logging for all HTTP requests globally', 'Intercepting route changes', 'Intercepting form submissions'],
    correctAnswer: 1,
    explanation:
      'Interceptors sit in the HTTP pipeline to add auth headers, handle errors globally, implement caching, log requests, and more — without modifying individual service calls.',
  },
  {
    id: 'ft-13',
    question: 'What is content projection in Angular?',
    options: ['Projecting 3D content', 'Using <ng-content> to let parent components pass content into child component templates', 'Projecting services', 'Projecting routes'],
    correctAnswer: 1,
    explanation:
      'Content projection uses <ng-content> slots in child components, allowing parents to insert custom HTML/components into the child\'s template at designated locations.',
  },
  {
    id: 'ft-14',
    question: 'What is the difference between ViewChild and ContentChild?',
    options: ['No difference', 'ViewChild queries the component\'s own template; ContentChild queries projected (ng-content) elements', 'ContentChild is deprecated', 'ViewChild queries services'],
    correctAnswer: 1,
    explanation:
      'ViewChild accesses elements defined in the component\'s own template. ContentChild accesses elements projected from the parent via <ng-content>.',
  },
  {
    id: 'ft-15',
    question: 'What is the purpose of ChangeDetectionStrategy.OnPush?',
    options: ['To push changes to the server', 'To optimize performance by only checking for changes when inputs change or events fire', 'To push CSS updates', 'To enable real-time updates'],
    correctAnswer: 1,
    explanation:
      'OnPush limits change detection to run only when @Input references change, DOM events fire within the component, or the async pipe receives a new value.',
  },
  {
    id: 'ft-16',
    question: 'What is NgRx and when should you use it?',
    options: ['Always use it', 'A Redux-based state management library for complex apps with shared state across many components', 'A routing library', 'A testing framework'],
    correctAnswer: 1,
    explanation:
      'NgRx provides centralized state management using Store, Actions, Reducers, and Effects. Best for complex apps where many components share and modify state.',
  },
  {
    id: 'ft-17',
    question: 'What is TestBed and how does it help in testing?',
    options: ['A physical testing device', 'Angular\'s testing utility that configures a test module for creating and testing components with DI', 'A bed for sleeping during tests', 'A database testing tool'],
    correctAnswer: 1,
    explanation:
      'TestBed creates an isolated testing module with configurable providers, declarations, and imports, allowing you to test components and services with dependency injection.',
  },
  {
    id: 'ft-18',
    question: 'What is AOT compilation and why is it used?',
    options: ['Compiles at runtime for flexibility', 'Compiles templates at build time for faster startup, smaller bundles, and early error detection', 'Only compiles TypeScript', 'A testing compilation mode'],
    correctAnswer: 1,
    explanation:
      'Ahead-of-Time compilation compiles Angular templates during the build process, resulting in faster rendering, smaller bundles, and compile-time template error detection.',
  },
  {
    id: 'ft-19',
    question: 'What is the purpose of provideHttpClient() in standalone apps?',
    options: ['Creates HTTP servers', 'Configures HttpClient for dependency injection without HttpClientModule', 'Provides HTTP interceptors only', 'Creates REST APIs'],
    correctAnswer: 1,
    explanation:
      'provideHttpClient() is the standalone API for configuring Angular\'s HttpClient, replacing HttpClientModule. It supports withInterceptors() and withXsrfConfiguration().',
  },
  {
    id: 'ft-20',
    question: 'What is SSR and client hydration in Angular?',
    options: ['Static site rendering', 'SSR renders HTML on the server; hydration attaches Angular to that DOM in the browser', 'Client-side only rendering', 'Caching mechanism'],
    correctAnswer: 1,
    explanation:
      'Server-Side Rendering generates HTML on the server for fast initial load and SEO. Client hydration then attaches Angular\'s logic to the existing DOM without recreating it.',
  },
  {
    id: 'ft-21',
    question: 'What is the @defer block in Angular 17+?',
    options: ['A try-catch block', 'A template block that defers loading of content until a trigger condition like viewport visibility', 'A CSS defer block', 'A routing defer'],
    correctAnswer: 1,
    explanation:
      '@defer lazily loads template sections based on triggers (on viewport, on idle, on interaction), with @placeholder, @loading, and @error fallback blocks.',
  },
  {
    id: 'ft-22',
    question: 'What is the purpose of the inject() function?',
    options: ['SQL injection', 'To retrieve a dependency from the Angular injector in constructor or functional contexts', 'To inject HTML into templates', 'To inject CSS styles'],
    correctAnswer: 1,
    explanation:
      'inject() retrieves a dependency from Angular\'s DI system. It works in constructors, initial field assignments, and functional contexts like guards and interceptors.',
  },
  {
    id: 'ft-23',
    question: 'How does Angular handle XSS protection?',
    options: ['It doesn\'t', 'Angular automatically sanitizes all values bound in templates to prevent XSS attacks', 'It uses a WAF', 'It blocks all scripts'],
    correctAnswer: 1,
    explanation:
      'Angular treats all template-bound values as untrusted and sanitizes them. Script tags, dangerous URLs, and unsafe HTML are stripped to prevent cross-site scripting.',
  },
  {
    id: 'ft-24',
    question: 'What is the purpose of the trackBy function in *ngFor?',
    options: ['Tracking user behavior', 'Providing identity for list items so Angular can efficiently reuse DOM elements', 'Tracking API calls', 'Tracking form changes'],
    correctAnswer: 1,
    explanation:
      'trackBy gives each item a unique identity, allowing Angular to track which items changed, were added, or removed — reusing existing DOM elements for performance.',
  },
  {
    id: 'ft-25',
    question: 'What is the difference between template-driven validation and reactive validation?',
    options: ['No difference', 'Template uses directives (required, minlength); Reactive uses Validators class in TypeScript', 'Template is more powerful', 'Reactive only supports custom validators'],
    correctAnswer: 1,
    explanation:
      'Template-driven validation uses HTML attributes (required, minlength). Reactive validation uses Validators.required, Validators.minLength() in TypeScript, enabling dynamic and testable validation.',
  },
  {
    id: 'ft-26',
    question: 'What is the Angular animation trigger/state/transition model?',
    options: ['CSS animations only', 'A declarative API where triggers define states and transitions define how to animate between them', 'jQuery animation model', 'SVG animations'],
    correctAnswer: 1,
    explanation:
      'Angular animations define triggers (named animation targets), states (style snapshots), and transitions (how to animate between states using animate() and keyframes).',
  },
  {
    id: 'ft-27',
    question: 'What is the purpose of environment files in Angular?',
    options: ['To set Node.js environment variables', 'To provide environment-specific configuration values swapped at build time', 'To configure the Angular CLI', 'To define CSS variables'],
    correctAnswer: 1,
    explanation:
      'Environment files (environment.ts, environment.prod.ts) provide build-time configuration. Angular replaces the file based on the build target configuration.',
  },
  {
    id: 'ft-28',
    question: 'What is the purpose of the effect() function with signals?',
    options: ['To create visual effects', 'To perform side effects that automatically re-run when their tracked signals change', 'To handle errors', 'To create animations'],
    correctAnswer: 1,
    explanation:
      'effect() creates a reactive side effect that tracks signal reads and re-executes when any tracked signal changes. Used for logging, storage sync, or analytics.',
  },
  {
    id: 'ft-29',
    question: 'What is tree-shaking and how does Angular optimize for it?',
    options: ['Removing DOM nodes', 'Removing unused code from bundles; Angular enables it with providedIn: "root" and standalone components', 'Shaking the component tree', 'A testing optimization'],
    correctAnswer: 1,
    explanation:
      'Tree-shaking eliminates unused code during the build. providedIn: "root" makes services tree-shakable. Standalone components avoid module-level side effects.',
  },
  {
    id: 'ft-30',
    question: 'What is the new control flow syntax (@if, @for, @switch) in Angular 17+?',
    options: ['JavaScript control flow statements', 'Built-in template syntax replacing *ngIf, *ngFor, *ngSwitch with better performance and type checking', 'CSS control flow', 'Server-side control flow'],
    correctAnswer: 1,
    explanation:
      'The new control flow syntax (@if, @for, @switch) replaces structural directives with a more readable, performant, and type-safe template syntax built into the Angular compiler.',
  },
];
