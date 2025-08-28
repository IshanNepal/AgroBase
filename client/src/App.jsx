import Layout from './Layout'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import { Toaster } from 'react-hot-toast'
import SummaryPage from './Pages/SummaryPage'
import AiResultCard from './Pages/Result'
import LoginPage from './Pages/LoginPage'
import SingUpPage from './Pages/SingUpPage'
import MarketPlace from './Pages/MarketPlace'



const App = () => {
  return (
    <>
      <Toaster 
      position='top-center'
      reverseOrder={false}/>

      <Routes>
        <Route element={<Layout />}>
          {/* Secured Routes */}
          <Route index element={
              <HomePage/>
            }/>
          <Route path="/get_plant/:id" element={
            <SummaryPage />} />
          <Route path="/results" element={ <AiResultCard /> } />
          <Route path="/market" element={ <MarketPlace /> } />
        </Route>
      </Routes>
    </>
  )

}

export default App;

