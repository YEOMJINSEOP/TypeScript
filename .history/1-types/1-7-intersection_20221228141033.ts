{
  /**
   * Intersection Types: &
   */
  // 다양한 타입을 묶어서 선언할 수 있다.
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  // Student와 Worke 합친 것을 전달해야 한다.
  internWork({
    name: 'ellie',
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
