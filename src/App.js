import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Container from "./layout/Container";
import El from "./library/El";

const App = () => {
    const app = El({
        element:'div',
        child:[Navbar(),Main()]
        })
    return Container(app)
}
 
export default App;