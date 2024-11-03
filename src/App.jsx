import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Posts from "./pages/Posts"
import Post from "./pages/Post"
import Layout from "./components/Layout"
import Newpost from "./pages/Newpost"

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Layout />}>
        <Route index element={<Posts />} />
        <Route path=":id" element={<Post />} />
        <Route path="new" element={<Newpost />} />
      </Route>
    </Routes>
  )
}

export default App
