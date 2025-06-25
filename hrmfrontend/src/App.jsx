import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { ShowEmployee } from './components/ShowEmployee'
import { AddEmployee } from './components/AddEmployee'
import { EditEmployee } from './components/EditEmployee'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>

    <Router>
      <Routes>
        <Route exact path='/' element={<ShowEmployee />} />
        <Route exact path='/addemployee' element={<AddEmployee />} />
        <Route exact path='/edit/:empId' element={<EditEmployee />} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
