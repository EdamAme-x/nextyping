/**
 * SuperSet of TypeScript
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

// String Transformations types
export namespace $string {
    export type $concat<Left extends string, Right extends string> = `${Left}${Right}`;
    
    export type $replace<String extends string, Search extends string, Replacement extends string> = String extends `${infer Left}${Search}${infer Right}`? `${Left}${Replacement}${Right}` : String;
    type _replaceAllHelper<String extends string, Search extends string, Replacement extends string> = String extends `${infer Left}${Search}${infer Right}` ? `${Left}${_replaceAllHelper<Right, Search, Replacement>}${Replacement}` : String;
    export type $replaceAll<String extends string, Search extends string, Replacement extends string> = $if<$equal<String, $replace<String, Search, Replacement>>, String, _replaceAllHelper<$replace<String, Search, Replacement>, Search, Replacement>>;
    
    export type $trimStart<String extends string> = String extends ` ${infer Rest}` ? $trimStart<Rest> : String;
    export type $trimEnd<String extends string> = String extends `${infer Rest} ` ? $trimEnd<Rest> : String;
    type _trimHelper<String extends string> = $trimEnd<$trimStart<String>>;
    export type $trim<String extends string> = $if<$equal<String, _trimHelper<String>>, String, _trimHelper<String>>;
    
    type _tuple_length<Tuple extends any[]> = Tuple['length'];
    export type $repeatHelper<String extends string, Times extends number, Result extends string, Tuple extends any[]> =
        _tuple_length<Tuple> extends Times
        ? Result
        : $repeatHelper<String, Times, `${Result}${String}`, [String, ...Tuple]>;
    export type $repeat<String extends string, Times extends number> = $repeatHelper<String, Times, '', []>;

    export type $toLowerCase<Str extends string> = Str extends `${infer Head}${infer Tail}`
        ? `${Head extends Uppercase<Head> ? Lowercase<Head> : Head}${$toLowerCase<Tail>}`
        : Str;

    export type $toUpperCase<Str extends string> = Str extends `${infer Head}${infer Tail}`
        ? `${Head extends Lowercase<Head> ? Uppercase<Head> : Head}${$toUpperCase<Tail>}`
        : Str;
    
    export type $split<Str extends string, Separator extends string> = Str extends `${infer Head}${Separator}${infer Tail}` ? [Head,...$split<Tail, Separator>] : [Str];

    export type $charAt<Str extends string, Index extends number, Tuple extends any[] = []> =
        Str extends `${infer Head}${infer Tail}`
        ? _tuple_length<Tuple> extends Index
          ? Head
          : $charAt<Tail, Index, [...Tuple, any]>
        : Str;
}


type a = $string.$replace<'1231', '1', '2'>;
type b = $string.$replaceAll<'12311', '1', '2'>;
type c = $string.$trim<' 1231  '>;
type d = $string.$repeat<'1', 3>;
type e = $string.$toLowerCase<'1231abcD'>;
type f = $string.$toUpperCase<'1231abcD'>;
type g = $string.$split<'a1231abcD', '1'>;
type h = $string.$charAt<'1231abcD', 1>;
