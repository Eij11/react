# Rules

`React Components` cant return more than one element
`Fragements` so that multiple elements can be shown in one COMPONENT

```react
    <>
      <h1>Header</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
```

`JSX ` expressions can only have html elements, but not if statements and for loops...
//conditional rendering

`error`

```jsx
if (items.length === 0)
  return (
    <>
      <h1>List</h1>
      <p>No item found</p>
    </>
  );
```

# inside the expression

```jsx
const message = items.length === 0 ? <p>No item found</p> : null;
//rendering list
return (
  <>
    <h1>List</h1>
    {message}
    <ul className="list-group">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </>
);
```

condition ? exprIfTrue : exprIfFalse
items.length === 0 ? <p>No item found</p> : null

True: Print
items.length === 0 && <p>No item found</p>

# Handling Events

```jsx
onClick = {() => console.log('Clicked')}
onClick={() => console.log(item, index)}

onClick={(event) => console.log(event)}
output: SyntheticBaseEvent {\_reactName: 'onClick', \_targetInst: null, type: 'click', nativeEvent: PointerEvent, target: li.list-group-item, …}
```

# Managing State

```jsx
selectActiveState === index ? "list-group-item active" : "list-group-item";
```
