import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList'

function App() {

  return(
    <div className='todo-app'>
      <Header />
      <TaskList />
    </div>
  )
}

export default App
