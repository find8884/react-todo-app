import { useState } from "react";

{
  /* input에 value가 고정되어 있다면 브라우저에서 입력해도 변화가 없다. 
  변수를 사용해도 리액트의 렌더링 메커니즘에 의해 동적으로 바뀌지 않는다. 
  UI에 변하는 값들을 리액트가 기억하기 위해서 useState를 사용 */
}

{
  /* input에 입력하면 먼저 onChange가 실행 */
}
const TodoInput = ({ onTodoAdd }) => {
  const [inputText, setInputText] = useState("");

  const handleInput = (event) => {
    // console.log(event);
    const value = event.target.value;
    setInputText(value);
  };

  const handelClick = () => {
    onTodoAdd(inputText);
    setInputText("");
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInput} />
      <button onClick={handelClick}>add</button>
    </div>
  );
};

export default TodoInput;
