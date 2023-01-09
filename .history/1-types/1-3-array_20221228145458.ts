{
  /** --- Array ---  */
  // Array: 배열을 정의하는 두 가지 방식이 있다.
  // 1️⃣ 타입명[]
  const fruits: string[] = ['🍅', '🍌'];

  // 2️⃣ Array<타입명>
  const scroes: Array<number> = [1, 3, 4]; // const scores: number[] = [1, 3, 4]; 와 동일

  // 두 방법 거의 차이 없다. 유일한 차이는 readonly는 타입명[]에만 이용할 수 있다.
  // readonly: 데이터를 변경할 수 없고, 읽을 수만 있게 타입으로 보장할 수 있다. Object의 불변성을 보장.
  function printArray(fruits: readonly string[]) {} 


  /** --- Tuple ---  */
  // Tuple 은 서로 다른 타입의 데이터를 가질 수 있는 배열
  // Tuple을 사용하는 것을 권장하지 않음.
  // 이유 : 데이터에 접근할 때 인덱스로 접근하는데, 이는 가독성이 매우 떨어진다.
  // Tuple은 interface, type alias, class 들로 대체해서 사용하는 것이 좋다.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name // 가독성💩
  student[1]; // 123 // 가독성💩

  // 가독성을 해결하는 방법이 있긴하다.
  // object destructing으로 student에 있는 값을 각각 name, age에 할당하는 방법
  // 결국 데이터를 사용하는 곳에서 임의로 이름을 결정하고 써야하는 단점이 존재
  const [name, age] = student;

    // Tuple이 사용되는 곳이 있어 알려줄게! Tuple을 유연하게 잘 활용한 경우야.
  // React에서 const [count, setCount] = useState(0); 
}

