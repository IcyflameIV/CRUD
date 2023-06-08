import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './components/users';
import Create from './components/create';
import Update from './components/update';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Users />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/update" element={<Update />}></Route>
    </Routes>
    
</BrowserRouter>  
  );
}

export default App;
