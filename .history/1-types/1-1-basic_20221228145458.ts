{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩 어떤 종류의 타입이 담길지 알 수 없는 타입. 가능하면 쓰지 않도록. 
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩 무엇이든 할당 할 수 있다. 가능하면 쓰지 않도록.
  let anything: any = 0;
  anything = 'hello';

  // void: 함수가 아무것도 반환하지 않을때
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩. 변수에 선언해서 쓰는 경우는 거의 없다. undefined만 할당 가능하기 때문.

  // never: 함수가 절대 아무것도 반환하지 않을때
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩 변수에 선언해서 쓰는 경우는 없다.

  // objet: primitive 타입을 제외한 어떤 타입의 데이터도 담을 수 있다. 
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
