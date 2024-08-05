
import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <main>
        <Dictionary defaultInputWord="word" />
      </main>
      <footer className="footer">
        Coded by <a href="" >Nic Alonso</a>  |  Hosted on  <a href="https://app.netlify.com/">Netlify</a>
      </footer>
    </div>
  );
}

 
