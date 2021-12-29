//library
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 

//Components
import Home from '../pages/home';
import SignIn from '../pages/signIn';

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/signin"  element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default routes;