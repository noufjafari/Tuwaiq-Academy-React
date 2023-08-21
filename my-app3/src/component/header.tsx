import headericon from '../assets/iconHeader.png';

function header() {
  return (
    <div>
     <div className="containerH">
        <div className="textH"><h2>المعسكرات والبرامج</h2></div>
        <div className="btuH">
            <div className="btuH1"><h4 >الناشئون</h4></div>
           <div className="btuH2"> <h4>الكبار</h4></div>

        </div>
        <div className="imgH"><img  src={headericon} /></div>
     </div>
     
    </div>
  )
}
export default header
