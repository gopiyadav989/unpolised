import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import { NotFound } from "./pages/NotFound"
import Profile from "./pages/Profile"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/not-found" element={<NotFound/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/:slug' element={<Blog/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App