# naming in typescript/js

## magic number

```typescript
const SECON_IN_DAY = 86400;
for (let i = 0; i < SECON_IN_DAY; i++) {
  // ...do something
}
```

## deep nesting

```typescript
const arr = [[[["value"]]]];

const show = (el) => {
  if (Array.isArray(el)) {
    return show(el[0]);
  }
  return el;
};
show(arr);
```

## stop using comment, use function/variable for definite (meaning variable name)

```typescript
const SECON_IN_DAY = 86400; // constant value
// function naming
const getDataFromApi
const findDataFromApi
const setData
isArray()
// class name but not for new date
class ClassName

```

## variable nesting

```typescript
const data = {
  nama: "alif",
  content: "content ini",
};
const { nama, content } = data;
```

