
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TicTacToe from './features/TicTacToe/TicTacToe'

function Index(){
  return (
      <div>
        <button><Link to="/tictactoe">Go To TicTacToe</Link></button>        
      </div>     
)}
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/tictactoe' element={ <TicTacToe /> } />
      </Routes>
    </BrowserRouter>
  );
}