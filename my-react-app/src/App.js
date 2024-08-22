import profilepic from './asset/ProfilePic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profilepic} className="App-logo" alt="logo" />
        <p>
          Hi I'm Marcus Yap and I'm a software engineer. I'm currently working on my personal website. Stay tuned!
        </p>

        <p>
          Check out my LinkedIn profile!
          
        </p>

        <p>
          Website Created on 21 August 2024
        </p>
        <a
          className="LinkedIn"
          href="https://www.linkedin.com/in/marcus~yap/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
