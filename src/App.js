import { Slider } from "antd";
import GoogleMapReact from "google-map-react";
import "./css/style.css";
import { useDispatch, useSelector } from "react-redux";
import { Change } from "./Action";
import anh1 from "./img/duan24h.net_BĐQHSDĐ_Dong_Anh_HN_2030.jpg";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {
  const dispatch=useDispatch();
  const kk=useSelector(state=>state.ChangeSlider);
  const style = {
    display: "inline-block",
    height: 100,
  };

  const handleChange = (e) => {
    dispatch(Change(e));
  };

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <>

      <div className="Map__slider" style={style}>
        <Slider vertical defaultValue={0} onChange={handleChange} />
      </div>

      <div className="Map">
        <div className={kk?("Map-1 transparent"):("Map-1 opaque")}>

        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
        </div>
        <img src={anh1} alt="loading..." className={kk?("opaque"):("transparent")}/>
      </div>
    </>
  );
}

export default App;
