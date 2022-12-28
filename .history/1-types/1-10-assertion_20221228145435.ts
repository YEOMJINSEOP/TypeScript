{
  /**
   * Type Assertions 💩
   */
  // 타입을 정말 장담하는 경우가 아니라면 쓰지 않는 것이 좋다.
  //JavaScript와 함께 쓰다보면 어쩔 수 없이 쓸 때가 있을 수도 있다.
  // case 1)
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  // result 변수 가 string인걸 알고 있는 경우
  // 1. as를 사용하거나
  // 2. 변수 앞에 <타입명>을 사용해
  // 타입 캐스팅을 할 수 있다. (타입을 확신해! 라고 할 수 있다.)
  // as string ==>  string에 쓸 수 있는 모든 api를 사용할 수 있다.
  console.log((result as string).length);
  console.log((<string>result).length);

  // case 2)
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  // case 3)
  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // 😱. numbers는 undefined일수도 있기 때문에!
  // numbers!.push(2); // 정말 정말 null이 아니라고 확신하는 경우 !를 쓸 수 있다.
  const button = document.querySelector('class')!;
}
