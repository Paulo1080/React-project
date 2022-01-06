//library
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 

//Components
import Home from '../pages/home';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp'

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/signin"  element={<SignIn/>}/>
        <Route path="/signup"  element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default routes;