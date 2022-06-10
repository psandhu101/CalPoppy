/** @jsxImportSource @emotion/react */
import "../style/maps.css";

/* UNFINISHED
  * may need to properly embed interactive map from Classic Viewer
  */

export default function Maps() {
    return (
        <div className="MapPage">
            {/* maybe add drop-down to navigate through maps, but unnecessary right now
            example:
                interactive
                vegetation
                    flowers
                    trees
                structures
                    pre-fire
                    post-fire
                */}
            <h1 className="mapTitle">Swanton Pacific Ranch Maps</h1>
            <text className="mapText">The interactive map below provides different views of the ranch. It may take a few seconds to load. You can toggle different layers and map elements by clicking INSERT LAYER BUTTON. A map legend is available here INSERT LEGEND BUTTON. A more comprehensive interactive map will be made available at a later date.</text>
            <iframe title="CalPoly SPR" class ="map"
            src="https://calpoly.maps.arcgis.com/apps/instant/basic/index.html?appid=154965d4fc4245e0ab96e94e63252f15"></iframe>
            {/* 
              * embed google map again
              */}
            <hr className="divline"></hr>
            <h1 className="mapTitle">Other Maps</h1>
            <text className="mapText">More maps coming soon.</text>
        </div>
        
    )
}