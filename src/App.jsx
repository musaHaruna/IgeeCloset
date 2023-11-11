import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Error, Explore, Landing, Closet, FAQ } from './pages/Index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}>
          <Route path='explore' element={<Explore />} />
          <Route path='closet' element={<Closet />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
