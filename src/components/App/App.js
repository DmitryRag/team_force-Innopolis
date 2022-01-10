import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../redux'
import Login from '../Login/Login'
import Main from '../Main/Main'
import Bascet from '../Bascet/Bascet'
import './App.css'

function App() {  
  return (
    <Provider store={store}>
        <div className='page'>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/restaurant' element={<Main/>} />
                <Route path='/bascet' element={<Bascet/>} />
            </Routes>
        </div>
    </Provider>
  )
}

export default App