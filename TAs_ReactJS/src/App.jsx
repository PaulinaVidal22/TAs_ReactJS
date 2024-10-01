import { useState } from 'react'
import { Card } from "/src/components/card/cardNoChildren/card.jsx";
import { Card2 } from "/src/components/card/cardChildren/card.jsx";
import { CardContent } from "/src/components/CardContent/cardContent.jsx";
import { InputComponent } from "/src/components/inputComponent/inputComponent.jsx";
import { Counter } from "/src/components/counter/counter.jsx";
import HidingText from "/src/components/hidingText/hidingText.jsx";
import TaskForm from "/src/components/taskForm/taskForm.jsx";
import TaskList from "/src/components/taskList/taskListNoDeleteFunc/taskList.jsx";
import TaskListDel from './components/taskList/taskListDeleteFunc/taskList';
import TaskFormEdit from './components/taskForm/taskFormEdit/taskFormEdit';
import TaskListEditFunc from './components/taskList/taskListEditFunc.jsx/taskList';
import "./styles.css";
import './App.css'

export default function App() {

  // TA 6, TA7 & TA8
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // TA7 & TA8

  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  // Only TA8
  const [editingIndex, setEditingIndex] = useState(null); 
  const [editingValue, setEditingValue] = useState("");

  const editTask = (index) => {
    const taskToEdit = tasks[index]; 
    setEditingIndex(index); 
    setEditingValue(taskToEdit); 
  };

  const saveEditTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = editingValue; 
    setTasks(updatedTasks); 
    setEditingIndex(null); 
    setEditingValue(""); 
  };


  return (
    <>
      <div className="App">
        <h2>Trabajo de Aplicación 1</h2>
        <Card
          title="DB script"
          description="done"
          assignedPerson="Amanda"
          initDate="02/09/2024"
          endDate="06/09/2024"
        />
        <Card
          title="Business Logic"
          description="In progress"
          assignedPerson="Pau"
          initDate="11/09/2024"
          endDate="18/09/2024"
        />
        <Card
          title="Test Endpoints"
          description="to do"
          assignedPerson="Manuel"
          initDate="23/09/2024"
          endDate="27/09/2024"
        />
      </div>
      <div className="App">
      <h2>Trabajo de Aplicación 2</h2>
        <Card2>
          <CardContent
            title="DB script"
            description="done"
            assignedPerson="Amanda"
            initDate="02/09/2024"
            endDate="06/09/2024"
          />
        </Card2>
        <Card2>
          <CardContent
            title="Business Logic"
            description="In progress"
            assignedPerson="Pau"
            initDate="11/09/2024"
            endDate="18/09/2024"
          />
        </Card2>
        <Card2>
          <CardContent
            title="Test Endpoints"
            description="to do"
            assignedPerson="Manuel"
            initDate="23/09/2024"
            endDate="27/09/2024"
          />
        </Card2>
      </div>
       <div className="App">
        <h2>Trabajo de Aplicación 3</h2>
        {}
        <InputComponent/>
        </div>
        <div className="App">
          <h2>Trabajo de Aplicación 4</h2>
          <Counter />
        </div>
        <div className="App">
          <h2>Trabajo de Aplicación 5</h2>
          <HidingText />
        </div>
        <div className="App">
        <h2>Trabajo de Aplicación 6</h2>
          <h1>Tasks List</h1>
          {}
          <TaskForm addTask={addTask} />

          {}
          <TaskList tasks={tasks} />
        </div>
        <div className="App">
          <h2>Trabajo de Aplicación 7</h2>
          <h1>Tasks List</h1>
          <TaskForm addTask={addTask} />
          <TaskListDel tasks={tasks} deleteTask={deleteTask} />
      </div>
      <div className="App">
      <h2>Trabajo de Aplicación 8</h2>
      <h1>Tasks List</h1>
      <TaskFormEdit 
        addTask={addTask} 
        saveEditTask={saveEditTask}
        editingValue={editingValue} 
        setEditingValue={setEditingValue}
        editingIndex={editingIndex} 
      />
      <TaskListEditFunc 
        tasks={tasks} 
        deleteTask={deleteTask} 
        editTask={editTask} 
      />
    </div>
    </>
  );
}


