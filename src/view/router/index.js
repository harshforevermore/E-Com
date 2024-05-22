import {Routes,Route} from 'react-router-dom'
import '../style/style.css'
import About from '../screen/About';
import Shop from '../screen/Shop';
import HomeScreen from '../screen/HomeScreen';
import Details from '../screen/Details';
import Login from '../screen/Login';
import Registration from '../screen/Resgistration';
import { useEffect, useState } from 'react';
import Logout from '../screen/Logout';
import AddToCart from '../screen/AddToCart';
import Payment from '../screen/Payment';
import MensWear from '../screen/MensWear';
import WomensWear from '../screen/WomensWear';
import Accessories from '../screen/Accessories';
import KidsWear from '../screen/KidsWear';
import Cart from '../screen/Cart';

function  RouterNav(){
    const[userdata,setUserData]=useState('');

    useEffect(()=>{
        setUserData(localStorage.getItem('Email'));
    },[]);
    // console.log(userdata);
    return(
        <>
            <Routes>
                
                {userdata==null?<><Route path='/' Component={Login}/></>
                :
                <>
                <Route path='/' Component={Login}/>
                <Route path='/home' Component={HomeScreen}/>
                </>}

                <Route path='/about' Component={About}/>
                <Route path='/shop' Component={Shop}/>
                <Route path='/details' Component={Details}/>
                <Route path='/registration' Component={Registration}/>
                <Route path='/logout' Component={Logout}/>
                <Route path='/addtocart' Component={AddToCart}/>
                <Route path='/payment' Component={Payment}/>
                <Route path='/menswear' Component={MensWear}/>
                <Route path='/womenswear' Component={WomensWear}/>
                <Route path='/kidswear' Component={KidsWear}/>
                <Route path='/accessories' Component={Accessories}/>
                <Route path='/cart' Component={Cart}/>

               
            </Routes>
        </>
    )
}
export default RouterNav








































