import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import RouterNav from './router';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
function App(){
    return(
        <BrowserRouter>
      <HeaderComponent/> 
            <RouterNav/>
           <FooterComponent/>
        </BrowserRouter>

    )
}
export default App