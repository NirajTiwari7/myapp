
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
 
  const [mode, setMode] = useState('light'); // WHEATHER MODE IS ENABLE OR NOT
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message ,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
    // apna aap 2second bad showalert chala jaya ga
  }

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0d0d0d';
      showAlert("Dark mode has been enabled" , "success")
      document.title = 'TextUtils - Dark Mode'; // title change ho jaya ga dark mode enable karna sa

      // == [ JAISA KOI KOI WEBSITE MAI BLINK HOTA RAHA HAI KOI IMAGE YA TEXT KI PHONE MAI VIRUS HAI ETC ] { MAI BHI AISA HI KUCH KARNA CHAHTA PAR MAI TITLE KO BLINK KAR VANA CHAHTA HO  }
      /*
      setInterval(() => {
        document.title = 'TextUtils is Amazing Mode';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 4000);
      */
    }
     else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success")
      document.title = 'TextUtils - Light Mode'; // -- title change ho jaya ga light mode enable karna sa

      
      // == [ JAISA KOI KOI WEBSITE MAI BLINK HOTA RAHA HAI KOI IMAGE YA TEXT KI PHONE MAI VIRUS HAI ETC ] { MAI BHI AISA HI KUCH KARNA CHAHTA PAR MAI TITLE KO BLINK KAR VANA CHAHTA HO  }
      /*
      setInterval(() => {
        document.title = 'TextUtils is Amazing Mode';
      }, 2000);

      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 4000);
      */
    }
    }

  return (
   <> 
     <Navbar  title="TextUtils"  abouttext="TextUtils About" mode={mode} toggleMode={toggleMode} />
     
     {/* there are many types of ALERTS LINK https://getbootstrap.com/docs/5.1/components/alerts/ verion 5.1
     EXAMPLE:- success , warning , danger , primary 
     */}
     
     {/*  UPAR JO USESTATE HAI  AUR SHOW ALERT FUNCTION MAI HAI jis mai setAlert MESSAGE AND TYPE hai MATLAB ALERT KA MESSAGE AND TYPE DISIDE KAR SAKTA HO { EX: showAlert("Light mode has been enabled" , "success") } [  msg and type ka VALUE ALERT.JS MAI JAYA GA KYU KI MAINE alert={alert} likha hai  msg and type alert.js mai transfer ho JAYA GA ] AUR JO MSG AND TYPE SEND KIYA HAI ALERT.JS MAI PROPS KA JARI YA USKO PRINT KAR NA KALIYA{props.alert.msg} aur type ka liya  {props.alert.type} LIKHNA HOGA */}
     <Alert alert={alert} />
     <div className="container my-3">
      {/*SHOW ALERT KO TEXT FORM  MAI PASS KAR DIYA AB SHOW ALERT TEXT FORM MAI USE KAR SAKTA HO AUR MSG AND TYPE OF ALERT SET KAR SAKTA AUR VOH MSH AND TYPE PASS KAR DIYA JAYA GA ALERT.JS KO AUR ALERT.JS US MSG AND TYPE OF ALERT KO SHOW KAR DEGA */}
    <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
     {/*} <About/> */} 
    
     </div>
 </>
  );
}

export default App;



