// import MyJokeComponent from './components/MyJokeComponent';
// import ChamadaDosMetodos from './components/ChamadaDosMetodos';
// import MyInterdimensionalApp from './components/MyInterdimensionalApp';
import LifeCicleApp from './LifeCycleApp';
import RandomUser from './RandomUser';

import './App.css';

function App() {
  return (
    <div className="App">
      <>
        <p>=======================RandomUser================================</p>
        <RandomUser />
        <p>=======================LifeCicleApp==============================</p>
        <LifeCicleApp />
        {/* <p>=======================MyJokeComponent===========================</p>
        <MyJokeComponent />
        <p>=======================ChamadaDosMetodos=========================</p>
        <ChamadaDosMetodos />
        <p>=======================MyInterdimensionalApp=====================</p>
        <MyInterdimensionalApp /> */}
      </>
    </div>
  );
}

export default App;
