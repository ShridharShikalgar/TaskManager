import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import {Collapse} from 'react-bootstrap';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Inprogress(props) {
    const [open, setOpen] = useState(false);
    return (
        <div className='main'>
        <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
        >
            InProgress <img alt="Img-tag"src='https://cdn-icons-png.flaticon.com/512/60/60781.png'></img>
        </Button>
        <Collapse in={open}>
        <div className="container" id="example-collapse-text">
                <div className='row'>
                    <div className="section-1 col">
                        <div className='ui celled list'>
                            {props.inprogress.map((item) => {
                                return (
                                    <div className="card">
                                        <strong>Type of item:</strong>
                                        <p>{item.type}</p>
                                        <strong>Description:</strong>
                                        <p>{item.Description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
            </div>
        </div>
    </Collapse>
    </div>
    );
}

export default Inprogress;