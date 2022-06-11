import navbar from '../components/navbar.js';
import '../styles/style.css'

import axios from 'axios'

let navbar_div=document.getElementById('navbar')
navbar_div.innerHTML=navbar

async function getData(){
    let data=await axios.get('https://fakestoreapi.com/products/category/electronics')
    // console.log(data.data)
    var x=data.data
    localStorage.setItem('electronics',JSON.stringify(x))
    console.log(x)
    return x;


}

getData()


