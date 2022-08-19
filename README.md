# Angular Standalone Component Generators

This is a collection of generators for Angular standalone components.

### Installation
- `npm i st-angular`

### Usage
- `ng g st-angular:st-angular page/test/mock/login`
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
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```
- This component will be a standalone component without any additional files.
