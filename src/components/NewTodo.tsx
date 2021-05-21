import { useRef } from "react";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // ! Forces typescript to return the stored value
    // and guarantees it won't be null / undefined
    const enteredText = todoTextInputRef.current!.value;

    // ? Returns undefined if the value wasn't set or the actual value if it was
    //const enteredText = todoTextInputRef.current?.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;