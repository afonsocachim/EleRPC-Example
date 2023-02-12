import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  const helloThere = async () => {
    const payload = await window.api.demoRouter.handlers.handleThis();
    console.log(payload.message);
  };

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <button onClick={helloThere} type="button">
        Hello There
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

window.api.demoRouter.dispatchers.dispatchThis((_, payload) => {
  console.log('Received', payload);
});
