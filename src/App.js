import logo from './logo.svg';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import './App.css';
import DefaultPage from './Components/DefaultPage.js';
import EmailForm from './Components/EmailForm_Recieve.js';

function App() {
  const targetDate = '2024-08-18T00:00:00'; // Set your target date here

    return (
        <>
            
            <DefaultPage targetDate={targetDate}></DefaultPage>
        </>
    );

//     return(
// <BrowserRouter>
//     <Routes>
    
//     <Route path=""  element={<DefaultPage/>}/>
//       <Route path="recieve"  element={<EmailForm/>}/>
//     </Routes>
    
//     </BrowserRouter>

//     );
}

export default App;
