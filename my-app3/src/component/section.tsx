import icon1 from '../assets/iconS1.png';
import icon2 from '../assets/iconS2.png';
import icon3 from '../assets/iconS3.png';


function section() {
  return (
    <div>
<div className="containerS">
    <div className="up2">
        <div className="btnS"><p>تحميل لمزيد</p></div>
    </div>
    <div className="down2">
        <div className="down2-up"><h1>خطوات التسجيل</h1></div>

        <div className="down2-down">

            <div className="Simg-text1"> <img  src={icon1 } /> <div className="textS1"><p>الانضمام للمنصـــة</p></div></div>

            <div className="line"><h2>----------</h2></div>

            <div className="Simg-text1"> <img  src={ icon2} /><div className="textS2"><p>التــســــــــجيــــــــــــل في المعسكر أو البرنامج </p></div></div>
    
            <div className="line"><h2>----------</h2></div>

            <div className="Simg-text1"> <img  src={icon3 } /><div className="textS3"><p> انتظار رسالة القــــبــــــــــــول</p></div></div>
    
        </div>
    </div>
</div>

    </div>
  )
}
export default section
