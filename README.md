# vue BEM 脚手架 支持vue cli 3.0

1. Simple BEM-style class name generator template中更方便的书写BEM class，
2. SUIT Class Support
3. CSS next support

```css
@b SearchForm2 {
  padding: 0;
  @m advanced {
    padding: 1rem;
  }
  @e textField {
    border: 1px solid #ccc;
    @when invalid {
      border: 1px solid red;
    }
  }
}
```