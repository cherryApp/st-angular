# Angular Standalone Component Generators

This is a collection of generators for Angular standalone components.

### Installation
- `npm i st-angular`

### Generate Components
- `ng g st-angular:cmp page/test/mock/login`
- It generates a new component like this:
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `
    <p>LoginComponent works!</p>
  `,
  styles: [``]
})
export class LoginComponent implements OnInit {...}
```
- This component will be standalone, without any additional files.
