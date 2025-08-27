
import Layout from './Layout'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import { Toaster } from 'react-hot-toast'
import SummaryPage from './Pages/SummaryPage'



const App = () => {
  return (
    <>
      <Toaster 
      position='top-center'
      reverseOrder={false}/>

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path="/get_plant/:id" element={<SummaryPage />} />
        </Route>
      </Routes>
    </>
  )

}

export default App
