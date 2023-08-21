import duration from '../assets/duration.png';
import location from '../assets/location.png';
import date from '../assets/date.png';
import State from '../component/state';

interface Card {
    title: string;
    loaction:string;
    duration:string;
    date:any;
    state:boolean;
}

function cards(props:Card) {
    return (
      < >
    <div className="containerC">
        <div className="contant">
            <div className="up3"><h4>لقاء</h4><p>{props.title}</p></div>
        
        <div className="down3">
        
        <div className="rigth-side">
        <div className="down3-up">

        <div className="loaction"><img  src={ location } /><p>{props.loaction}</p></div>
        <div className="duration"><img  src={ duration } /><p>{props.duration}</p></div>
         
        </div>
        <div className="down3-down">
         <div className="date"><img  src={ date } /><p>{props.date}</p></div>
         </div>
        </div>

        <div className="left-side">
        <State state={props.state}/>  
        </div>
       
        </div> 
        </div>
    </div>
      </ >
 )
  }
  export default cards
  