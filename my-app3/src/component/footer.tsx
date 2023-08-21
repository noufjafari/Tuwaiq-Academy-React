import logo from '../assets/logo-tuwaq.svg';
import img1 from '../assets/footerimg1.png';
import img2 from '../assets/footerimg2.png';
import media from '../assets/media.png';

function footer() {
  return (
    <div>
      <div className="containerF">
            <div className="up">
            <div className="imgg"><img  src={img1} /></div>
            <div className="imgg2"><img  src={img2} /></div>
            <div className="div3"><img  src={media} /><p>@TuwaiqAcademy</p></div>
            <div className="div4"><p> شارك كمدرب</p><p>حول الأكاديمية</p></div>
            <div className="div5"><p> الشروط والأحكام</p><p>سياسة الخصوصية </p></div>
            <div className="div6"><img  src={logo} /></div>
            </div>
                <div className="down">
                  <p>جميع الحقوق محفوظة لأكاديمية طويق 2023</p>
                </div>              

     </div>
    </div>
  )
}
export default footer

