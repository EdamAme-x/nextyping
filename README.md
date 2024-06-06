# nextyping
Next generation type system for TypeScript

Nextyping is superset of typescript

```ts
import { $if, $equal } from "jsr:@edamame-x/nextyping";

type isOne<T extends number> = $if<$equal<1, T>, "yes", "no">;

type result1 = isOne<1>; // yes
type result2 = isOne<2>; // no
```

Registry: JSR / https://jsr.io/@edamame-x/nextyping
