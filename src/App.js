import React, { useState } from "react";
import Additem from "./component/Additem";
import Todo from "./component/Todo";
import QARaisedBugs from "./component/QARaisedBugs";
import Inprogress from "./component/Inprogress";
import Onemore from "./component/Onemore";
// import { v4 as uuid } from "uuid";

function App() {
  const [todo, setTodo] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [qaraisedbugs, setQARaisedBugs] = useState([]);
  const [onemore, setOnemore] = useState([]);

  const addData = (data) => {
    console.log("Inside App.js", data);
    setTodo([...todo, data]);
  };
  const addInprogress = (x) => {
    setInprogress([...inprogress, x]);
  };
  const addQARaisedBugs= (y) => {
    setQARaisedBugs([...qaraisedbugs, y]);
  };
  const addOneMore = (z) =>{
    setOnemore([...onemore,z]);
  };
  return (
    <div className="container mt-3">
      <div className="additem">
        <Additem
          addTodo={addData}
          addInprogress={addInprogress}
          addQARaisedBugs={addQARaisedBugs}
          addOneMore={addOneMore}
        />
      </div>

      <div className="Content">
        <div className="subContent">
          <Todo todo={todo} />
        </div>
        <div className="subContent">
          <QARaisedBugs qaraisedbugs={qaraisedbugs} />
        </div>
        <div className="subContent">
          <Inprogress inprogress={inprogress} />
        </div>
        <div className="subContent">
          <Onemore onemore={onemore} />
        </div>
      </div>
    </div>
  );
}

export default App;
