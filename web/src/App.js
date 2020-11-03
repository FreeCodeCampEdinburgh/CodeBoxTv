import './App.css';

import Header from './components/header';
import JoinRoom from './domain/joinRoom';
import Main from './components/main';

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
