{
  /**
   * Type Aliases
   */
  // Type Aliase: 새로운 타입을 정의할 수 있다.
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',
    age: 12,
  };

  /**
   * String Literal Types
   */
  // 타입을 문자열로도 지정할 수 있다.
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name'; // name이 아닌 다른 문자열을 할당할 수 없다. 타입이 'name'인 문자열이기 때문
  type JSON = 'json'; // 이제 JSON 타입은 'json' 문자열만 할당할 수 있다.
  const json: JSON = 'json'; 

  type Boal = true; // 이제 Boal 타입은 true만 할당할 수 있다.
}
