import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Todo(props) {
  console.log("Props", props);

  const [open, setOpen] = useState(false);
  return (
    <div className="main">
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Todo{" "}
        <img
          alt="Img-tag"
          src="https://cdn-icons-png.flaticon.com/512/60/60781.png"
        ></img>
      </Button>
      <Collapse in={open}>
        <div className="container" id="example-collapse-text">
          <div className="ui row">
            <div className="section-1 col">
              <div className="ui celled list">
                
                  {props.todo.map((item) => {
                    return (
                      <div className="card">
                        <strong>Type of item:</strong>
                        <p>{item.type}</p>
                        <strong>Description:</strong>
                        <p>{item.Description}</p>
                      </div> 
                    );
                  })}
                  <div className="card">
                        <strong>Type of item:</strong>
                        <p>To-do</p>
                        <strong>Description:</strong>
                        <p>
                           What is the to-do list? They list everything that you have to do, 
                           with the most important tasks at the top of the list, and the least 
                           important tasks at the bottom. By keeping such a list, 
                           you make sure that your tasks are written down all in one place so you don't forget anything important.
                        </p>
                  </div>
                  <div className="card">
                        <strong>Type of item:</strong>
                        <p>To-do</p>
                        <strong>Description:</strong>
                        <p>
                           What is the to-do list? They list everything that you have to do, 
                           with the most important tasks at the top of the list, and the least 
                           important tasks at the bottom. By keeping such a list, 
                           you make sure that your tasks are written down all in one place so you don't forget anything important.
                        </p>
                  </div>
                  <div className="card">
                        <strong>Type of item:</strong>
                        <p>To-do</p>
                        <strong>Description:</strong>
                        <p>
                           What is the to-do list? They list everything that you have to do, 
                           with the most important tasks at the top of the list, and the least 
                           important tasks at the bottom. By keeping such a list, 
                           you make sure that your tasks are written down all in one place so you don't forget anything important.
                        </p>
                  </div>
                  <div className="card">
                        <strong>Type of item:</strong>
                        <p>To-do</p>
                        <strong>Description:</strong>
                        <p>
                           What is the to-do list? They list everything that you have to do, 
                           with the most important tasks at the top of the list, and the least 
                           important tasks at the bottom. By keeping such a list, 
                           you make sure that your tasks are written down all in one place so you don't forget anything important.
                        </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default Todo;
