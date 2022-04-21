import ReactDeleteRow from 'react-delete-row';
import { useState } from "react";
import { Buttoni } from "./components/Button.js";
import 'bootstrap/dist/css/bootstrap.min.css';  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import Add from "./add/add.js";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Row, Col} from 'react-bootstrap'  
import Button from 'react-bootstrap/Button'
import "./App.css";



const App = () => {
  const [components, setComponents] = useState([""]);

  function addComponent() {
    setComponents([...components, ""]);
  }
 

  return (
    <div>
      <br />
      &nbsp; <Buttoni  onClick={addComponent} text="Add names" /><br /><br />
    <table className="table">
      
        <thead>
            <tr>
                <th scope="col">Names</th>
             
                {/* <th scope="col"></th> */}
            </tr>
        </thead>
        <tbody>
          
          {components.map(() =>  { return (
            <ReactDeleteRow deleteElement={ <Button style={{marginTop:15}} variant="primary" size="sm">Delete</Button>}
            iconClassName='text-danger'
             onDelete={ item => { return window.confirm(`Are you sure?`) }}>
          
              
          <Add />
        
            </ReactDeleteRow>
            )}) }
        </tbody>
        <br />
       
    </table>
    </div>
  );
}


export default App;