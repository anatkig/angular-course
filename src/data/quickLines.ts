export interface QuickLineChallenge {
  id: string;
  /** Short description of what to do */
  prompt: string;
  /** Lines of code shown above the blank line */
  codeBefore: string[];
  /** Lines of code shown below the blank line */
  codeAfter: string[];
  /** The exact expected answer (trimmed for comparison) */
  answer: string;
  /** Hint shown on request */
  hint: string;
  /** Module ID where this topic is explained */
  moduleId: string;
  /** Short explanation shown after answering */
  explanation: string;
}

export const quickLineChallenges: QuickLineChallenge[] = [
  // --- TypeScript & Angular Basics ---
  {
    id: 'ql-1',
    prompt: 'Define a standalone component with a selector "app-hello".',
    codeBefore: [],
    codeAfter: [
      'export class HelloComponent {}',
    ],
    answer: "@Component({ selector: 'app-hello', standalone: true, template: '<h1>Hello</h1>' })",
    hint: 'Use @Component with selector, standalone, and template properties.',
    moduleId: 'mod-1',
    explanation: '@Component decorator defines metadata for an Angular component including its selector and template.',
  },
  {
    id: 'ql-2',
    prompt: 'Declare an interface for a User with id (number) and name (string).',
    codeBefore: [],
    codeAfter: [
      'const user: User = { id: 1, name: "Alice" };',
    ],
    answer: 'export interface User { id: number; name: string; }',
    hint: 'Use the interface keyword with typed properties.',
    moduleId: 'mod-1',
    explanation: 'TypeScript interfaces define the shape of objects for type checking without generating any runtime code.',
  },
  {
    id: 'ql-3',
    prompt: 'Use string interpolation in a template to display the user\'s name.',
    codeBefore: [
      '<div>',
    ],
    codeAfter: [
      '</div>',
    ],
    answer: '  <p>Hello, {{ user.name }}!</p>',
    hint: 'Angular interpolation uses double curly braces: {{ expression }}.',
    moduleId: 'mod-2',
    explanation: 'Interpolation {{ }} evaluates the expression and renders the result as text inside the template.',
  },
  {
    id: 'ql-4',
    prompt: 'Use property binding to set the disabled attribute on a button.',
    codeBefore: [],
    codeAfter: [
      '  Submit',
      '</button>',
    ],
    answer: '<button [disabled]="isLoading">',
    hint: 'Property binding uses [property]="expression" syntax.',
    moduleId: 'mod-2',
    explanation: 'Property binding [disabled]="expr" sets the DOM property to the value of the component expression.',
  },
  {
    id: 'ql-5',
    prompt: 'Use event binding to call a method when a button is clicked.',
    codeBefore: [],
    codeAfter: [],
    answer: '<button (click)="onSave()">Save</button>',
    hint: 'Event binding uses (event)="handler()" syntax.',
    moduleId: 'mod-2',
    explanation: 'Event binding (click)="handler()" listens for DOM events and calls the specified component method.',
  },
  // --- Directives ---
  {
    id: 'ql-6',
    prompt: 'Use the new @if control flow to conditionally show an element.',
    codeBefore: [],
    codeAfter: [
      '  <p>Welcome, {{ user.name }}!</p>',
      '}',
    ],
    answer: '@if (user) {',
    hint: 'The new @if block replaces *ngIf in Angular 17+.',
    moduleId: 'mod-2',
    explanation: '@if is the new built-in control flow that checks a condition and renders content conditionally.',
  },
  {
    id: 'ql-7',
    prompt: 'Use @for to loop through a list of items with a track expression.',
    codeBefore: [],
    codeAfter: [
      '  <li>{{ item.name }}</li>',
      '}',
    ],
    answer: '@for (item of items; track item.id) {',
    hint: '@for requires a track expression for efficient list rendering.',
    moduleId: 'mod-2',
    explanation: '@for replaces *ngFor and requires a track expression that provides unique identity for each item.',
  },
  // --- Component Communication ---
  {
    id: 'ql-8',
    prompt: 'Declare an Input property for a title string.',
    codeBefore: [
      'export class CardComponent {',
    ],
    codeAfter: [
      '}',
    ],
    answer: '  @Input() title = "";',
    hint: '@Input() marks a property that can be set by the parent component.',
    moduleId: 'mod-3',
    explanation: '@Input() creates a one-way data binding from parent to child, allowing external configuration of the component.',
  },
  {
    id: 'ql-9',
    prompt: 'Declare an Output event emitter for a close event.',
    codeBefore: [
      'export class ModalComponent {',
    ],
    codeAfter: [
      '}',
    ],
    answer: '  @Output() close = new EventEmitter<void>();',
    hint: '@Output() with EventEmitter sends events to the parent.',
    moduleId: 'mod-3',
    explanation: '@Output() creates a custom event that the child can emit and the parent can listen to with (close)="handler()".',
  },
  {
    id: 'ql-10',
    prompt: 'Emit an event from a child component when a button is clicked.',
    codeBefore: [
      '@Output() save = new EventEmitter<string>();',
      '',
      'onSave() {',
    ],
    codeAfter: [
      '}',
    ],
    answer: '  this.save.emit(this.data);',
    hint: 'Use .emit(value) on the EventEmitter to send data upward.',
    moduleId: 'mod-3',
    explanation: 'emit() dispatches the custom event with an optional payload that the parent receives in the event handler.',
  },
  // --- Services & DI ---
  {
    id: 'ql-11',
    prompt: 'Create a service that is provided at the root level.',
    codeBefore: [],
    codeAfter: [
      'export class UserService {',
      '  getUsers() { return this.http.get<User[]>("/api/users"); }',
      '}',
    ],
    answer: "@Injectable({ providedIn: 'root' })",
    hint: 'providedIn: "root" makes the service a singleton available app-wide.',
    moduleId: 'mod-4',
    explanation: 'providedIn: "root" registers the service in the root injector as a singleton, making it tree-shakable.',
  },
  {
    id: 'ql-12',
    prompt: 'Inject a service using the inject() function.',
    codeBefore: [
      'export class UserComponent {',
    ],
    codeAfter: [
      '}',
    ],
    answer: '  private userService = inject(UserService);',
    hint: 'inject() retrieves a dependency from the Angular injector.',
    moduleId: 'mod-4',
    explanation: 'The inject() function is the modern way to inject dependencies, usable in constructors and field initializers.',
  },
  // --- Routing ---
  {
    id: 'ql-13',
    prompt: 'Define a lazy-loaded route for the "admin" path.',
    codeBefore: [
      'export const routes: Routes = [',
    ],
    codeAfter: [
      '];',
    ],
    answer: "  { path: 'admin', loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent) },",
    hint: 'Use loadComponent with a dynamic import for lazy loading.',
    moduleId: 'mod-5',
    explanation: 'loadComponent with a dynamic import() defers loading the component\'s code until the route is accessed.',
  },
  {
    id: 'ql-14',
    prompt: 'Read a route parameter in a component.',
    codeBefore: [
      'export class UserDetailComponent {',
      '  private route = inject(ActivatedRoute);',
    ],
    codeAfter: [
      '  }',
      '}',
    ],
    answer: "  id = this.route.snapshot.paramMap.get('id');",
    hint: 'ActivatedRoute.snapshot.paramMap.get() reads route parameters.',
    moduleId: 'mod-5',
    explanation: 'ActivatedRoute provides access to route parameters. snapshot gives a one-time read; paramMap observable provides updates.',
  },
  // --- Reactive Forms ---
  {
    id: 'ql-15',
    prompt: 'Create a FormGroup with name (required) and email (required, email) controls.',
    codeBefore: [
      'export class SignupComponent {',
    ],
    codeAfter: [
      '}',
    ],
    answer: "  form = new FormGroup({ name: new FormControl('', Validators.required), email: new FormControl('', [Validators.required, Validators.email]) });",
    hint: 'new FormGroup({ key: new FormControl(default, validators) }).',
    moduleId: 'mod-6',
    explanation: 'FormGroup aggregates FormControls. Each control has an initial value and optional validators.',
  },
  {
    id: 'ql-16',
    prompt: 'Display a validation error message in a template.',
    codeBefore: [],
    codeAfter: [],
    answer: '@if (form.controls.email.hasError(\'required\')) { <span>Email is required</span> }',
    hint: 'Use control.hasError(\'validatorName\') to check specific errors.',
    moduleId: 'mod-6',
    explanation: 'hasError() checks if a specific validation error exists on the control, enabling targeted error messages.',
  },
  // --- RxJS ---
  {
    id: 'ql-17',
    prompt: 'Use the async pipe to subscribe to an Observable in a template.',
    codeBefore: [],
    codeAfter: [
      '  <li>{{ user.name }}</li>',
      '}',
    ],
    answer: '@for (user of users$ | async; track user.id) {',
    hint: 'The | async pipe subscribes to an Observable and auto-unsubscribes.',
    moduleId: 'mod-7',
    explanation: 'The async pipe handles subscribing and unsubscribing automatically, preventing memory leaks.',
  },
  {
    id: 'ql-18',
    prompt: 'Use switchMap to cancel previous search requests.',
    codeBefore: [
      'this.searchControl.valueChanges.pipe(',
      '  debounceTime(300),',
    ],
    codeAfter: [
      ');',
    ],
    answer: '  switchMap(term => this.searchService.search(term))',
    hint: 'switchMap cancels the previous inner Observable on each new emission.',
    moduleId: 'mod-7',
    explanation: 'switchMap is ideal for search-as-you-type: it cancels the previous HTTP request when a new search term arrives.',
  },
  {
    id: 'ql-19',
    prompt: 'Create an Observable using the of() function.',
    codeBefore: [
      'import { of } from "rxjs";',
    ],
    codeAfter: [
      'numbers$.subscribe(n => console.log(n)); // 1, 2, 3',
    ],
    answer: 'const numbers$ = of(1, 2, 3);',
    hint: 'of() creates an Observable from a set of values.',
    moduleId: 'mod-7',
    explanation: 'of() creates a synchronous Observable that emits each provided value and then completes.',
  },
  // --- HTTP ---
  {
    id: 'ql-20',
    prompt: 'Make a GET request using HttpClient.',
    codeBefore: [
      'export class ProductService {',
      '  private http = inject(HttpClient);',
    ],
    codeAfter: [
      '  }',
      '}',
    ],
    answer: "  getProducts() { return this.http.get<Product[]>('/api/products'); }",
    hint: 'this.http.get<T>(url) returns an Observable<T>.',
    moduleId: 'mod-8',
    explanation: 'HttpClient.get<T>() returns a typed Observable. The request fires only when subscribed to.',
  },
  {
    id: 'ql-21',
    prompt: 'Create a functional HTTP interceptor that adds an auth header.',
    codeBefore: [
      'export const authInterceptor: HttpInterceptorFn = (req, next) => {',
    ],
    codeAfter: [
      '  return next(cloned);',
      '};',
    ],
    answer: "  const cloned = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });",
    hint: 'Clone the request and set headers using req.clone().',
    moduleId: 'mod-8',
    explanation: 'HTTP requests are immutable. req.clone() creates a modified copy with the new auth header.',
  },
  // --- Pipes ---
  {
    id: 'ql-22',
    prompt: 'Use the date pipe to format a date in a template.',
    codeBefore: [],
    codeAfter: [],
    answer: "<p>{{ createdAt | date:'mediumDate' }}</p>",
    hint: "The date pipe uses | date:'format' syntax.",
    moduleId: 'mod-9',
    explanation: "The date pipe formats Date values. 'mediumDate' outputs like 'Sep 15, 2024'.",
  },
  {
    id: 'ql-23',
    prompt: 'Create a custom pipe that reverses a string.',
    codeBefore: [
      "@Pipe({ name: 'reverse', standalone: true })",
    ],
    codeAfter: [
      '  transform(value: string): string {',
      '    return value.split("").reverse().join("");',
      '  }',
      '}',
    ],
    answer: 'export class ReversePipe implements PipeTransform {',
    hint: 'Custom pipes implement the PipeTransform interface.',
    moduleId: 'mod-9',
    explanation: 'Custom pipes implement PipeTransform with a transform() method, creating reusable template transformations.',
  },
  // --- Signals ---
  {
    id: 'ql-24',
    prompt: 'Create a writable signal with an initial value of 0.',
    codeBefore: [
      'import { signal } from "@angular/core";',
    ],
    codeAfter: [
      'count.set(5);',
    ],
    answer: 'const count = signal(0);',
    hint: 'signal(initialValue) creates a writable reactive signal.',
    moduleId: 'mod-10',
    explanation: 'signal() creates a reactive value that notifies dependents when changed via .set(), .update(), or .mutate().',
  },
  {
    id: 'ql-25',
    prompt: 'Create a computed signal that doubles the count.',
    codeBefore: [
      'const count = signal(5);',
    ],
    codeAfter: [
      'console.log(doubled()); // 10',
    ],
    answer: 'const doubled = computed(() => count() * 2);',
    hint: 'computed() derives a read-only signal from other signals.',
    moduleId: 'mod-10',
    explanation: 'computed() creates a derived signal that automatically recalculates when its dependencies change.',
  },
  // --- Lifecycle ---
  {
    id: 'ql-26',
    prompt: 'Implement OnInit to fetch data when the component initializes.',
    codeBefore: [
      'export class UserListComponent implements OnInit {',
      '  private userService = inject(UserService);',
      '  users: User[] = [];',
    ],
    codeAfter: [
      '  }',
      '}',
    ],
    answer: '  ngOnInit() { this.userService.getUsers().subscribe(u => this.users = u);',
    hint: 'ngOnInit runs after Angular initializes the component.',
    moduleId: 'mod-11',
    explanation: 'ngOnInit is the standard lifecycle hook for initialization logic that depends on input properties being set.',
  },
  {
    id: 'ql-27',
    prompt: 'Implement OnDestroy to unsubscribe from an Observable.',
    codeBefore: [
      'private sub!: Subscription;',
    ],
    codeAfter: [
      '}',
    ],
    answer: 'ngOnDestroy() { this.sub.unsubscribe(); }',
    hint: 'ngOnDestroy is called before Angular destroys the component.',
    moduleId: 'mod-11',
    explanation: 'ngOnDestroy is used for cleanup — unsubscribing Observables, removing event listeners, and releasing resources.',
  },
  // --- Testing ---
  {
    id: 'ql-28',
    prompt: 'Configure TestBed for a component test.',
    codeBefore: [
      'beforeEach(async () => {',
    ],
    codeAfter: [
      '  fixture = TestBed.createComponent(UserComponent);',
      '});',
    ],
    answer: "  await TestBed.configureTestingModule({ imports: [UserComponent] }).compileComponents();",
    hint: 'TestBed.configureTestingModule() sets up the test module.',
    moduleId: 'mod-14',
    explanation: 'configureTestingModule creates an isolated testing module. Standalone components go in imports, not declarations.',
  },
  {
    id: 'ql-29',
    prompt: 'Write a service test that verifies an HTTP GET call.',
    codeBefore: [
      'it("should fetch users", () => {',
      '  service.getUsers().subscribe(users => {',
      '    expect(users.length).toBe(2);',
      '  });',
    ],
    codeAfter: [
      '  req.flush([{ id: 1 }, { id: 2 }]);',
      '});',
    ],
    answer: "  const req = httpMock.expectOne('/api/users');",
    hint: 'HttpTestingController.expectOne() verifies and captures HTTP requests.',
    moduleId: 'mod-14',
    explanation: 'expectOne() asserts that exactly one request was made to the given URL and returns a handle to flush a response.',
  },
  // --- Performance ---
  {
    id: 'ql-30',
    prompt: 'Set the change detection strategy to OnPush.',
    codeBefore: [
      '@Component({',
      "  selector: 'app-fast',",
      "  template: '<p>{{ data }}</p>',",
    ],
    codeAfter: [
      '})',
      'export class FastComponent {',
      '  @Input() data = "";',
      '}',
    ],
    answer: '  changeDetection: ChangeDetectionStrategy.OnPush,',
    hint: 'OnPush limits change detection to input changes and events.',
    moduleId: 'mod-15',
    explanation: 'OnPush change detection skips the component unless its @Input references change, improving performance.',
  },
];
