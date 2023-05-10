
import './App.css';
import Login from './Login';
import Register from './Register';
import {useSelector} from 'react-redux'

function App() {

  const user = useSelector((state)=>state.user)
  return (
    <div className="App">
      {
        user?
        <Login/>
        :
        <Register/>

}
    </div>
  );
}

export default App;
