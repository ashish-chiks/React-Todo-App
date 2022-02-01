import { TodoForm, TodoList, SeparateList } from "./components";
import { useGlobalContext } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { showSeparateList, toggleShowSeparateList } = useGlobalContext();

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
          <TodoForm />
          {!showSeparateList && <TodoList />}
          {showSeparateList && <SeparateList />}
          <button
            type="button"
            className="btn btn-danger btn-block text-capitalize mt-5"
            onClick={toggleShowSeparateList}
          >
            {showSeparateList? "Merge" : "Show"} Completed Tasks
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
