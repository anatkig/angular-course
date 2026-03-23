import type { Module } from '../types';

export const module2: Module = {
  id: 'mod-2',
  title: 'Templates & Directives',
  description: 'Master Angular template syntax, built-in directives, and control flow.',
  topics: [
    {
      id: 'mod2-t1',
      title: 'Built-in Control Flow (@if, @for, @switch)',
      explanation: `## Modern Control Flow (Angular 17+)

Angular 17 introduced **built-in control flow** syntax that replaces structural directives.

### @if / @else

\`\`\`html
@if (isLoggedIn) {
  <p>Welcome back, {{ user.name }}!</p>
} @else {
  <p>Please log in.</p>
}
\`\`\`

### @for / @empty

\`\`\`html
@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
} @empty {
  <p>No items found.</p>
}
\`\`\`

> **Important:** The \`track\` expression is required for performance optimization.

### @switch

\`\`\`html
@switch (status) {
  @case ('active') {
    <span class="badge green">Active</span>
  }
  @case ('inactive') {
    <span class="badge red">Inactive</span>
  }
  @default {
    <span class="badge gray">Unknown</span>
  }
}
\`\`\`

### @let (Angular 18+)

\`\`\`html
@let fullName = user.firstName + ' ' + user.lastName;
<h2>{{ fullName }}</h2>
\`\`\``,
      tasks: [{
        description: 'Create a template that uses @if to show/hide a message, @for to iterate over a list of users with track, and @switch for a status badge.',
        starterCode: `<!-- users: { id: number, name: string, status: string }[] -->

<!-- TODO: Show "No users" if list is empty, otherwise iterate -->
<!-- TODO: For each user, display name and a status badge using @switch -->`,
        solution: `@if (users.length === 0) {
  <p>No users found.</p>
} @else {
  @for (user of users; track user.id) {
    <div class="user-row">
      <span>{{ user.name }}</span>
      @switch (user.status) {
        @case ('active') {
          <span class="badge green">Active</span>
        }
        @case ('inactive') {
          <span class="badge red">Inactive</span>
        }
        @default {
          <span class="badge gray">Unknown</span>
        }
      }
    </div>
  }
}`,
        hints: [
          '@for requires a track expression for performance',
          '@if / @else replaces *ngIf with else template',
          '@switch replaces ngSwitch directive',
        ],
      }],
    },
    {
      id: 'mod2-t2',
      title: 'Structural Directives (*ngIf, *ngFor, *ngSwitch)',
      explanation: `## Structural Directives (Legacy/NgModule approach)

These directives change the DOM structure by adding or removing elements.

### *ngIf

\`\`\`html
<div *ngIf="isVisible">Visible content</div>

<div *ngIf="user; else noUser">
  Hello, {{ user.name }}
</div>
<ng-template #noUser>
  <p>No user found.</p>
</ng-template>
\`\`\`

### *ngFor

\`\`\`html
<ul>
  <li *ngFor="let item of items; let i = index; trackBy: trackById">
    {{ i + 1 }}. {{ item.name }}
  </li>
</ul>
\`\`\`

### *ngSwitch

\`\`\`html
<div [ngSwitch]="color">
  <p *ngSwitchCase="'red'">Red selected</p>
  <p *ngSwitchCase="'blue'">Blue selected</p>
  <p *ngSwitchDefault>Other color</p>
</div>
\`\`\`

### ng-template & ng-container

\`\`\`html
<!-- ng-container doesn't render a DOM element -->
<ng-container *ngIf="isLoading; else content">
  <p>Loading...</p>
</ng-container>
<ng-template #content>
  <p>Content loaded!</p>
</ng-template>
\`\`\``,
      tasks: [{
        description: 'Create a product list using *ngFor with index and trackBy. Show a "no products" message with *ngIf when the list is empty.',
        starterCode: `<!-- products: { id: number, name: string, price: number }[] -->

<!-- TODO: Use *ngIf to check if products exist -->
<!-- TODO: Use *ngFor with index and trackBy -->`,
        solution: `<div *ngIf="products.length > 0; else emptyList">
  <div *ngFor="let product of products; let i = index; trackBy: trackById" class="product">
    <span>{{ i + 1 }}. {{ product.name }} - \${{ product.price }}</span>
  </div>
</div>
<ng-template #emptyList>
  <p>No products available.</p>
</ng-template>

<!-- In component: -->
<!-- trackById(index: number, item: Product) { return item.id; } -->`,
        hints: [
          '*ngFor supports "let i = index" for the current index',
          'trackBy improves performance by tracking items by a unique key',
          '*ngIf with else uses a template reference variable',
        ],
      }],
    },
    {
      id: 'mod2-t3',
      title: 'Attribute Directives (ngClass, ngStyle)',
      explanation: `## Attribute Directives

These directives change the appearance or behavior of elements.

### ngClass

\`\`\`html
<!-- Single class toggle -->
<div [class.active]="isActive">Toggle class</div>

<!-- Multiple classes with ngClass -->
<div [ngClass]="{
  'active': isActive,
  'disabled': isDisabled,
  'highlight': isHighlighted
}">Styled div</div>

<!-- Array syntax -->
<div [ngClass]="['base', isActive ? 'active' : 'inactive']">Array classes</div>
\`\`\`

### ngStyle

\`\`\`html
<div [ngStyle]="{
  'color': textColor,
  'font-size': fontSize + 'px',
  'background-color': isHighlighted ? 'yellow' : 'transparent'
}">
  Dynamic styles
</div>

<!-- Single style binding -->
<div [style.color]="textColor">Single style</div>
<div [style.fontSize.px]="fontSize">With unit</div>
\`\`\`

### Template Reference Variables

\`\`\`html
<input #nameInput type="text" />
<button (click)="greet(nameInput.value)">Greet</button>
\`\`\``,
      tasks: [{
        description: 'Create a component with a list of items. Use [ngClass] to apply different CSS classes based on item status (active, pending, completed). Add a button that toggles an item\'s status.',
        starterCode: `<!-- items: { name: string, status: 'active' | 'pending' | 'completed' }[] -->

<!-- TODO: Display items with dynamic classes based on status -->
<!-- TODO: Add a button to cycle through statuses -->`,
        solution: `@for (item of items; track item.name) {
  <div [ngClass]="{
    'item': true,
    'item-active': item.status === 'active',
    'item-pending': item.status === 'pending',
    'item-completed': item.status === 'completed'
  }">
    <span>{{ item.name }} ({{ item.status }})</span>
    <button (click)="cycleStatus(item)">Toggle</button>
  </div>
}

<!-- In component: -->
<!-- cycleStatus(item: Item) {
  const statuses = ['active', 'pending', 'completed'];
  const idx = statuses.indexOf(item.status);
  item.status = statuses[(idx + 1) % 3];
} -->`,
        hints: [
          'ngClass takes an object where keys are class names and values are booleans',
          'Use modulo (%) to cycle through values',
          'Each class condition is evaluated independently',
        ],
      }],
    },
  ],
  test: [
    { id: 'mod2-q1', question: 'What is required when using @for in Angular 17+?', options: ['An index variable', 'A trackBy function', 'A track expression', 'An ngForOf directive'], correctAnswer: 2, explanation: 'The @for syntax requires a track expression (e.g., track item.id) for change detection optimization.' },
    { id: 'mod2-q2', question: 'What does ng-container do?', options: ['Creates a div element', 'Groups elements without adding a DOM node', 'Defines a component', 'Applies styles'], correctAnswer: 1, explanation: 'ng-container is a grouping element that doesn\'t render in the DOM, useful for applying structural directives without extra markup.' },
    { id: 'mod2-q3', question: 'How do you conditionally apply a CSS class?', options: ['class="active"', '[class.active]="condition"', 'ngClass=active', '(class)="active"'], correctAnswer: 1, explanation: '[class.active]="condition" conditionally adds the "active" class when the condition is true.' },
    { id: 'mod2-q4', question: 'What is the purpose of trackBy in *ngFor?', options: ['To sort items', 'To filter items', 'To help Angular identify items for efficient DOM updates', 'To add indexes to items'], correctAnswer: 2, explanation: 'trackBy helps Angular identify which items have changed, been added, or removed, so it can minimally update the DOM.' },
    { id: 'mod2-q5', question: 'How do you reference a template element in Angular?', options: ['Using id="ref"', 'Using #ref syntax', 'Using @ref syntax', 'Using ref="ref"'], correctAnswer: 1, explanation: 'Template reference variables use the # syntax (e.g., #myInput) to get a reference to a DOM element or directive.' },
  ],
};
