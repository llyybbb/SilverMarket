import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Sigup';
import Signup2 from './Pages/Signup2';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup2 />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;