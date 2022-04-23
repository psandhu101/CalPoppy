/** @jsxImportSource @emotion/react */
import "../style/maps.css";

export default function Maps() {
    return (
        <div className="MapPage">
            <h1 className="mapTitle">Swanton Pacific Ranch Maps</h1>
            <text className="mapText">The interactive map below provides different views of the ranch. This includes several layers with different toggable map elements. A more comprehensive interactive map will be made available at a later date.</text>
            <iframe title="CalPoly SPR" class ="map"
            src="https://calpoly.maps.arcgis.com/apps/instant/basic/index.html?appid=154965d4fc4245e0ab96e94e63252f15"></iframe>
            <hr className="divline"></hr>
            <h1 className="mapTitle">Other Maps</h1>
            <text className="mapText">Downloadable maps coming soon.</text>
        </div>
        
    )
}