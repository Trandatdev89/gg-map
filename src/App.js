import { Slider } from "antd";
import GoogleMapReact from "google-map-react";
import "./css/style.css";
import { useDispatch, useSelector } from "react-redux";
import { Change } from "./Action";
import anh1 from "./img/duan24h.net_BĐQHSDĐ_Dong_Anh_HN_2030.jpg";
import { useEffect, useState } from "react";



function App() {
 
  const style = {
    display: "inline-block",
    height: 100,
    
  };
  const [range,setRange]=useState(0);
  useEffect(()=>{
    const kk=document.querySelector("#kk");
    kk.style.opacity=range/100;
    
  },[range])

  return (
    <>

      
      <input type="range" className="Map__slider" defaultValue={0} id="slider" onChange={(e)=>setRange(e.target.value)}  style={{style}}/>

      <div className="Map">
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7448.765276526692!2d105.84095344143087!3d21.017370372516254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8f79019205%3A0xfd0f67139e1d0b7b!2sHanoi%20218%20Le%20Duan!5e0!3m2!1svi!2s!4v1715617304584!5m2!1svi!2s" style={{minHeight:"100vh",width:"100%"}}></iframe>
        <img src={anh1} alt="loading..." id="kk"/>
      </div>
    </>
  );
}

export default App;
