# nextyping
Next generation type system for TypeScript

Nextyping is superset of typescript
Exports only types.  

You will be able to program dynamically on typescript.
Try out the more advanced type system.

```bash
npx jsr add @edamame-x/nextyping
pnpx jsr add @edamame-x/nextyping
yarn dlx jsr add @edamame-x/nextyping
bunx jsr add @edamame-x/nextyping
deno add @edamame-x/nextyping
```

```ts
import type { $if, $equal, $string } from "@edamame-x/nextyping";

type isOne<T extends number> = $if<$equal<1, T>, "yes", "no">;

type result1 = isOne<1>; // yes
type result2 = isOne<2>; // no

type splittedString = $string.$split("a1aaa1bbb1cccc", "1"); // ["a", "aaa", "bbb", "cccc"]

// and more: https://jsr.io/@edamame-x/nextyping/doc
```

Registry: JSR / https://jsr.io/@edamame-x/nextyping

Friend: [https://github.com/millsp/ts-toolbelt](https://github.com/millsp/ts-toolbelt?tab=readme-ov-file)
