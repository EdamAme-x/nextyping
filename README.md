# nextyping
Next generation type system for TypeScript

Nextyping is superset of typescript

```ts
import type { $if, $equal, $string } from "jsr:@edamame-x/nextyping";

type isOne<T extends number> = $if<$equal<1, T>, "yes", "no">;

type result1 = isOne<1>; // yes
type result2 = isOne<2>; // no

type splittedString = $string.$split("a1aaa1bbb1cccc", "1"); // ["a", "aaa", "bbb", "cccc"]

// and more: https://jsr.io/@edamame-x/nextyping/doc
```

Registry: JSR / https://jsr.io/@edamame-x/nextyping
