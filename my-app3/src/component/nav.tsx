import logo from '../assets/logo-tuwaq.svg';

function nav() {
  return (
    <div>
      <div className="navbar">
      <div className="navbar-text">
            <ul>
                <li >الرئيسية</li>
                <li >المعسكرات والبرامج</li>
                <li >حول الأكاديمية</li>
                <li >الأكاديمية التابعة</li>
            </ul>
        </div>
          <img  src={logo} />

     </div>
    </div>
  )
}
export default nav

