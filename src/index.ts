/**
 * Superset of TypeScript
 * @module
 */

// Common types
export type $extends<Child, Parent, Truthy = true, Falsy = false> = Child extends Parent ? Truthy : Falsy;

// Syntax types
export type $if<Condition extends boolean, Then, Else> = $extends<Condition, true, Then, Else>
export type $switch<Case extends any, Cases extends any[], Default = never> = Case extends Cases[number] ? Cases[number] : Default;

// Conditional types
export type $equal<Left, Right, Truthy = true, Falsy = false> = $extends<Left, Right, Truthy, Falsy>;
export type $or<Left extends boolean, Right extends boolean, Truthy = true, Falsy = false> = $extends<Left, true, $extends<Right, true, Truthy, Falsy>, Falsy>;
export type $and<Left extends boolean, Right extends boolean, Truthy = true, Falsy = false> = $extends<Left, true, $extends<Right, true, Truthy, Falsy>, Falsy>;
export type $not<Condition extends boolean, Truthy = true, Falsy = false> = $extends<Condition, true, Falsy, Truthy>;
