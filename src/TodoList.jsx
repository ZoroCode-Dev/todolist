


import React,{useState} from "react";


function TodoList () {

  const [tasks,setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");


  function handleInputChange(e) {
    setNewTasks(e.target.value);
  }

  function addTasks() {
    if (newTasks.trim() !== "") {
      setTasks(t=>[...t, newTasks]);
      setNewTasks("");
    }
  }

  function deleteTasks(index) {
    const updateTasks = tasks.filter((_, i) => {
      return i !== index;
     
    })
    setTasks(updateTasks);
  }

  function moveTasksUp(index) {
    if (index > 0) {
      const UpdatedTasks = [...tasks];
      [UpdatedTasks[index],UpdatedTasks[index-1]] = [UpdatedTasks[index-1],UpdatedTasks[index]];

      setTasks(UpdatedTasks);
    }
  }

  function moveTasksDown(index) {
    if (index < tasks.length) {
      const UpdatedTasks = [...tasks];
      [UpdatedTasks[index],UpdatedTasks[index+1]] = [UpdatedTasks[index+1],UpdatedTasks[index]];

      setTasks(UpdatedTasks);
    }
  }


  return(
    <div className="to-do-list">

      <h1>To-Do-List</h1>

      <div>
        <input 
             type="text"
             placeholder="Enter a task..."
             value={newTasks}
             onChange={handleInputChange} />
        <button 
           className="add-button"
           onClick={addTasks}>
             Add
        </button>     
      </div>
      <ol>
        {tasks.map((task, index) => 
          <li key={index}>
            <span className="text">{task}</span>
            <button 
               className="delete-button"
               onClick={() =>deleteTasks(index)}>Delete
            </button>
            <button 
               className="move-button"
               onClick={() =>moveTasksUp(index)}>👆
            </button>
            <button 
               className="move-button"
               onClick={() =>moveTasksDown(index)}>👇
            </button>
               
          </li>
        )}
      </ol>
    </div>
  );
}


export default TodoList;

