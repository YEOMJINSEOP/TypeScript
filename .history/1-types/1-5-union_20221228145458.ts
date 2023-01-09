{
  /**
   *  Union Types: OR
   */
  // 활용도가 높다.
  // 발생할 수 있는 case 중에 하나만 할당할 경우에 쓰면 좋다.
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail ⏱
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    // 로그인이 성공했다고 치면,
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  // success와 fail 타입 중 어떤것이 state 인자로 들어올지 모르기 때문에
  // state.~~ 이렇게 접근이 불가능하다.
  // 따라서 지금은 in을 활용해 코드를 작성해야한다. (다음 1-6과 비교하자)
  function printLoginState(state: LoginState):void {
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
