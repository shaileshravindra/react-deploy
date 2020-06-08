import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import "./ToDoStyles.css";
import List from './TodoListMenu';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Grid from '@material-ui/core/Grid';


const TodoMenu = () => {
const [item,setItem] = useState();
const [newItem,setNewitem] = useState([]);


const itemEvent =(event) => {

setItem(event.target.value);
};

const clearItems = () => {
 
    setNewitem([]);
};

const clickFired = () => {
setNewitem ((preVal) => {
     return([...preVal,item])
 });
};

const clearButton= () => {
        
    setItem('');    
    
};



return (
<React.Fragment>
    <Grid className ='main_div' >
        <Grid className ='center_div' xs={12} md={3}>
        <br />
        <h1>To Do List</h1>
        <br />
        <input type = "text" 
         placeholder =" Type here "
         value={ item }
         onChange ={ itemEvent }
         />
         <span onClick= { clearButton }>
         <Button className="newBtn" onClick ={ clickFired }>
            <AddIcon />
         </Button>
         </span>
         <br />
            <ol>
                {newItem.map((val,index) => {
                    return <List key={index} text={val}/>  ;
                  }) 
                }
            </ol>

            <br />
            
            <span  className="styleclear" onClick={clearItems} >
                <ClearAllIcon />
            </span>
        </Grid>

    </Grid>
</React.Fragment>);
} ;


export default TodoMenu;