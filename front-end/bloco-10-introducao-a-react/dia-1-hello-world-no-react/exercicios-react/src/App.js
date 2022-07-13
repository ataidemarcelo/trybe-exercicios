import './App.css';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';

// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }


function App() {
  // const tasks = ['tarefa 01', 'tarefa 02', 'tarefa 03'];
  
  return (
    // <div className="App">
    //   <ul>
    //     {tasks.map(task => Task(task))}
    //   </ul>
    // </div>

    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
