import type { Module } from '../types';

export const module3: Module = {
  id: 'mod-3',
  title: 'Component Communication',
  description: 'Master @Input, @Output, EventEmitter, content projection, and ViewChild.',
  topics: [
    {
      id: 'mod3-t1',
      title: '@Input — Parent to Child',
      explanation: `## Passing Data with @Input

The \`@Input()\` decorator lets a parent component pass data to a child component.

### Basic Usage

\`\`\`typescript
// child.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: '<p>Hello, {{ name }}!</p>',
})
export class ChildComponent {
  @Input() name = '';
}
\`\`\`

\`\`\`html
<!-- parent template -->
<app-child [name]="userName"></app-child>
\`\`\`

### Required Inputs (Angular 16+)

\`\`\`typescript
@Input({ required: true }) title!: string;
\`\`\`

### Input Transform

\`\`\`typescript
@Input({ transform: booleanAttribute }) disabled = false;
@Input({ transform: numberAttribute }) count = 0;
\`\`\`

### Signal Inputs (Angular 17+)

\`\`\`typescript
import { input } from '@angular/core';

export class MyComponent {
  name = input<string>('');           // optional with default
  id = input.required<number>();      // required
  label = input('default');           // inferred type
}
\`\`\``,
      task: {
        description: 'Create a child ProductCard component that receives a product object via @Input and displays its name and price.',
        starterCode: `import { Component, Input } from '@angular/core';

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: \`
    <!-- TODO: Display product name and price -->
  \`,
})
export class ProductCardComponent {
  // TODO: Add @Input for product
}`,
        solution: `import { Component, Input } from '@angular/core';

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: \`
    <div class="product-card">
      <h3>{{ product.name }}</h3>
      <p>\${{ product.price }}</p>
    </div>
  \`,
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}`,
        hints: [
          '@Input() decorates a property to receive data from parent',
          'Use { required: true } for mandatory inputs',
          'The ! (non-null assertion) tells TS the value will be set',
        ],
      },
    },
    {
      id: 'mod3-t2',
      title: '@Output & EventEmitter',
      explanation: `## Emitting Events with @Output

The \`@Output()\` decorator lets a child notify the parent of events.

### Basic Usage

\`\`\`typescript
// child.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: '<button (click)="onDelete()">Delete</button>',
})
export class ChildComponent {
  @Output() deleted = new EventEmitter<void>();

  onDelete() {
    this.deleted.emit();
  }
}
\`\`\`

\`\`\`html
<!-- parent template -->
<app-child (deleted)="handleDelete()"></app-child>
\`\`\`

### Emitting Data

\`\`\`typescript
@Output() itemSelected = new EventEmitter<Item>();

selectItem(item: Item) {
  this.itemSelected.emit(item);
}
\`\`\`

### Output Function (Angular 17+)

\`\`\`typescript
import { output } from '@angular/core';

export class MyComponent {
  closed = output<void>();
  selected = output<Item>();

  onClose() { this.closed.emit(); }
  onSelect(item: Item) { this.selected.emit(item); }
}
\`\`\``,
      task: {
        description: 'Create a RatingComponent that shows 5 stars. When a star is clicked, emit the rating value (1-5) to the parent using @Output.',
        starterCode: `import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  template: \`
    <!-- TODO: Display 5 clickable stars -->
    <!-- TODO: Emit rating on click -->
  \`,
})
export class RatingComponent {
  // TODO: Add @Output and methods
}`,
        solution: `import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  template: \`
    @for (star of stars; track star) {
      <span
        (click)="rate(star)"
        [style.cursor]="'pointer'"
        [style.color]="star <= currentRating ? 'gold' : 'gray'"
      >★</span>
    }
  \`,
})
export class RatingComponent {
  @Input() currentRating = 0;
  @Output() ratingChange = new EventEmitter<number>();
  stars = [1, 2, 3, 4, 5];

  rate(value: number) {
    this.currentRating = value;
    this.ratingChange.emit(value);
  }
}`,
        hints: [
          '@Output() creates an EventEmitter that emits events',
          'Use .emit(value) to send data to the parent',
          'The parent listens with (eventName)="handler($event)"',
        ],
      },
    },
    {
      id: 'mod3-t3',
      title: 'Content Projection (ng-content)',
      explanation: `## Content Projection

\`<ng-content>\` lets you project content from a parent into a child component's template.

### Single-Slot Projection

\`\`\`typescript
// card.component.ts
@Component({
  selector: 'app-card',
  template: \\\`
    <div class="card">
      <ng-content></ng-content>
    </div>
  \\\`,
})
export class CardComponent {}
\`\`\`

\`\`\`html
<app-card>
  <h2>Title</h2>
  <p>This content is projected!</p>
</app-card>
\`\`\`

### Multi-Slot Projection

\`\`\`typescript
@Component({
  selector: 'app-layout',
  template: \\\`
    <header><ng-content select="[header]"></ng-content></header>
    <main><ng-content></ng-content></main>
    <footer><ng-content select="[footer]"></ng-content></footer>
  \\\`,
})
export class LayoutComponent {}
\`\`\`

\`\`\`html
<app-layout>
  <div header>Header Content</div>
  <p>Main body content</p>
  <div footer>Footer Content</div>
</app-layout>
\`\`\``,
      task: {
        description: 'Create a reusable DialogComponent with multi-slot content projection for a title, body, and actions area.',
        starterCode: `@Component({
  selector: 'app-dialog',
  standalone: true,
  template: \`
    <!-- TODO: Create dialog with slots for title, body, and actions -->
  \`,
})
export class DialogComponent {}`,
        solution: `@Component({
  selector: 'app-dialog',
  standalone: true,
  template: \`
    <div class="dialog-overlay">
      <div class="dialog">
        <div class="dialog-title">
          <ng-content select="[dialog-title]"></ng-content>
        </div>
        <div class="dialog-body">
          <ng-content></ng-content>
        </div>
        <div class="dialog-actions">
          <ng-content select="[dialog-actions]"></ng-content>
        </div>
      </div>
    </div>
  \`,
})
export class DialogComponent {}

// Usage:
// <app-dialog>
//   <h2 dialog-title>Confirm</h2>
//   <p>Are you sure?</p>
//   <div dialog-actions>
//     <button>Cancel</button>
//     <button>OK</button>
//   </div>
// </app-dialog>`,
        hints: [
          'ng-content select="[attr]" matches elements with that attribute',
          'Default ng-content (no select) catches unmatched content',
          'Use descriptive attribute names for clarity',
        ],
      },
    },
  ],
  test: [
    { id: 'mod3-q1', question: 'What decorator is used to pass data from parent to child?', options: ['@Output', '@Input', '@Inject', '@Host'], correctAnswer: 1, explanation: '@Input() allows a parent component to bind a value to a child component\'s property.' },
    { id: 'mod3-q2', question: 'How does a child component notify its parent of an event?', options: ['Using @Input', 'Using @Output with EventEmitter', 'Using a shared service', 'Using localStorage'], correctAnswer: 1, explanation: '@Output() with EventEmitter lets the child emit custom events that the parent can listen to.' },
    { id: 'mod3-q3', question: 'What does ng-content do?', options: ['Creates new DOM content', 'Projects content from the parent into the child template', 'Generates a template dynamically', 'Loads content lazily'], correctAnswer: 1, explanation: 'ng-content acts as a placeholder that projects the content placed between the child component\'s tags in the parent template.' },
    { id: 'mod3-q4', question: 'How do you make an @Input required in Angular 16+?', options: ['@Input() required title', '@Required() title', '@Input({ required: true }) title', 'It is always required'], correctAnswer: 2, explanation: 'The { required: true } option in the @Input decorator makes the input mandatory — Angular throws an error if not provided.' },
    { id: 'mod3-q5', question: 'What is the signal-based input API?', options: ['@Signal() input', 'input() / input.required()', '@Input.signal()', 'signal.input()'], correctAnswer: 1, explanation: 'Angular 17+ provides input() and input.required() functions for signal-based inputs that integrate with the new reactive system.' },
  ],
};
