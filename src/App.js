import logo from "./dictionaryblack.png";
import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <header className='App-header text-center'>
        <img src={logo} className='logo' alt='logo' width={160}/>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="footer">
        Coded by <a href="" >Nic Alonso</a>  |  Hosted on  <a href="https://app.netlify.com/">Netlify</a>
      </footer>
    </div>
  );
}

 
