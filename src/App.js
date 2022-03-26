import './App.css';
import Footer from './Component/Footer/Footer';
import Phones from './Component/Phones/Phones';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobilePhone } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="">
      <h1 className="phone-title">Phones <span className="arena">Arena</span>
        <FontAwesomeIcon className="phone-icon" icon={faMobilePhone}></FontAwesomeIcon>
      </h1>
      <Phones></Phones>

      <Footer></Footer>

    </div>
  );
}

export default App;
