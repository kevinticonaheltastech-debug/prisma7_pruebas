
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model proyectos
 * 
 */
export type proyectos = $Result.DefaultSelection<Prisma.$proyectosPayload>
/**
 * Model tareas
 * 
 */
export type tareas = $Result.DefaultSelection<Prisma.$tareasPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuarios.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuarios.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proyectos`: Exposes CRUD operations for the **proyectos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proyectos
    * const proyectos = await prisma.proyectos.findMany()
    * ```
    */
  get proyectos(): Prisma.proyectosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tareas`: Exposes CRUD operations for the **tareas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tareas
    * const tareas = await prisma.tareas.findMany()
    * ```
    */
  get tareas(): Prisma.tareasDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    usuarios: 'usuarios',
    proyectos: 'proyectos',
    tareas: 'tareas'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuarios" | "proyectos" | "tareas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      proyectos: {
        payload: Prisma.$proyectosPayload<ExtArgs>
        fields: Prisma.proyectosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.proyectosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.proyectosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectosPayload>
          }
          findFirst: {
            args: Prisma.proyectosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.proyectosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectosPayload>
          }
          findMany: {
            args: Prisma.proyectosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectosPayload>[]
          }
          create: {
            args: Prisma.proyectosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectosPayload>
          }
          createMany: {
            args: Prisma.proyectosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.proyectosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectosPayload>[]
          }
          delete: {
            args: Prisma.proyectosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectosPayload>
          }
          update: {
            args: Prisma.proyectosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectosPayload>
          }
          deleteMany: {
            args: Prisma.proyectosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.proyectosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.proyectosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectosPayload>[]
          }
          upsert: {
            args: Prisma.proyectosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectosPayload>
          }
          aggregate: {
            args: Prisma.ProyectosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProyectos>
          }
          groupBy: {
            args: Prisma.proyectosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProyectosGroupByOutputType>[]
          }
          count: {
            args: Prisma.proyectosCountArgs<ExtArgs>
            result: $Utils.Optional<ProyectosCountAggregateOutputType> | number
          }
        }
      }
      tareas: {
        payload: Prisma.$tareasPayload<ExtArgs>
        fields: Prisma.tareasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tareasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tareasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>
          }
          findFirst: {
            args: Prisma.tareasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tareasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>
          }
          findMany: {
            args: Prisma.tareasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>[]
          }
          create: {
            args: Prisma.tareasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>
          }
          createMany: {
            args: Prisma.tareasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tareasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>[]
          }
          delete: {
            args: Prisma.tareasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>
          }
          update: {
            args: Prisma.tareasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>
          }
          deleteMany: {
            args: Prisma.tareasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tareasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tareasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>[]
          }
          upsert: {
            args: Prisma.tareasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>
          }
          aggregate: {
            args: Prisma.TareasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTareas>
          }
          groupBy: {
            args: Prisma.tareasGroupByArgs<ExtArgs>
            result: $Utils.Optional<TareasGroupByOutputType>[]
          }
          count: {
            args: Prisma.tareasCountArgs<ExtArgs>
            result: $Utils.Optional<TareasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuarios?: usuariosOmit
    proyectos?: proyectosOmit
    tareas?: tareasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    proyectos: number
    tareas: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyectos?: boolean | UsuariosCountOutputTypeCountProyectosArgs
    tareas?: boolean | UsuariosCountOutputTypeCountTareasArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountProyectosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: proyectosWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountTareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tareasWhereInput
  }


  /**
   * Count Type ProyectosCountOutputType
   */

  export type ProyectosCountOutputType = {
    tareas: number
  }

  export type ProyectosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tareas?: boolean | ProyectosCountOutputTypeCountTareasArgs
  }

  // Custom InputTypes
  /**
   * ProyectosCountOutputType without action
   */
  export type ProyectosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProyectosCountOutputType
     */
    select?: ProyectosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProyectosCountOutputType without action
   */
  export type ProyectosCountOutputTypeCountTareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tareasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id_usuario: number | null
    nombre_usuario: string | null
    email: string | null
    contraseña: string | null
    rol: string | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id_usuario: number | null
    nombre_usuario: string | null
    email: string | null
    contraseña: string | null
    rol: string | null
  }

  export type UsuariosCountAggregateOutputType = {
    id_usuario: number
    nombre_usuario: number
    email: number
    contraseña: number
    rol: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosMinAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    email?: true
    contraseña?: true
    rol?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    email?: true
    contraseña?: true
    rol?: true
  }

  export type UsuariosCountAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    email?: true
    contraseña?: true
    rol?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id_usuario: number
    nombre_usuario: string
    email: string | null
    contraseña: string
    rol: string
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre_usuario?: boolean
    email?: boolean
    contraseña?: boolean
    rol?: boolean
    proyectos?: boolean | usuarios$proyectosArgs<ExtArgs>
    tareas?: boolean | usuarios$tareasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre_usuario?: boolean
    email?: boolean
    contraseña?: boolean
    rol?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre_usuario?: boolean
    email?: boolean
    contraseña?: boolean
    rol?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id_usuario?: boolean
    nombre_usuario?: boolean
    email?: boolean
    contraseña?: boolean
    rol?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre_usuario" | "email" | "contraseña" | "rol", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyectos?: boolean | usuarios$proyectosArgs<ExtArgs>
    tareas?: boolean | usuarios$tareasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      proyectos: Prisma.$proyectosPayload<ExtArgs>[]
      tareas: Prisma.$tareasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre_usuario: string
      email: string | null
      contraseña: string
      rol: string
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proyectos<T extends usuarios$proyectosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$proyectosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tareas<T extends usuarios$tareasArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$tareasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id_usuario: FieldRef<"usuarios", 'Int'>
    readonly nombre_usuario: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly contraseña: FieldRef<"usuarios", 'String'>
    readonly rol: FieldRef<"usuarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.proyectos
   */
  export type usuarios$proyectosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyectos
     */
    select?: proyectosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyectos
     */
    omit?: proyectosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectosInclude<ExtArgs> | null
    where?: proyectosWhereInput
    orderBy?: proyectosOrderByWithRelationInput | proyectosOrderByWithRelationInput[]
    cursor?: proyectosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProyectosScalarFieldEnum | ProyectosScalarFieldEnum[]
  }

  /**
   * usuarios.tareas
   */
  export type usuarios$tareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    where?: tareasWhereInput
    orderBy?: tareasOrderByWithRelationInput | tareasOrderByWithRelationInput[]
    cursor?: tareasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TareasScalarFieldEnum | TareasScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Model proyectos
   */

  export type AggregateProyectos = {
    _count: ProyectosCountAggregateOutputType | null
    _avg: ProyectosAvgAggregateOutputType | null
    _sum: ProyectosSumAggregateOutputType | null
    _min: ProyectosMinAggregateOutputType | null
    _max: ProyectosMaxAggregateOutputType | null
  }

  export type ProyectosAvgAggregateOutputType = {
    id_proyecto: number | null
    id_usuario: number | null
  }

  export type ProyectosSumAggregateOutputType = {
    id_proyecto: number | null
    id_usuario: number | null
  }

  export type ProyectosMinAggregateOutputType = {
    id_proyecto: number | null
    nombre_proyecto: string | null
    descripcion: string | null
    estado: string | null
    id_usuario: number | null
  }

  export type ProyectosMaxAggregateOutputType = {
    id_proyecto: number | null
    nombre_proyecto: string | null
    descripcion: string | null
    estado: string | null
    id_usuario: number | null
  }

  export type ProyectosCountAggregateOutputType = {
    id_proyecto: number
    nombre_proyecto: number
    descripcion: number
    estado: number
    id_usuario: number
    _all: number
  }


  export type ProyectosAvgAggregateInputType = {
    id_proyecto?: true
    id_usuario?: true
  }

  export type ProyectosSumAggregateInputType = {
    id_proyecto?: true
    id_usuario?: true
  }

  export type ProyectosMinAggregateInputType = {
    id_proyecto?: true
    nombre_proyecto?: true
    descripcion?: true
    estado?: true
    id_usuario?: true
  }

  export type ProyectosMaxAggregateInputType = {
    id_proyecto?: true
    nombre_proyecto?: true
    descripcion?: true
    estado?: true
    id_usuario?: true
  }

  export type ProyectosCountAggregateInputType = {
    id_proyecto?: true
    nombre_proyecto?: true
    descripcion?: true
    estado?: true
    id_usuario?: true
    _all?: true
  }

  export type ProyectosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proyectos to aggregate.
     */
    where?: proyectosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proyectos to fetch.
     */
    orderBy?: proyectosOrderByWithRelationInput | proyectosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: proyectosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned proyectos
    **/
    _count?: true | ProyectosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProyectosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProyectosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProyectosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProyectosMaxAggregateInputType
  }

  export type GetProyectosAggregateType<T extends ProyectosAggregateArgs> = {
        [P in keyof T & keyof AggregateProyectos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProyectos[P]>
      : GetScalarType<T[P], AggregateProyectos[P]>
  }




  export type proyectosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: proyectosWhereInput
    orderBy?: proyectosOrderByWithAggregationInput | proyectosOrderByWithAggregationInput[]
    by: ProyectosScalarFieldEnum[] | ProyectosScalarFieldEnum
    having?: proyectosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProyectosCountAggregateInputType | true
    _avg?: ProyectosAvgAggregateInputType
    _sum?: ProyectosSumAggregateInputType
    _min?: ProyectosMinAggregateInputType
    _max?: ProyectosMaxAggregateInputType
  }

  export type ProyectosGroupByOutputType = {
    id_proyecto: number
    nombre_proyecto: string
    descripcion: string | null
    estado: string
    id_usuario: number
    _count: ProyectosCountAggregateOutputType | null
    _avg: ProyectosAvgAggregateOutputType | null
    _sum: ProyectosSumAggregateOutputType | null
    _min: ProyectosMinAggregateOutputType | null
    _max: ProyectosMaxAggregateOutputType | null
  }

  type GetProyectosGroupByPayload<T extends proyectosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProyectosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProyectosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProyectosGroupByOutputType[P]>
            : GetScalarType<T[P], ProyectosGroupByOutputType[P]>
        }
      >
    >


  export type proyectosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proyecto?: boolean
    nombre_proyecto?: boolean
    descripcion?: boolean
    estado?: boolean
    id_usuario?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    tareas?: boolean | proyectos$tareasArgs<ExtArgs>
    _count?: boolean | ProyectosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proyectos"]>

  export type proyectosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proyecto?: boolean
    nombre_proyecto?: boolean
    descripcion?: boolean
    estado?: boolean
    id_usuario?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proyectos"]>

  export type proyectosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proyecto?: boolean
    nombre_proyecto?: boolean
    descripcion?: boolean
    estado?: boolean
    id_usuario?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proyectos"]>

  export type proyectosSelectScalar = {
    id_proyecto?: boolean
    nombre_proyecto?: boolean
    descripcion?: boolean
    estado?: boolean
    id_usuario?: boolean
  }

  export type proyectosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_proyecto" | "nombre_proyecto" | "descripcion" | "estado" | "id_usuario", ExtArgs["result"]["proyectos"]>
  export type proyectosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    tareas?: boolean | proyectos$tareasArgs<ExtArgs>
    _count?: boolean | ProyectosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type proyectosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type proyectosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $proyectosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "proyectos"
    objects: {
      usuario: Prisma.$usuariosPayload<ExtArgs>
      tareas: Prisma.$tareasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_proyecto: number
      nombre_proyecto: string
      descripcion: string | null
      estado: string
      id_usuario: number
    }, ExtArgs["result"]["proyectos"]>
    composites: {}
  }

  type proyectosGetPayload<S extends boolean | null | undefined | proyectosDefaultArgs> = $Result.GetResult<Prisma.$proyectosPayload, S>

  type proyectosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<proyectosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProyectosCountAggregateInputType | true
    }

  export interface proyectosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['proyectos'], meta: { name: 'proyectos' } }
    /**
     * Find zero or one Proyectos that matches the filter.
     * @param {proyectosFindUniqueArgs} args - Arguments to find a Proyectos
     * @example
     * // Get one Proyectos
     * const proyectos = await prisma.proyectos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends proyectosFindUniqueArgs>(args: SelectSubset<T, proyectosFindUniqueArgs<ExtArgs>>): Prisma__proyectosClient<$Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proyectos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {proyectosFindUniqueOrThrowArgs} args - Arguments to find a Proyectos
     * @example
     * // Get one Proyectos
     * const proyectos = await prisma.proyectos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends proyectosFindUniqueOrThrowArgs>(args: SelectSubset<T, proyectosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__proyectosClient<$Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proyectos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectosFindFirstArgs} args - Arguments to find a Proyectos
     * @example
     * // Get one Proyectos
     * const proyectos = await prisma.proyectos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends proyectosFindFirstArgs>(args?: SelectSubset<T, proyectosFindFirstArgs<ExtArgs>>): Prisma__proyectosClient<$Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proyectos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectosFindFirstOrThrowArgs} args - Arguments to find a Proyectos
     * @example
     * // Get one Proyectos
     * const proyectos = await prisma.proyectos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends proyectosFindFirstOrThrowArgs>(args?: SelectSubset<T, proyectosFindFirstOrThrowArgs<ExtArgs>>): Prisma__proyectosClient<$Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proyectos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proyectos
     * const proyectos = await prisma.proyectos.findMany()
     * 
     * // Get first 10 Proyectos
     * const proyectos = await prisma.proyectos.findMany({ take: 10 })
     * 
     * // Only select the `id_proyecto`
     * const proyectosWithId_proyectoOnly = await prisma.proyectos.findMany({ select: { id_proyecto: true } })
     * 
     */
    findMany<T extends proyectosFindManyArgs>(args?: SelectSubset<T, proyectosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proyectos.
     * @param {proyectosCreateArgs} args - Arguments to create a Proyectos.
     * @example
     * // Create one Proyectos
     * const Proyectos = await prisma.proyectos.create({
     *   data: {
     *     // ... data to create a Proyectos
     *   }
     * })
     * 
     */
    create<T extends proyectosCreateArgs>(args: SelectSubset<T, proyectosCreateArgs<ExtArgs>>): Prisma__proyectosClient<$Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proyectos.
     * @param {proyectosCreateManyArgs} args - Arguments to create many Proyectos.
     * @example
     * // Create many Proyectos
     * const proyectos = await prisma.proyectos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends proyectosCreateManyArgs>(args?: SelectSubset<T, proyectosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proyectos and returns the data saved in the database.
     * @param {proyectosCreateManyAndReturnArgs} args - Arguments to create many Proyectos.
     * @example
     * // Create many Proyectos
     * const proyectos = await prisma.proyectos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proyectos and only return the `id_proyecto`
     * const proyectosWithId_proyectoOnly = await prisma.proyectos.createManyAndReturn({
     *   select: { id_proyecto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends proyectosCreateManyAndReturnArgs>(args?: SelectSubset<T, proyectosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proyectos.
     * @param {proyectosDeleteArgs} args - Arguments to delete one Proyectos.
     * @example
     * // Delete one Proyectos
     * const Proyectos = await prisma.proyectos.delete({
     *   where: {
     *     // ... filter to delete one Proyectos
     *   }
     * })
     * 
     */
    delete<T extends proyectosDeleteArgs>(args: SelectSubset<T, proyectosDeleteArgs<ExtArgs>>): Prisma__proyectosClient<$Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proyectos.
     * @param {proyectosUpdateArgs} args - Arguments to update one Proyectos.
     * @example
     * // Update one Proyectos
     * const proyectos = await prisma.proyectos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends proyectosUpdateArgs>(args: SelectSubset<T, proyectosUpdateArgs<ExtArgs>>): Prisma__proyectosClient<$Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proyectos.
     * @param {proyectosDeleteManyArgs} args - Arguments to filter Proyectos to delete.
     * @example
     * // Delete a few Proyectos
     * const { count } = await prisma.proyectos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends proyectosDeleteManyArgs>(args?: SelectSubset<T, proyectosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proyectos
     * const proyectos = await prisma.proyectos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends proyectosUpdateManyArgs>(args: SelectSubset<T, proyectosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proyectos and returns the data updated in the database.
     * @param {proyectosUpdateManyAndReturnArgs} args - Arguments to update many Proyectos.
     * @example
     * // Update many Proyectos
     * const proyectos = await prisma.proyectos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proyectos and only return the `id_proyecto`
     * const proyectosWithId_proyectoOnly = await prisma.proyectos.updateManyAndReturn({
     *   select: { id_proyecto: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends proyectosUpdateManyAndReturnArgs>(args: SelectSubset<T, proyectosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proyectos.
     * @param {proyectosUpsertArgs} args - Arguments to update or create a Proyectos.
     * @example
     * // Update or create a Proyectos
     * const proyectos = await prisma.proyectos.upsert({
     *   create: {
     *     // ... data to create a Proyectos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proyectos we want to update
     *   }
     * })
     */
    upsert<T extends proyectosUpsertArgs>(args: SelectSubset<T, proyectosUpsertArgs<ExtArgs>>): Prisma__proyectosClient<$Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectosCountArgs} args - Arguments to filter Proyectos to count.
     * @example
     * // Count the number of Proyectos
     * const count = await prisma.proyectos.count({
     *   where: {
     *     // ... the filter for the Proyectos we want to count
     *   }
     * })
    **/
    count<T extends proyectosCountArgs>(
      args?: Subset<T, proyectosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProyectosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProyectosAggregateArgs>(args: Subset<T, ProyectosAggregateArgs>): Prisma.PrismaPromise<GetProyectosAggregateType<T>>

    /**
     * Group by Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends proyectosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: proyectosGroupByArgs['orderBy'] }
        : { orderBy?: proyectosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, proyectosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProyectosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the proyectos model
   */
  readonly fields: proyectosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for proyectos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__proyectosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tareas<T extends proyectos$tareasArgs<ExtArgs> = {}>(args?: Subset<T, proyectos$tareasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the proyectos model
   */
  interface proyectosFieldRefs {
    readonly id_proyecto: FieldRef<"proyectos", 'Int'>
    readonly nombre_proyecto: FieldRef<"proyectos", 'String'>
    readonly descripcion: FieldRef<"proyectos", 'String'>
    readonly estado: FieldRef<"proyectos", 'String'>
    readonly id_usuario: FieldRef<"proyectos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * proyectos findUnique
   */
  export type proyectosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyectos
     */
    select?: proyectosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyectos
     */
    omit?: proyectosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectosInclude<ExtArgs> | null
    /**
     * Filter, which proyectos to fetch.
     */
    where: proyectosWhereUniqueInput
  }

  /**
   * proyectos findUniqueOrThrow
   */
  export type proyectosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyectos
     */
    select?: proyectosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyectos
     */
    omit?: proyectosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectosInclude<ExtArgs> | null
    /**
     * Filter, which proyectos to fetch.
     */
    where: proyectosWhereUniqueInput
  }

  /**
   * proyectos findFirst
   */
  export type proyectosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyectos
     */
    select?: proyectosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyectos
     */
    omit?: proyectosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectosInclude<ExtArgs> | null
    /**
     * Filter, which proyectos to fetch.
     */
    where?: proyectosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proyectos to fetch.
     */
    orderBy?: proyectosOrderByWithRelationInput | proyectosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proyectos.
     */
    cursor?: proyectosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proyectos.
     */
    distinct?: ProyectosScalarFieldEnum | ProyectosScalarFieldEnum[]
  }

  /**
   * proyectos findFirstOrThrow
   */
  export type proyectosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyectos
     */
    select?: proyectosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyectos
     */
    omit?: proyectosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectosInclude<ExtArgs> | null
    /**
     * Filter, which proyectos to fetch.
     */
    where?: proyectosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proyectos to fetch.
     */
    orderBy?: proyectosOrderByWithRelationInput | proyectosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proyectos.
     */
    cursor?: proyectosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proyectos.
     */
    distinct?: ProyectosScalarFieldEnum | ProyectosScalarFieldEnum[]
  }

  /**
   * proyectos findMany
   */
  export type proyectosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyectos
     */
    select?: proyectosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyectos
     */
    omit?: proyectosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectosInclude<ExtArgs> | null
    /**
     * Filter, which proyectos to fetch.
     */
    where?: proyectosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proyectos to fetch.
     */
    orderBy?: proyectosOrderByWithRelationInput | proyectosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing proyectos.
     */
    cursor?: proyectosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proyectos.
     */
    distinct?: ProyectosScalarFieldEnum | ProyectosScalarFieldEnum[]
  }

  /**
   * proyectos create
   */
  export type proyectosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyectos
     */
    select?: proyectosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyectos
     */
    omit?: proyectosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectosInclude<ExtArgs> | null
    /**
     * The data needed to create a proyectos.
     */
    data: XOR<proyectosCreateInput, proyectosUncheckedCreateInput>
  }

  /**
   * proyectos createMany
   */
  export type proyectosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many proyectos.
     */
    data: proyectosCreateManyInput | proyectosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * proyectos createManyAndReturn
   */
  export type proyectosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyectos
     */
    select?: proyectosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the proyectos
     */
    omit?: proyectosOmit<ExtArgs> | null
    /**
     * The data used to create many proyectos.
     */
    data: proyectosCreateManyInput | proyectosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * proyectos update
   */
  export type proyectosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyectos
     */
    select?: proyectosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyectos
     */
    omit?: proyectosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectosInclude<ExtArgs> | null
    /**
     * The data needed to update a proyectos.
     */
    data: XOR<proyectosUpdateInput, proyectosUncheckedUpdateInput>
    /**
     * Choose, which proyectos to update.
     */
    where: proyectosWhereUniqueInput
  }

  /**
   * proyectos updateMany
   */
  export type proyectosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update proyectos.
     */
    data: XOR<proyectosUpdateManyMutationInput, proyectosUncheckedUpdateManyInput>
    /**
     * Filter which proyectos to update
     */
    where?: proyectosWhereInput
    /**
     * Limit how many proyectos to update.
     */
    limit?: number
  }

  /**
   * proyectos updateManyAndReturn
   */
  export type proyectosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyectos
     */
    select?: proyectosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the proyectos
     */
    omit?: proyectosOmit<ExtArgs> | null
    /**
     * The data used to update proyectos.
     */
    data: XOR<proyectosUpdateManyMutationInput, proyectosUncheckedUpdateManyInput>
    /**
     * Filter which proyectos to update
     */
    where?: proyectosWhereInput
    /**
     * Limit how many proyectos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * proyectos upsert
   */
  export type proyectosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyectos
     */
    select?: proyectosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyectos
     */
    omit?: proyectosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectosInclude<ExtArgs> | null
    /**
     * The filter to search for the proyectos to update in case it exists.
     */
    where: proyectosWhereUniqueInput
    /**
     * In case the proyectos found by the `where` argument doesn't exist, create a new proyectos with this data.
     */
    create: XOR<proyectosCreateInput, proyectosUncheckedCreateInput>
    /**
     * In case the proyectos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<proyectosUpdateInput, proyectosUncheckedUpdateInput>
  }

  /**
   * proyectos delete
   */
  export type proyectosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyectos
     */
    select?: proyectosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyectos
     */
    omit?: proyectosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectosInclude<ExtArgs> | null
    /**
     * Filter which proyectos to delete.
     */
    where: proyectosWhereUniqueInput
  }

  /**
   * proyectos deleteMany
   */
  export type proyectosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proyectos to delete
     */
    where?: proyectosWhereInput
    /**
     * Limit how many proyectos to delete.
     */
    limit?: number
  }

  /**
   * proyectos.tareas
   */
  export type proyectos$tareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    where?: tareasWhereInput
    orderBy?: tareasOrderByWithRelationInput | tareasOrderByWithRelationInput[]
    cursor?: tareasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TareasScalarFieldEnum | TareasScalarFieldEnum[]
  }

  /**
   * proyectos without action
   */
  export type proyectosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyectos
     */
    select?: proyectosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyectos
     */
    omit?: proyectosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectosInclude<ExtArgs> | null
  }


  /**
   * Model tareas
   */

  export type AggregateTareas = {
    _count: TareasCountAggregateOutputType | null
    _avg: TareasAvgAggregateOutputType | null
    _sum: TareasSumAggregateOutputType | null
    _min: TareasMinAggregateOutputType | null
    _max: TareasMaxAggregateOutputType | null
  }

  export type TareasAvgAggregateOutputType = {
    id_tarea: number | null
    id_proyecto: number | null
    id_usuario: number | null
  }

  export type TareasSumAggregateOutputType = {
    id_tarea: number | null
    id_proyecto: number | null
    id_usuario: number | null
  }

  export type TareasMinAggregateOutputType = {
    id_tarea: number | null
    titulo: string | null
    descripcion: string | null
    estado: string | null
    prioridad: string | null
    id_proyecto: number | null
    id_usuario: number | null
  }

  export type TareasMaxAggregateOutputType = {
    id_tarea: number | null
    titulo: string | null
    descripcion: string | null
    estado: string | null
    prioridad: string | null
    id_proyecto: number | null
    id_usuario: number | null
  }

  export type TareasCountAggregateOutputType = {
    id_tarea: number
    titulo: number
    descripcion: number
    estado: number
    prioridad: number
    id_proyecto: number
    id_usuario: number
    _all: number
  }


  export type TareasAvgAggregateInputType = {
    id_tarea?: true
    id_proyecto?: true
    id_usuario?: true
  }

  export type TareasSumAggregateInputType = {
    id_tarea?: true
    id_proyecto?: true
    id_usuario?: true
  }

  export type TareasMinAggregateInputType = {
    id_tarea?: true
    titulo?: true
    descripcion?: true
    estado?: true
    prioridad?: true
    id_proyecto?: true
    id_usuario?: true
  }

  export type TareasMaxAggregateInputType = {
    id_tarea?: true
    titulo?: true
    descripcion?: true
    estado?: true
    prioridad?: true
    id_proyecto?: true
    id_usuario?: true
  }

  export type TareasCountAggregateInputType = {
    id_tarea?: true
    titulo?: true
    descripcion?: true
    estado?: true
    prioridad?: true
    id_proyecto?: true
    id_usuario?: true
    _all?: true
  }

  export type TareasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tareas to aggregate.
     */
    where?: tareasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tareas to fetch.
     */
    orderBy?: tareasOrderByWithRelationInput | tareasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tareasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tareas
    **/
    _count?: true | TareasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TareasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TareasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TareasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TareasMaxAggregateInputType
  }

  export type GetTareasAggregateType<T extends TareasAggregateArgs> = {
        [P in keyof T & keyof AggregateTareas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTareas[P]>
      : GetScalarType<T[P], AggregateTareas[P]>
  }




  export type tareasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tareasWhereInput
    orderBy?: tareasOrderByWithAggregationInput | tareasOrderByWithAggregationInput[]
    by: TareasScalarFieldEnum[] | TareasScalarFieldEnum
    having?: tareasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TareasCountAggregateInputType | true
    _avg?: TareasAvgAggregateInputType
    _sum?: TareasSumAggregateInputType
    _min?: TareasMinAggregateInputType
    _max?: TareasMaxAggregateInputType
  }

  export type TareasGroupByOutputType = {
    id_tarea: number
    titulo: string
    descripcion: string | null
    estado: string
    prioridad: string
    id_proyecto: number
    id_usuario: number
    _count: TareasCountAggregateOutputType | null
    _avg: TareasAvgAggregateOutputType | null
    _sum: TareasSumAggregateOutputType | null
    _min: TareasMinAggregateOutputType | null
    _max: TareasMaxAggregateOutputType | null
  }

  type GetTareasGroupByPayload<T extends tareasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TareasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TareasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TareasGroupByOutputType[P]>
            : GetScalarType<T[P], TareasGroupByOutputType[P]>
        }
      >
    >


  export type tareasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tarea?: boolean
    titulo?: boolean
    descripcion?: boolean
    estado?: boolean
    prioridad?: boolean
    id_proyecto?: boolean
    id_usuario?: boolean
    proyecto?: boolean | proyectosDefaultArgs<ExtArgs>
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tareas"]>

  export type tareasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tarea?: boolean
    titulo?: boolean
    descripcion?: boolean
    estado?: boolean
    prioridad?: boolean
    id_proyecto?: boolean
    id_usuario?: boolean
    proyecto?: boolean | proyectosDefaultArgs<ExtArgs>
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tareas"]>

  export type tareasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tarea?: boolean
    titulo?: boolean
    descripcion?: boolean
    estado?: boolean
    prioridad?: boolean
    id_proyecto?: boolean
    id_usuario?: boolean
    proyecto?: boolean | proyectosDefaultArgs<ExtArgs>
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tareas"]>

  export type tareasSelectScalar = {
    id_tarea?: boolean
    titulo?: boolean
    descripcion?: boolean
    estado?: boolean
    prioridad?: boolean
    id_proyecto?: boolean
    id_usuario?: boolean
  }

  export type tareasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tarea" | "titulo" | "descripcion" | "estado" | "prioridad" | "id_proyecto" | "id_usuario", ExtArgs["result"]["tareas"]>
  export type tareasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectosDefaultArgs<ExtArgs>
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type tareasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectosDefaultArgs<ExtArgs>
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type tareasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectosDefaultArgs<ExtArgs>
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $tareasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tareas"
    objects: {
      proyecto: Prisma.$proyectosPayload<ExtArgs>
      usuario: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tarea: number
      titulo: string
      descripcion: string | null
      estado: string
      prioridad: string
      id_proyecto: number
      id_usuario: number
    }, ExtArgs["result"]["tareas"]>
    composites: {}
  }

  type tareasGetPayload<S extends boolean | null | undefined | tareasDefaultArgs> = $Result.GetResult<Prisma.$tareasPayload, S>

  type tareasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tareasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TareasCountAggregateInputType | true
    }

  export interface tareasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tareas'], meta: { name: 'tareas' } }
    /**
     * Find zero or one Tareas that matches the filter.
     * @param {tareasFindUniqueArgs} args - Arguments to find a Tareas
     * @example
     * // Get one Tareas
     * const tareas = await prisma.tareas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tareasFindUniqueArgs>(args: SelectSubset<T, tareasFindUniqueArgs<ExtArgs>>): Prisma__tareasClient<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tareas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tareasFindUniqueOrThrowArgs} args - Arguments to find a Tareas
     * @example
     * // Get one Tareas
     * const tareas = await prisma.tareas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tareasFindUniqueOrThrowArgs>(args: SelectSubset<T, tareasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tareasClient<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tareas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tareasFindFirstArgs} args - Arguments to find a Tareas
     * @example
     * // Get one Tareas
     * const tareas = await prisma.tareas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tareasFindFirstArgs>(args?: SelectSubset<T, tareasFindFirstArgs<ExtArgs>>): Prisma__tareasClient<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tareas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tareasFindFirstOrThrowArgs} args - Arguments to find a Tareas
     * @example
     * // Get one Tareas
     * const tareas = await prisma.tareas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tareasFindFirstOrThrowArgs>(args?: SelectSubset<T, tareasFindFirstOrThrowArgs<ExtArgs>>): Prisma__tareasClient<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tareas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tareasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tareas
     * const tareas = await prisma.tareas.findMany()
     * 
     * // Get first 10 Tareas
     * const tareas = await prisma.tareas.findMany({ take: 10 })
     * 
     * // Only select the `id_tarea`
     * const tareasWithId_tareaOnly = await prisma.tareas.findMany({ select: { id_tarea: true } })
     * 
     */
    findMany<T extends tareasFindManyArgs>(args?: SelectSubset<T, tareasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tareas.
     * @param {tareasCreateArgs} args - Arguments to create a Tareas.
     * @example
     * // Create one Tareas
     * const Tareas = await prisma.tareas.create({
     *   data: {
     *     // ... data to create a Tareas
     *   }
     * })
     * 
     */
    create<T extends tareasCreateArgs>(args: SelectSubset<T, tareasCreateArgs<ExtArgs>>): Prisma__tareasClient<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tareas.
     * @param {tareasCreateManyArgs} args - Arguments to create many Tareas.
     * @example
     * // Create many Tareas
     * const tareas = await prisma.tareas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tareasCreateManyArgs>(args?: SelectSubset<T, tareasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tareas and returns the data saved in the database.
     * @param {tareasCreateManyAndReturnArgs} args - Arguments to create many Tareas.
     * @example
     * // Create many Tareas
     * const tareas = await prisma.tareas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tareas and only return the `id_tarea`
     * const tareasWithId_tareaOnly = await prisma.tareas.createManyAndReturn({
     *   select: { id_tarea: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tareasCreateManyAndReturnArgs>(args?: SelectSubset<T, tareasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tareas.
     * @param {tareasDeleteArgs} args - Arguments to delete one Tareas.
     * @example
     * // Delete one Tareas
     * const Tareas = await prisma.tareas.delete({
     *   where: {
     *     // ... filter to delete one Tareas
     *   }
     * })
     * 
     */
    delete<T extends tareasDeleteArgs>(args: SelectSubset<T, tareasDeleteArgs<ExtArgs>>): Prisma__tareasClient<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tareas.
     * @param {tareasUpdateArgs} args - Arguments to update one Tareas.
     * @example
     * // Update one Tareas
     * const tareas = await prisma.tareas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tareasUpdateArgs>(args: SelectSubset<T, tareasUpdateArgs<ExtArgs>>): Prisma__tareasClient<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tareas.
     * @param {tareasDeleteManyArgs} args - Arguments to filter Tareas to delete.
     * @example
     * // Delete a few Tareas
     * const { count } = await prisma.tareas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tareasDeleteManyArgs>(args?: SelectSubset<T, tareasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tareasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tareas
     * const tareas = await prisma.tareas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tareasUpdateManyArgs>(args: SelectSubset<T, tareasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tareas and returns the data updated in the database.
     * @param {tareasUpdateManyAndReturnArgs} args - Arguments to update many Tareas.
     * @example
     * // Update many Tareas
     * const tareas = await prisma.tareas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tareas and only return the `id_tarea`
     * const tareasWithId_tareaOnly = await prisma.tareas.updateManyAndReturn({
     *   select: { id_tarea: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tareasUpdateManyAndReturnArgs>(args: SelectSubset<T, tareasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tareas.
     * @param {tareasUpsertArgs} args - Arguments to update or create a Tareas.
     * @example
     * // Update or create a Tareas
     * const tareas = await prisma.tareas.upsert({
     *   create: {
     *     // ... data to create a Tareas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tareas we want to update
     *   }
     * })
     */
    upsert<T extends tareasUpsertArgs>(args: SelectSubset<T, tareasUpsertArgs<ExtArgs>>): Prisma__tareasClient<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tareasCountArgs} args - Arguments to filter Tareas to count.
     * @example
     * // Count the number of Tareas
     * const count = await prisma.tareas.count({
     *   where: {
     *     // ... the filter for the Tareas we want to count
     *   }
     * })
    **/
    count<T extends tareasCountArgs>(
      args?: Subset<T, tareasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TareasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TareasAggregateArgs>(args: Subset<T, TareasAggregateArgs>): Prisma.PrismaPromise<GetTareasAggregateType<T>>

    /**
     * Group by Tareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tareasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tareasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tareasGroupByArgs['orderBy'] }
        : { orderBy?: tareasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tareasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTareasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tareas model
   */
  readonly fields: tareasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tareas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tareasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proyecto<T extends proyectosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, proyectosDefaultArgs<ExtArgs>>): Prisma__proyectosClient<$Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tareas model
   */
  interface tareasFieldRefs {
    readonly id_tarea: FieldRef<"tareas", 'Int'>
    readonly titulo: FieldRef<"tareas", 'String'>
    readonly descripcion: FieldRef<"tareas", 'String'>
    readonly estado: FieldRef<"tareas", 'String'>
    readonly prioridad: FieldRef<"tareas", 'String'>
    readonly id_proyecto: FieldRef<"tareas", 'Int'>
    readonly id_usuario: FieldRef<"tareas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tareas findUnique
   */
  export type tareasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * Filter, which tareas to fetch.
     */
    where: tareasWhereUniqueInput
  }

  /**
   * tareas findUniqueOrThrow
   */
  export type tareasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * Filter, which tareas to fetch.
     */
    where: tareasWhereUniqueInput
  }

  /**
   * tareas findFirst
   */
  export type tareasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * Filter, which tareas to fetch.
     */
    where?: tareasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tareas to fetch.
     */
    orderBy?: tareasOrderByWithRelationInput | tareasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tareas.
     */
    cursor?: tareasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tareas.
     */
    distinct?: TareasScalarFieldEnum | TareasScalarFieldEnum[]
  }

  /**
   * tareas findFirstOrThrow
   */
  export type tareasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * Filter, which tareas to fetch.
     */
    where?: tareasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tareas to fetch.
     */
    orderBy?: tareasOrderByWithRelationInput | tareasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tareas.
     */
    cursor?: tareasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tareas.
     */
    distinct?: TareasScalarFieldEnum | TareasScalarFieldEnum[]
  }

  /**
   * tareas findMany
   */
  export type tareasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * Filter, which tareas to fetch.
     */
    where?: tareasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tareas to fetch.
     */
    orderBy?: tareasOrderByWithRelationInput | tareasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tareas.
     */
    cursor?: tareasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tareas.
     */
    distinct?: TareasScalarFieldEnum | TareasScalarFieldEnum[]
  }

  /**
   * tareas create
   */
  export type tareasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * The data needed to create a tareas.
     */
    data: XOR<tareasCreateInput, tareasUncheckedCreateInput>
  }

  /**
   * tareas createMany
   */
  export type tareasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tareas.
     */
    data: tareasCreateManyInput | tareasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tareas createManyAndReturn
   */
  export type tareasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * The data used to create many tareas.
     */
    data: tareasCreateManyInput | tareasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tareas update
   */
  export type tareasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * The data needed to update a tareas.
     */
    data: XOR<tareasUpdateInput, tareasUncheckedUpdateInput>
    /**
     * Choose, which tareas to update.
     */
    where: tareasWhereUniqueInput
  }

  /**
   * tareas updateMany
   */
  export type tareasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tareas.
     */
    data: XOR<tareasUpdateManyMutationInput, tareasUncheckedUpdateManyInput>
    /**
     * Filter which tareas to update
     */
    where?: tareasWhereInput
    /**
     * Limit how many tareas to update.
     */
    limit?: number
  }

  /**
   * tareas updateManyAndReturn
   */
  export type tareasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * The data used to update tareas.
     */
    data: XOR<tareasUpdateManyMutationInput, tareasUncheckedUpdateManyInput>
    /**
     * Filter which tareas to update
     */
    where?: tareasWhereInput
    /**
     * Limit how many tareas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tareas upsert
   */
  export type tareasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * The filter to search for the tareas to update in case it exists.
     */
    where: tareasWhereUniqueInput
    /**
     * In case the tareas found by the `where` argument doesn't exist, create a new tareas with this data.
     */
    create: XOR<tareasCreateInput, tareasUncheckedCreateInput>
    /**
     * In case the tareas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tareasUpdateInput, tareasUncheckedUpdateInput>
  }

  /**
   * tareas delete
   */
  export type tareasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * Filter which tareas to delete.
     */
    where: tareasWhereUniqueInput
  }

  /**
   * tareas deleteMany
   */
  export type tareasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tareas to delete
     */
    where?: tareasWhereInput
    /**
     * Limit how many tareas to delete.
     */
    limit?: number
  }

  /**
   * tareas without action
   */
  export type tareasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre_usuario: 'nombre_usuario',
    email: 'email',
    contraseña: 'contraseña',
    rol: 'rol'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const ProyectosScalarFieldEnum: {
    id_proyecto: 'id_proyecto',
    nombre_proyecto: 'nombre_proyecto',
    descripcion: 'descripcion',
    estado: 'estado',
    id_usuario: 'id_usuario'
  };

  export type ProyectosScalarFieldEnum = (typeof ProyectosScalarFieldEnum)[keyof typeof ProyectosScalarFieldEnum]


  export const TareasScalarFieldEnum: {
    id_tarea: 'id_tarea',
    titulo: 'titulo',
    descripcion: 'descripcion',
    estado: 'estado',
    prioridad: 'prioridad',
    id_proyecto: 'id_proyecto',
    id_usuario: 'id_usuario'
  };

  export type TareasScalarFieldEnum = (typeof TareasScalarFieldEnum)[keyof typeof TareasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id_usuario?: IntFilter<"usuarios"> | number
    nombre_usuario?: StringFilter<"usuarios"> | string
    email?: StringNullableFilter<"usuarios"> | string | null
    contraseña?: StringFilter<"usuarios"> | string
    rol?: StringFilter<"usuarios"> | string
    proyectos?: ProyectosListRelationFilter
    tareas?: TareasListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    email?: SortOrderInput | SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    proyectos?: proyectosOrderByRelationAggregateInput
    tareas?: tareasOrderByRelationAggregateInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nombre_usuario?: StringFilter<"usuarios"> | string
    contraseña?: StringFilter<"usuarios"> | string
    rol?: StringFilter<"usuarios"> | string
    proyectos?: ProyectosListRelationFilter
    tareas?: TareasListRelationFilter
  }, "id_usuario" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    email?: SortOrderInput | SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuarios"> | number
    nombre_usuario?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    contraseña?: StringWithAggregatesFilter<"usuarios"> | string
    rol?: StringWithAggregatesFilter<"usuarios"> | string
  }

  export type proyectosWhereInput = {
    AND?: proyectosWhereInput | proyectosWhereInput[]
    OR?: proyectosWhereInput[]
    NOT?: proyectosWhereInput | proyectosWhereInput[]
    id_proyecto?: IntFilter<"proyectos"> | number
    nombre_proyecto?: StringFilter<"proyectos"> | string
    descripcion?: StringNullableFilter<"proyectos"> | string | null
    estado?: StringFilter<"proyectos"> | string
    id_usuario?: IntFilter<"proyectos"> | number
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    tareas?: TareasListRelationFilter
  }

  export type proyectosOrderByWithRelationInput = {
    id_proyecto?: SortOrder
    nombre_proyecto?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado?: SortOrder
    id_usuario?: SortOrder
    usuario?: usuariosOrderByWithRelationInput
    tareas?: tareasOrderByRelationAggregateInput
  }

  export type proyectosWhereUniqueInput = Prisma.AtLeast<{
    id_proyecto?: number
    AND?: proyectosWhereInput | proyectosWhereInput[]
    OR?: proyectosWhereInput[]
    NOT?: proyectosWhereInput | proyectosWhereInput[]
    nombre_proyecto?: StringFilter<"proyectos"> | string
    descripcion?: StringNullableFilter<"proyectos"> | string | null
    estado?: StringFilter<"proyectos"> | string
    id_usuario?: IntFilter<"proyectos"> | number
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    tareas?: TareasListRelationFilter
  }, "id_proyecto">

  export type proyectosOrderByWithAggregationInput = {
    id_proyecto?: SortOrder
    nombre_proyecto?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado?: SortOrder
    id_usuario?: SortOrder
    _count?: proyectosCountOrderByAggregateInput
    _avg?: proyectosAvgOrderByAggregateInput
    _max?: proyectosMaxOrderByAggregateInput
    _min?: proyectosMinOrderByAggregateInput
    _sum?: proyectosSumOrderByAggregateInput
  }

  export type proyectosScalarWhereWithAggregatesInput = {
    AND?: proyectosScalarWhereWithAggregatesInput | proyectosScalarWhereWithAggregatesInput[]
    OR?: proyectosScalarWhereWithAggregatesInput[]
    NOT?: proyectosScalarWhereWithAggregatesInput | proyectosScalarWhereWithAggregatesInput[]
    id_proyecto?: IntWithAggregatesFilter<"proyectos"> | number
    nombre_proyecto?: StringWithAggregatesFilter<"proyectos"> | string
    descripcion?: StringNullableWithAggregatesFilter<"proyectos"> | string | null
    estado?: StringWithAggregatesFilter<"proyectos"> | string
    id_usuario?: IntWithAggregatesFilter<"proyectos"> | number
  }

  export type tareasWhereInput = {
    AND?: tareasWhereInput | tareasWhereInput[]
    OR?: tareasWhereInput[]
    NOT?: tareasWhereInput | tareasWhereInput[]
    id_tarea?: IntFilter<"tareas"> | number
    titulo?: StringFilter<"tareas"> | string
    descripcion?: StringNullableFilter<"tareas"> | string | null
    estado?: StringFilter<"tareas"> | string
    prioridad?: StringFilter<"tareas"> | string
    id_proyecto?: IntFilter<"tareas"> | number
    id_usuario?: IntFilter<"tareas"> | number
    proyecto?: XOR<ProyectosScalarRelationFilter, proyectosWhereInput>
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type tareasOrderByWithRelationInput = {
    id_tarea?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado?: SortOrder
    prioridad?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
    proyecto?: proyectosOrderByWithRelationInput
    usuario?: usuariosOrderByWithRelationInput
  }

  export type tareasWhereUniqueInput = Prisma.AtLeast<{
    id_tarea?: number
    AND?: tareasWhereInput | tareasWhereInput[]
    OR?: tareasWhereInput[]
    NOT?: tareasWhereInput | tareasWhereInput[]
    titulo?: StringFilter<"tareas"> | string
    descripcion?: StringNullableFilter<"tareas"> | string | null
    estado?: StringFilter<"tareas"> | string
    prioridad?: StringFilter<"tareas"> | string
    id_proyecto?: IntFilter<"tareas"> | number
    id_usuario?: IntFilter<"tareas"> | number
    proyecto?: XOR<ProyectosScalarRelationFilter, proyectosWhereInput>
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id_tarea">

  export type tareasOrderByWithAggregationInput = {
    id_tarea?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado?: SortOrder
    prioridad?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
    _count?: tareasCountOrderByAggregateInput
    _avg?: tareasAvgOrderByAggregateInput
    _max?: tareasMaxOrderByAggregateInput
    _min?: tareasMinOrderByAggregateInput
    _sum?: tareasSumOrderByAggregateInput
  }

  export type tareasScalarWhereWithAggregatesInput = {
    AND?: tareasScalarWhereWithAggregatesInput | tareasScalarWhereWithAggregatesInput[]
    OR?: tareasScalarWhereWithAggregatesInput[]
    NOT?: tareasScalarWhereWithAggregatesInput | tareasScalarWhereWithAggregatesInput[]
    id_tarea?: IntWithAggregatesFilter<"tareas"> | number
    titulo?: StringWithAggregatesFilter<"tareas"> | string
    descripcion?: StringNullableWithAggregatesFilter<"tareas"> | string | null
    estado?: StringWithAggregatesFilter<"tareas"> | string
    prioridad?: StringWithAggregatesFilter<"tareas"> | string
    id_proyecto?: IntWithAggregatesFilter<"tareas"> | number
    id_usuario?: IntWithAggregatesFilter<"tareas"> | number
  }

  export type usuariosCreateInput = {
    nombre_usuario: string
    email?: string | null
    contraseña: string
    rol: string
    proyectos?: proyectosCreateNestedManyWithoutUsuarioInput
    tareas?: tareasCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUncheckedCreateInput = {
    id_usuario?: number
    nombre_usuario: string
    email?: string | null
    contraseña: string
    rol: string
    proyectos?: proyectosUncheckedCreateNestedManyWithoutUsuarioInput
    tareas?: tareasUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUpdateInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    proyectos?: proyectosUpdateManyWithoutUsuarioNestedInput
    tareas?: tareasUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    proyectos?: proyectosUncheckedUpdateManyWithoutUsuarioNestedInput
    tareas?: tareasUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosCreateManyInput = {
    id_usuario?: number
    nombre_usuario: string
    email?: string | null
    contraseña: string
    rol: string
  }

  export type usuariosUpdateManyMutationInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type proyectosCreateInput = {
    nombre_proyecto: string
    descripcion?: string | null
    estado: string
    usuario: usuariosCreateNestedOneWithoutProyectosInput
    tareas?: tareasCreateNestedManyWithoutProyectoInput
  }

  export type proyectosUncheckedCreateInput = {
    id_proyecto?: number
    nombre_proyecto: string
    descripcion?: string | null
    estado: string
    id_usuario: number
    tareas?: tareasUncheckedCreateNestedManyWithoutProyectoInput
  }

  export type proyectosUpdateInput = {
    nombre_proyecto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    usuario?: usuariosUpdateOneRequiredWithoutProyectosNestedInput
    tareas?: tareasUpdateManyWithoutProyectoNestedInput
  }

  export type proyectosUncheckedUpdateInput = {
    id_proyecto?: IntFieldUpdateOperationsInput | number
    nombre_proyecto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
    tareas?: tareasUncheckedUpdateManyWithoutProyectoNestedInput
  }

  export type proyectosCreateManyInput = {
    id_proyecto?: number
    nombre_proyecto: string
    descripcion?: string | null
    estado: string
    id_usuario: number
  }

  export type proyectosUpdateManyMutationInput = {
    nombre_proyecto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type proyectosUncheckedUpdateManyInput = {
    id_proyecto?: IntFieldUpdateOperationsInput | number
    nombre_proyecto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type tareasCreateInput = {
    titulo: string
    descripcion?: string | null
    estado: string
    prioridad: string
    proyecto: proyectosCreateNestedOneWithoutTareasInput
    usuario: usuariosCreateNestedOneWithoutTareasInput
  }

  export type tareasUncheckedCreateInput = {
    id_tarea?: number
    titulo: string
    descripcion?: string | null
    estado: string
    prioridad: string
    id_proyecto: number
    id_usuario: number
  }

  export type tareasUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    proyecto?: proyectosUpdateOneRequiredWithoutTareasNestedInput
    usuario?: usuariosUpdateOneRequiredWithoutTareasNestedInput
  }

  export type tareasUncheckedUpdateInput = {
    id_tarea?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    id_proyecto?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type tareasCreateManyInput = {
    id_tarea?: number
    titulo: string
    descripcion?: string | null
    estado: string
    prioridad: string
    id_proyecto: number
    id_usuario: number
  }

  export type tareasUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
  }

  export type tareasUncheckedUpdateManyInput = {
    id_tarea?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    id_proyecto?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProyectosListRelationFilter = {
    every?: proyectosWhereInput
    some?: proyectosWhereInput
    none?: proyectosWhereInput
  }

  export type TareasListRelationFilter = {
    every?: tareasWhereInput
    some?: tareasWhereInput
    none?: tareasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type proyectosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tareasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type proyectosCountOrderByAggregateInput = {
    id_proyecto?: SortOrder
    nombre_proyecto?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    id_usuario?: SortOrder
  }

  export type proyectosAvgOrderByAggregateInput = {
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
  }

  export type proyectosMaxOrderByAggregateInput = {
    id_proyecto?: SortOrder
    nombre_proyecto?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    id_usuario?: SortOrder
  }

  export type proyectosMinOrderByAggregateInput = {
    id_proyecto?: SortOrder
    nombre_proyecto?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    id_usuario?: SortOrder
  }

  export type proyectosSumOrderByAggregateInput = {
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
  }

  export type ProyectosScalarRelationFilter = {
    is?: proyectosWhereInput
    isNot?: proyectosWhereInput
  }

  export type tareasCountOrderByAggregateInput = {
    id_tarea?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    prioridad?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
  }

  export type tareasAvgOrderByAggregateInput = {
    id_tarea?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
  }

  export type tareasMaxOrderByAggregateInput = {
    id_tarea?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    prioridad?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
  }

  export type tareasMinOrderByAggregateInput = {
    id_tarea?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    prioridad?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
  }

  export type tareasSumOrderByAggregateInput = {
    id_tarea?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
  }

  export type proyectosCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<proyectosCreateWithoutUsuarioInput, proyectosUncheckedCreateWithoutUsuarioInput> | proyectosCreateWithoutUsuarioInput[] | proyectosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: proyectosCreateOrConnectWithoutUsuarioInput | proyectosCreateOrConnectWithoutUsuarioInput[]
    createMany?: proyectosCreateManyUsuarioInputEnvelope
    connect?: proyectosWhereUniqueInput | proyectosWhereUniqueInput[]
  }

  export type tareasCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<tareasCreateWithoutUsuarioInput, tareasUncheckedCreateWithoutUsuarioInput> | tareasCreateWithoutUsuarioInput[] | tareasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tareasCreateOrConnectWithoutUsuarioInput | tareasCreateOrConnectWithoutUsuarioInput[]
    createMany?: tareasCreateManyUsuarioInputEnvelope
    connect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
  }

  export type proyectosUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<proyectosCreateWithoutUsuarioInput, proyectosUncheckedCreateWithoutUsuarioInput> | proyectosCreateWithoutUsuarioInput[] | proyectosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: proyectosCreateOrConnectWithoutUsuarioInput | proyectosCreateOrConnectWithoutUsuarioInput[]
    createMany?: proyectosCreateManyUsuarioInputEnvelope
    connect?: proyectosWhereUniqueInput | proyectosWhereUniqueInput[]
  }

  export type tareasUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<tareasCreateWithoutUsuarioInput, tareasUncheckedCreateWithoutUsuarioInput> | tareasCreateWithoutUsuarioInput[] | tareasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tareasCreateOrConnectWithoutUsuarioInput | tareasCreateOrConnectWithoutUsuarioInput[]
    createMany?: tareasCreateManyUsuarioInputEnvelope
    connect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type proyectosUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<proyectosCreateWithoutUsuarioInput, proyectosUncheckedCreateWithoutUsuarioInput> | proyectosCreateWithoutUsuarioInput[] | proyectosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: proyectosCreateOrConnectWithoutUsuarioInput | proyectosCreateOrConnectWithoutUsuarioInput[]
    upsert?: proyectosUpsertWithWhereUniqueWithoutUsuarioInput | proyectosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: proyectosCreateManyUsuarioInputEnvelope
    set?: proyectosWhereUniqueInput | proyectosWhereUniqueInput[]
    disconnect?: proyectosWhereUniqueInput | proyectosWhereUniqueInput[]
    delete?: proyectosWhereUniqueInput | proyectosWhereUniqueInput[]
    connect?: proyectosWhereUniqueInput | proyectosWhereUniqueInput[]
    update?: proyectosUpdateWithWhereUniqueWithoutUsuarioInput | proyectosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: proyectosUpdateManyWithWhereWithoutUsuarioInput | proyectosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: proyectosScalarWhereInput | proyectosScalarWhereInput[]
  }

  export type tareasUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<tareasCreateWithoutUsuarioInput, tareasUncheckedCreateWithoutUsuarioInput> | tareasCreateWithoutUsuarioInput[] | tareasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tareasCreateOrConnectWithoutUsuarioInput | tareasCreateOrConnectWithoutUsuarioInput[]
    upsert?: tareasUpsertWithWhereUniqueWithoutUsuarioInput | tareasUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: tareasCreateManyUsuarioInputEnvelope
    set?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    disconnect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    delete?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    connect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    update?: tareasUpdateWithWhereUniqueWithoutUsuarioInput | tareasUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: tareasUpdateManyWithWhereWithoutUsuarioInput | tareasUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: tareasScalarWhereInput | tareasScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type proyectosUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<proyectosCreateWithoutUsuarioInput, proyectosUncheckedCreateWithoutUsuarioInput> | proyectosCreateWithoutUsuarioInput[] | proyectosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: proyectosCreateOrConnectWithoutUsuarioInput | proyectosCreateOrConnectWithoutUsuarioInput[]
    upsert?: proyectosUpsertWithWhereUniqueWithoutUsuarioInput | proyectosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: proyectosCreateManyUsuarioInputEnvelope
    set?: proyectosWhereUniqueInput | proyectosWhereUniqueInput[]
    disconnect?: proyectosWhereUniqueInput | proyectosWhereUniqueInput[]
    delete?: proyectosWhereUniqueInput | proyectosWhereUniqueInput[]
    connect?: proyectosWhereUniqueInput | proyectosWhereUniqueInput[]
    update?: proyectosUpdateWithWhereUniqueWithoutUsuarioInput | proyectosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: proyectosUpdateManyWithWhereWithoutUsuarioInput | proyectosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: proyectosScalarWhereInput | proyectosScalarWhereInput[]
  }

  export type tareasUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<tareasCreateWithoutUsuarioInput, tareasUncheckedCreateWithoutUsuarioInput> | tareasCreateWithoutUsuarioInput[] | tareasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tareasCreateOrConnectWithoutUsuarioInput | tareasCreateOrConnectWithoutUsuarioInput[]
    upsert?: tareasUpsertWithWhereUniqueWithoutUsuarioInput | tareasUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: tareasCreateManyUsuarioInputEnvelope
    set?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    disconnect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    delete?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    connect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    update?: tareasUpdateWithWhereUniqueWithoutUsuarioInput | tareasUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: tareasUpdateManyWithWhereWithoutUsuarioInput | tareasUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: tareasScalarWhereInput | tareasScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutProyectosInput = {
    create?: XOR<usuariosCreateWithoutProyectosInput, usuariosUncheckedCreateWithoutProyectosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutProyectosInput
    connect?: usuariosWhereUniqueInput
  }

  export type tareasCreateNestedManyWithoutProyectoInput = {
    create?: XOR<tareasCreateWithoutProyectoInput, tareasUncheckedCreateWithoutProyectoInput> | tareasCreateWithoutProyectoInput[] | tareasUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: tareasCreateOrConnectWithoutProyectoInput | tareasCreateOrConnectWithoutProyectoInput[]
    createMany?: tareasCreateManyProyectoInputEnvelope
    connect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
  }

  export type tareasUncheckedCreateNestedManyWithoutProyectoInput = {
    create?: XOR<tareasCreateWithoutProyectoInput, tareasUncheckedCreateWithoutProyectoInput> | tareasCreateWithoutProyectoInput[] | tareasUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: tareasCreateOrConnectWithoutProyectoInput | tareasCreateOrConnectWithoutProyectoInput[]
    createMany?: tareasCreateManyProyectoInputEnvelope
    connect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
  }

  export type usuariosUpdateOneRequiredWithoutProyectosNestedInput = {
    create?: XOR<usuariosCreateWithoutProyectosInput, usuariosUncheckedCreateWithoutProyectosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutProyectosInput
    upsert?: usuariosUpsertWithoutProyectosInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutProyectosInput, usuariosUpdateWithoutProyectosInput>, usuariosUncheckedUpdateWithoutProyectosInput>
  }

  export type tareasUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<tareasCreateWithoutProyectoInput, tareasUncheckedCreateWithoutProyectoInput> | tareasCreateWithoutProyectoInput[] | tareasUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: tareasCreateOrConnectWithoutProyectoInput | tareasCreateOrConnectWithoutProyectoInput[]
    upsert?: tareasUpsertWithWhereUniqueWithoutProyectoInput | tareasUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: tareasCreateManyProyectoInputEnvelope
    set?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    disconnect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    delete?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    connect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    update?: tareasUpdateWithWhereUniqueWithoutProyectoInput | tareasUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: tareasUpdateManyWithWhereWithoutProyectoInput | tareasUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: tareasScalarWhereInput | tareasScalarWhereInput[]
  }

  export type tareasUncheckedUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<tareasCreateWithoutProyectoInput, tareasUncheckedCreateWithoutProyectoInput> | tareasCreateWithoutProyectoInput[] | tareasUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: tareasCreateOrConnectWithoutProyectoInput | tareasCreateOrConnectWithoutProyectoInput[]
    upsert?: tareasUpsertWithWhereUniqueWithoutProyectoInput | tareasUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: tareasCreateManyProyectoInputEnvelope
    set?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    disconnect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    delete?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    connect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    update?: tareasUpdateWithWhereUniqueWithoutProyectoInput | tareasUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: tareasUpdateManyWithWhereWithoutProyectoInput | tareasUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: tareasScalarWhereInput | tareasScalarWhereInput[]
  }

  export type proyectosCreateNestedOneWithoutTareasInput = {
    create?: XOR<proyectosCreateWithoutTareasInput, proyectosUncheckedCreateWithoutTareasInput>
    connectOrCreate?: proyectosCreateOrConnectWithoutTareasInput
    connect?: proyectosWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutTareasInput = {
    create?: XOR<usuariosCreateWithoutTareasInput, usuariosUncheckedCreateWithoutTareasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutTareasInput
    connect?: usuariosWhereUniqueInput
  }

  export type proyectosUpdateOneRequiredWithoutTareasNestedInput = {
    create?: XOR<proyectosCreateWithoutTareasInput, proyectosUncheckedCreateWithoutTareasInput>
    connectOrCreate?: proyectosCreateOrConnectWithoutTareasInput
    upsert?: proyectosUpsertWithoutTareasInput
    connect?: proyectosWhereUniqueInput
    update?: XOR<XOR<proyectosUpdateToOneWithWhereWithoutTareasInput, proyectosUpdateWithoutTareasInput>, proyectosUncheckedUpdateWithoutTareasInput>
  }

  export type usuariosUpdateOneRequiredWithoutTareasNestedInput = {
    create?: XOR<usuariosCreateWithoutTareasInput, usuariosUncheckedCreateWithoutTareasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutTareasInput
    upsert?: usuariosUpsertWithoutTareasInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutTareasInput, usuariosUpdateWithoutTareasInput>, usuariosUncheckedUpdateWithoutTareasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type proyectosCreateWithoutUsuarioInput = {
    nombre_proyecto: string
    descripcion?: string | null
    estado: string
    tareas?: tareasCreateNestedManyWithoutProyectoInput
  }

  export type proyectosUncheckedCreateWithoutUsuarioInput = {
    id_proyecto?: number
    nombre_proyecto: string
    descripcion?: string | null
    estado: string
    tareas?: tareasUncheckedCreateNestedManyWithoutProyectoInput
  }

  export type proyectosCreateOrConnectWithoutUsuarioInput = {
    where: proyectosWhereUniqueInput
    create: XOR<proyectosCreateWithoutUsuarioInput, proyectosUncheckedCreateWithoutUsuarioInput>
  }

  export type proyectosCreateManyUsuarioInputEnvelope = {
    data: proyectosCreateManyUsuarioInput | proyectosCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type tareasCreateWithoutUsuarioInput = {
    titulo: string
    descripcion?: string | null
    estado: string
    prioridad: string
    proyecto: proyectosCreateNestedOneWithoutTareasInput
  }

  export type tareasUncheckedCreateWithoutUsuarioInput = {
    id_tarea?: number
    titulo: string
    descripcion?: string | null
    estado: string
    prioridad: string
    id_proyecto: number
  }

  export type tareasCreateOrConnectWithoutUsuarioInput = {
    where: tareasWhereUniqueInput
    create: XOR<tareasCreateWithoutUsuarioInput, tareasUncheckedCreateWithoutUsuarioInput>
  }

  export type tareasCreateManyUsuarioInputEnvelope = {
    data: tareasCreateManyUsuarioInput | tareasCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type proyectosUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: proyectosWhereUniqueInput
    update: XOR<proyectosUpdateWithoutUsuarioInput, proyectosUncheckedUpdateWithoutUsuarioInput>
    create: XOR<proyectosCreateWithoutUsuarioInput, proyectosUncheckedCreateWithoutUsuarioInput>
  }

  export type proyectosUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: proyectosWhereUniqueInput
    data: XOR<proyectosUpdateWithoutUsuarioInput, proyectosUncheckedUpdateWithoutUsuarioInput>
  }

  export type proyectosUpdateManyWithWhereWithoutUsuarioInput = {
    where: proyectosScalarWhereInput
    data: XOR<proyectosUpdateManyMutationInput, proyectosUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type proyectosScalarWhereInput = {
    AND?: proyectosScalarWhereInput | proyectosScalarWhereInput[]
    OR?: proyectosScalarWhereInput[]
    NOT?: proyectosScalarWhereInput | proyectosScalarWhereInput[]
    id_proyecto?: IntFilter<"proyectos"> | number
    nombre_proyecto?: StringFilter<"proyectos"> | string
    descripcion?: StringNullableFilter<"proyectos"> | string | null
    estado?: StringFilter<"proyectos"> | string
    id_usuario?: IntFilter<"proyectos"> | number
  }

  export type tareasUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: tareasWhereUniqueInput
    update: XOR<tareasUpdateWithoutUsuarioInput, tareasUncheckedUpdateWithoutUsuarioInput>
    create: XOR<tareasCreateWithoutUsuarioInput, tareasUncheckedCreateWithoutUsuarioInput>
  }

  export type tareasUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: tareasWhereUniqueInput
    data: XOR<tareasUpdateWithoutUsuarioInput, tareasUncheckedUpdateWithoutUsuarioInput>
  }

  export type tareasUpdateManyWithWhereWithoutUsuarioInput = {
    where: tareasScalarWhereInput
    data: XOR<tareasUpdateManyMutationInput, tareasUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type tareasScalarWhereInput = {
    AND?: tareasScalarWhereInput | tareasScalarWhereInput[]
    OR?: tareasScalarWhereInput[]
    NOT?: tareasScalarWhereInput | tareasScalarWhereInput[]
    id_tarea?: IntFilter<"tareas"> | number
    titulo?: StringFilter<"tareas"> | string
    descripcion?: StringNullableFilter<"tareas"> | string | null
    estado?: StringFilter<"tareas"> | string
    prioridad?: StringFilter<"tareas"> | string
    id_proyecto?: IntFilter<"tareas"> | number
    id_usuario?: IntFilter<"tareas"> | number
  }

  export type usuariosCreateWithoutProyectosInput = {
    nombre_usuario: string
    email?: string | null
    contraseña: string
    rol: string
    tareas?: tareasCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUncheckedCreateWithoutProyectosInput = {
    id_usuario?: number
    nombre_usuario: string
    email?: string | null
    contraseña: string
    rol: string
    tareas?: tareasUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosCreateOrConnectWithoutProyectosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutProyectosInput, usuariosUncheckedCreateWithoutProyectosInput>
  }

  export type tareasCreateWithoutProyectoInput = {
    titulo: string
    descripcion?: string | null
    estado: string
    prioridad: string
    usuario: usuariosCreateNestedOneWithoutTareasInput
  }

  export type tareasUncheckedCreateWithoutProyectoInput = {
    id_tarea?: number
    titulo: string
    descripcion?: string | null
    estado: string
    prioridad: string
    id_usuario: number
  }

  export type tareasCreateOrConnectWithoutProyectoInput = {
    where: tareasWhereUniqueInput
    create: XOR<tareasCreateWithoutProyectoInput, tareasUncheckedCreateWithoutProyectoInput>
  }

  export type tareasCreateManyProyectoInputEnvelope = {
    data: tareasCreateManyProyectoInput | tareasCreateManyProyectoInput[]
    skipDuplicates?: boolean
  }

  export type usuariosUpsertWithoutProyectosInput = {
    update: XOR<usuariosUpdateWithoutProyectosInput, usuariosUncheckedUpdateWithoutProyectosInput>
    create: XOR<usuariosCreateWithoutProyectosInput, usuariosUncheckedCreateWithoutProyectosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutProyectosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutProyectosInput, usuariosUncheckedUpdateWithoutProyectosInput>
  }

  export type usuariosUpdateWithoutProyectosInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    tareas?: tareasUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosUncheckedUpdateWithoutProyectosInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    tareas?: tareasUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type tareasUpsertWithWhereUniqueWithoutProyectoInput = {
    where: tareasWhereUniqueInput
    update: XOR<tareasUpdateWithoutProyectoInput, tareasUncheckedUpdateWithoutProyectoInput>
    create: XOR<tareasCreateWithoutProyectoInput, tareasUncheckedCreateWithoutProyectoInput>
  }

  export type tareasUpdateWithWhereUniqueWithoutProyectoInput = {
    where: tareasWhereUniqueInput
    data: XOR<tareasUpdateWithoutProyectoInput, tareasUncheckedUpdateWithoutProyectoInput>
  }

  export type tareasUpdateManyWithWhereWithoutProyectoInput = {
    where: tareasScalarWhereInput
    data: XOR<tareasUpdateManyMutationInput, tareasUncheckedUpdateManyWithoutProyectoInput>
  }

  export type proyectosCreateWithoutTareasInput = {
    nombre_proyecto: string
    descripcion?: string | null
    estado: string
    usuario: usuariosCreateNestedOneWithoutProyectosInput
  }

  export type proyectosUncheckedCreateWithoutTareasInput = {
    id_proyecto?: number
    nombre_proyecto: string
    descripcion?: string | null
    estado: string
    id_usuario: number
  }

  export type proyectosCreateOrConnectWithoutTareasInput = {
    where: proyectosWhereUniqueInput
    create: XOR<proyectosCreateWithoutTareasInput, proyectosUncheckedCreateWithoutTareasInput>
  }

  export type usuariosCreateWithoutTareasInput = {
    nombre_usuario: string
    email?: string | null
    contraseña: string
    rol: string
    proyectos?: proyectosCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUncheckedCreateWithoutTareasInput = {
    id_usuario?: number
    nombre_usuario: string
    email?: string | null
    contraseña: string
    rol: string
    proyectos?: proyectosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosCreateOrConnectWithoutTareasInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutTareasInput, usuariosUncheckedCreateWithoutTareasInput>
  }

  export type proyectosUpsertWithoutTareasInput = {
    update: XOR<proyectosUpdateWithoutTareasInput, proyectosUncheckedUpdateWithoutTareasInput>
    create: XOR<proyectosCreateWithoutTareasInput, proyectosUncheckedCreateWithoutTareasInput>
    where?: proyectosWhereInput
  }

  export type proyectosUpdateToOneWithWhereWithoutTareasInput = {
    where?: proyectosWhereInput
    data: XOR<proyectosUpdateWithoutTareasInput, proyectosUncheckedUpdateWithoutTareasInput>
  }

  export type proyectosUpdateWithoutTareasInput = {
    nombre_proyecto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    usuario?: usuariosUpdateOneRequiredWithoutProyectosNestedInput
  }

  export type proyectosUncheckedUpdateWithoutTareasInput = {
    id_proyecto?: IntFieldUpdateOperationsInput | number
    nombre_proyecto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type usuariosUpsertWithoutTareasInput = {
    update: XOR<usuariosUpdateWithoutTareasInput, usuariosUncheckedUpdateWithoutTareasInput>
    create: XOR<usuariosCreateWithoutTareasInput, usuariosUncheckedCreateWithoutTareasInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutTareasInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutTareasInput, usuariosUncheckedUpdateWithoutTareasInput>
  }

  export type usuariosUpdateWithoutTareasInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    proyectos?: proyectosUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosUncheckedUpdateWithoutTareasInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    proyectos?: proyectosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type proyectosCreateManyUsuarioInput = {
    id_proyecto?: number
    nombre_proyecto: string
    descripcion?: string | null
    estado: string
  }

  export type tareasCreateManyUsuarioInput = {
    id_tarea?: number
    titulo: string
    descripcion?: string | null
    estado: string
    prioridad: string
    id_proyecto: number
  }

  export type proyectosUpdateWithoutUsuarioInput = {
    nombre_proyecto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    tareas?: tareasUpdateManyWithoutProyectoNestedInput
  }

  export type proyectosUncheckedUpdateWithoutUsuarioInput = {
    id_proyecto?: IntFieldUpdateOperationsInput | number
    nombre_proyecto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    tareas?: tareasUncheckedUpdateManyWithoutProyectoNestedInput
  }

  export type proyectosUncheckedUpdateManyWithoutUsuarioInput = {
    id_proyecto?: IntFieldUpdateOperationsInput | number
    nombre_proyecto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type tareasUpdateWithoutUsuarioInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    proyecto?: proyectosUpdateOneRequiredWithoutTareasNestedInput
  }

  export type tareasUncheckedUpdateWithoutUsuarioInput = {
    id_tarea?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    id_proyecto?: IntFieldUpdateOperationsInput | number
  }

  export type tareasUncheckedUpdateManyWithoutUsuarioInput = {
    id_tarea?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    id_proyecto?: IntFieldUpdateOperationsInput | number
  }

  export type tareasCreateManyProyectoInput = {
    id_tarea?: number
    titulo: string
    descripcion?: string | null
    estado: string
    prioridad: string
    id_usuario: number
  }

  export type tareasUpdateWithoutProyectoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    usuario?: usuariosUpdateOneRequiredWithoutTareasNestedInput
  }

  export type tareasUncheckedUpdateWithoutProyectoInput = {
    id_tarea?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type tareasUncheckedUpdateManyWithoutProyectoInput = {
    id_tarea?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}