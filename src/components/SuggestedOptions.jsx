
// import suggestions from "./suggestions";
import {aboutSPR, aboutCreators} from "./suggestions"
import '../style/faq.css'

export default function SuggestedOptions() {
  return (
    <div class="container">
      <div class="row bg-white text-white center-block">
        <div class="col" align="center">
          <div class="bubble">
            <div class="card-body">
              <h5 class="card-title">Suggested Questions</h5>
              <div class="btn-group-vertical">
                <button type="button" class="roundButton">How big is Swanton Pacific Ranch?</button>
                <button type="button" class="roundButton">Where did Swanton get its name?</button>
                <button type="button" class="roundButton">What group of Indigenous Peoples lived in the Swanton area before Spanish colonization?</button>
                <button type="button" class="roundButton">How many plants have been identified in the Swanton/Scott Creek Watershed?</button>
                <button type="button" class="roundButton">What is a fun fact about the Rancho?</button>
                <button type="button" class="roundButton">How do I plan a visit to Swanton?</button>

              </div>
            </div>
          </div>
        </div>
        <div class="col" align="center">
          <div class="bubble">
          <div class="card-body">
            <h5 class="card-title">About Swanton Pacific Ranch</h5>
            <h6><br/>{aboutSPR}</h6>
          </div> 
          </div>
        </div>

        <div class="w-100"></div>

        <div class="col" align="center">
          <div class="bubble">
          <div class="card-body">
            <h5 class="card-title">About the Creators</h5>
            <h6><br/>{aboutCreators}
            <br/><br/>
            Poppy Software Team<br/>
            poppyemail@email.com</h6>
          </div> 
          </div>
        </div>
        <div class="col" align="center">
        <div class="bubble">
          <div class="card-body">
            <h5 class="card-title">Want to Help?</h5>
            <h6><br/>Poppy needs your help to ensure that she can stay up and running to educate future generations on 
            SPR rich history!<br/>

            Interested in donating? Contact:<br/><br/>

            Jeanine Scaramozzino<br/>
            (805) 123 - 4567<br/>
            poppyemail@email.com
            </h6>
          </div> 
          </div> 
        </div>
      </div>
    </div>
  );
  }
