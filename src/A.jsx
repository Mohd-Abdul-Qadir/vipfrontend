
import B from "./B";

const A = ({ todos, addTodo }) => {
    console.log("child render");
    return (
      <>
      A
        <B />
      </>
    );
};

export default A;