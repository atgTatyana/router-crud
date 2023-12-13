import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import './App.css'
import { NewPost } from './pages/NewPost'
import { Post } from './pages/Post'
import { Edit } from './pages/Edit'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/posts/new' element={<NewPost />}></Route>
        <Route path='/posts/:id' element={<Post />}></Route>
        <Route path='/posts/:id/edit' element={<Edit />}></Route>
      </Routes>
    </>
  )
}

export default App
