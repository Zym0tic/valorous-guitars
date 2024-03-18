import { HashRouter, Route, Routes } from 'react-router-dom';
import Welcome from './screens/Welcome';
import Main from './screens/Main';

function App() {
  return (
    <div className="App">
      <HashRouter>
       <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main/*" element={<Main />} />
       </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
