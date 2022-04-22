  import React from "react";
  import {BrowserRouter, Routes, Route} from "react-router-dom";
  import "bootstrap/dist/css/bootstrap.min.css";
  import Test from './Test';
  import Navbar from "./components/navbar";
  import ExerciseList from "./components/exercise-list";
  import EditExercise from "./components/edit-exercise";
  import CreateExercise from "./components/create-exercise";
  import CreateUser from "./components/create-user";





  const App = () => {
      return(
          
        <BrowserRouter>
        <Routes>


          
          <Route path="/" element={<ExerciseList />} />
          {/* <Route path="/test" element={<Navbar />} /> */}
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />

           
          
        </Routes>
      </BrowserRouter>
      )
  }

  export default App