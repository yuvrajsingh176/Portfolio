
import Navigation from "./components/Navigation";
import About from "./components/About";
import Experince from './components/Experience'
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Email from "./components/Email";
import Desc from "./components/Desc";
import Logos from "./components/Logos";
import Footer from "./components/Footer";
const App = () => {
  return (
    // <div className="bg-[#0a192f] h-full  ">
      <div className="margin-class mt-6 mx-8 h-full">
        <Navigation/>
       <Logos/>
        <div className="main-div flex h-full">
          <div className="content mt-20 ml-40 h-full ">
          <Desc/>
          <About/>
          <Experince/>
          <Projects/>
          <Contacts />
          <Footer/>
          </div>
          </div>
          <Email/>
          </div>
    // </div>
  );
};
export default App;
