import {FaTimes} from 'react-icons/fa'
import {FaStar} from 'react-icons/fa'

// 
const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className = 'task' >
      <h3><span><FaStar size = '20px'onClick = {()=> onToggle(task.id)} style = {{color: task.reminder ? 'gold' : 'black', marginRight: '10px'}}/>{task.text}</span><FaTimes onClick = {() => onDelete(task.id)}/></h3>
      <p>{task.day}</p>
    </div>    
  )
}

export default Task
