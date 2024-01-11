import logo from './logo.svg';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
// import {useSpring, animated } from 'react-spring'

// function Number({n}){
//   const {number} = useSpring({
//     from: {number: 0},
//     number : n,
//     delay : 200,
//     config: { mass: 1 , tension: 20, friction: 10}
//   })
//   return <animated.div>
//     {number.to((n)=> n.toFixed(0))}
//   </animated.div>
// }

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  )
}

export default App;
