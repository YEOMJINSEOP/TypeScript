{
  // function: login -> success, fail ⏱
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  // result를 공통 property로 갖고 있으므로, state.result로 접근이 가능하다.
  // 따라서 코드를 아래와 같이 작성할 수 있다.
  // 즉, discriminated Union : 어떤 케이스든 공통 property를 가짐으로써 조금 더 구분하기 쉽게 만든다.
  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
