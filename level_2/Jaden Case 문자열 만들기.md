![스크린샷 2022-10-23 오후 1 52 55](https://user-images.githubusercontent.com/39263149/197374471-bfd28855-24f6-4a77-975a-998f46405212.png)

```javascript
function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((string) => string.replace(/^[a-z]/, (char) => char.toUpperCase()))
    .join(" ");
}
```
