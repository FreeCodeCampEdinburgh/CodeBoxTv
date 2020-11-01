import './App.css';

import Header from './components/header';
import JoinRoom from './domain/joinRoom';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <JoinRoom />
      </Main>
    </div>
  );
}

export default App;
