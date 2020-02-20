# useComponentDidMount

Do you get unreasonable annoyed while using the empty-dependency-array abstraction with `useEffect` to run effectful code on mount?

If so, please enjoy `useComponentDidMount`, which is just a thing abstraction over that abstraction. It's really just abstractions all the way down, until you reach the CPU, which is nothing more than a rock that we beat with hammers and ran electricity through until we tricked it into thinking for us.

Oh, as a bonus, I added `useComponentDidUnmount`. Hopefully it should be clear how this works.

# Example

```tsx
const Example = () => {
  const [list, setList] = useState([]);
  useComponentDidMount(() => {
    performAsyncLoad().then(data => setList(data));
  });
};
```
