import React from 'react'
import "../src/App.css"
import { Titulo } from "./Components/Titulo/index";
import { Contador } from "./Components//Contador/index"
import { Botones } from "./Components/Botones/index"

export const App = () => {
  return (
    <div>
      <Titulo/>
      <Contador/>
      <Botones/>
    </div>
  )
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Mitchell Andrés Arévalo
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
