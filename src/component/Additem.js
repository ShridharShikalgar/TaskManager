import React, { useState } from "react";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
function Additem(props){
    
    const [modal, setModal] = useState(false)
    const [Item, setItem] = useState("");
    const [Desc, setDesc] = useState("");

    const inputchangehandlerItem = (event) => {
        setItem(event.target.value)
    }
    const inputchangehandlerDesc = (event) => {
        setDesc(event.target.value)
    }
//function called after form submmitted
    const Add = (e) => {
        e.preventDefault();
        // console.log([Item,Desc]);
        if(Item === 'To-do'){
            props.addTodo({
                type: Item,
                Description: Desc
        
            });
        }else
        if(Item === 'InProgress'){
            props.addInprogress({
                type:Item,
                Description:Desc
            });
        }else
         if(Item === 'QARaisedBugs'){
            props.addQARaisedBugs({
                type:Item,
                Description:Desc
            });
        }else
        if(Item === 'OneMore'){
            props.addOneMore({
                type:Item,
                Description:Desc
            });
        }toast.success("Form Submitted Successfully");
    }
   
        return(
           <div className="container1">
               <div className="container2">
               <Modal 
                size="lg"
                isOpen={modal}
                toggle={()=>setModal(!modal)}
                >
                   <ModalHeader
                    toggle={()=>setModal(!modal)}
                    >
                       <div><h2>Move Existing item<span style={{color:"grey", float:"left"}}>Add New Item |</span></h2></div>
                   </ModalHeader>

                   <ModalBody>
                       <div className="ui container right section" id="myForm" style={{width:450, margin:50}}>
                        <form className="ui form" onSubmit={Add}>
                            <div className="field row">
                                <label className="col">Item Name:</label>
                                <input 
                                    className="col"
                                    type="text"
                                    name="ItemName"
                                    placeholder="Item Name"   
                                    required
                                >
                                </input> 
                            </div >
                            <div className="field row">
                                <label className="col">Description:</label>
                                <input 
                                    className="col"
                                    type="text"
                                    name="Description" 
                                    required
                                    onChange={inputchangehandlerDesc} 
                                    value = {Desc}
                                >
                                </input> 
                            </div>

                            <strong style={{color: "blue"}}>Default Section</strong>
                            <hr style={{marginTop:-2,color: "blue"}}></hr>
                            
                            <input type="file" id="myFile" name="filename" style={{color:"green"}}></input>
                        
                            <div className="field row dropdown" style={{marginTop:15}}>
                            <label className="col">Status:</label>    
                            <input 
                                list="browsers" 
                                name="browser" 
                                className="col"  
                                onChange={inputchangehandlerItem} 
                                value = {Item}/>
                                <datalist id="browsers">
                                    <option value="To-do"/>
                                    <option value="InProgress"/>
                                    <option value="QARaisedBugs"/>
                                    <option value="OneMore"/>
                                </datalist>
                            </div>

                            <div className="field row dropdown">
                            <label className="col">Item Type:</label>    
                            <input list="browsers2" name="browser" className="col" />
                                <datalist id="browsers2">
                                    <option value="Story"/>
                                    <option value="Task"/>
                                    <option value="Bugs"/>
                                </datalist>
                            </div>
                            <div className="field row">
                                <label className="control-label col" for="date">Start Date</label>
                                <input className="form-control col" id="date" name="date" placeholder="MM/DD/YYY" type="text" required/>
                            </div>
                            <div className="field row">
                                <label className="control-label col" for="date">End Date</label>
                                <input className="form-control col" id="date" name="date" placeholder="MM/DD/YYY" type="text" required/>
                            </div>
                            <button type="submit" className="ui button blue">Submit</button>
                            
                            </form>
                            <ToastContainer />
                        </div>
                   </ModalBody>
               </Modal>
                <button className="ui button blue" style={{marginBottom: 20}} onClick={()=>setModal(true)}>
                    AddItem <img src="https://cdn-icons-png.flaticon.com/512/1237/1237946.png" />
                </button>
        </div>
    </div>
    )
    
}
export default Additem;