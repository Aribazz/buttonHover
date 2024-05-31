import {Routes,Route} from "react-router-dom";
import ButtonContainer from './ButtonCnt';  // Path to your ButtonContainer component
// import Page1 from './Page1';
// import Page2 from './Page2';
// import Page3 from './Page3';
import './App.css'; 

function App() {
  return (
   <>
   <div>
    <ButtonContainer />
    <Routes>
    {/* <Route path="/page1" element={<Page1 />} /> */}
    {/* <Route path="/page2" element={<Page2 />} /> */}
    {/* <Route path="/page3" element={<Page3 />} /> */}
   </Routes>

   </div>

   </>
  );
}

export default App;
