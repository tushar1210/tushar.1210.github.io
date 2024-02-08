import logo from './red-heart-icon.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Dixu Will you be my valentine? 😘
        <p className='button-view-port'>  
        <button className="button-82-pushable">
          <span class="button-82-shadow"></span>
          <span class="button-82-edge"></span>
          <span class="button-82-front text">
            Yes, My Pleasure!
          </span>
        </button>
        <button className="button-81-pushable" onClick={(e)=>{
          console.log(e);
          // document.view
        }}>
          <span class="button-81-shadow"></span>
          <span class="button-81-edge"></span>
          <span class="button-81-front text">
            Yes!
          </span>
        </button>
      </p>
      </header>
    </div>
  );
}

export default App;
