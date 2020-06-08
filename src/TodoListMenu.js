import React , { useState }from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoListMenu = (props) => {
    
    const [line,setLine] = useState(false);
    
    const cutThrough = () => {

        setLine(true);
    }
   
   
    return(
    <div className ='todo_style'>
        <span onClick={cutThrough}>
            <DeleteIcon className="deleteIcon" /> 
        </span> 
     <li style={ {textDecoration : line ?  'line-through' : 'none'} }> {props.text} </li> 
    </div>);
}


export default TodoListMenu;