import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {router} from "./router/router";
import './styles/global.css'
function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                {router.map(item => (
                    <Route element={item.element} path={item.path}/>
                ))}
            </Routes>
        </>
    );
}

export default App;
