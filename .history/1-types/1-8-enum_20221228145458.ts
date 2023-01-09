{
  /**
   * Enum
   */
  // 여러가지 관련된 상수 값들을 한 번에 모아서 정의. 
  // 타입이 보장되고, 값이 변화되지 않으니까 타입에 안전하게 쓸 수 있다.
  // JavaScript에는 Enum 타입이 존재하지 않는다.
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // 다른 언어에선 enum이 매우 유용하지만, 타입스크립트에서는 가능한 안 쓰는게 좋다!
  enum Days {
    Monday, // 0
    Tuesday, // 1
    Wednesday,// 2
    Thursday,// 3
    Friday,// 4
    Saturday,// 5
    Sunday, // 6
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10; // 타입스크립트에서 enum을 할당한 변수에 숫자로도 재할당이 가능한 것이 문제! 타입이 보장되지 않아, 안정성이 낮다.
  console.log(day);

  // Typescript에선 되도록 enum 대신 union 타입을 활용한다. 타입을 보장하면서 사용할 수 있다.
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday';
}
