import './App.css'
import Nav from './component/nav';
import Header from './component/header';
import Cards from './component/cards';
import Section from './component/section';
import Footer from './component/footer';

function App() {

  return (
    <>
<Nav/>
<Header/>
<div className="card">
 
<Cards title='لقاءات سيبرانية' loaction='الرياض' duration='ثلاثةاسابيع' date={2023+"/"+8+"/"+21} state={true}/>
<Cards title='مستقبل الأمن السيبراني في الخدمات السحابية' loaction='الرياض' duration='يوم' date={2023+"/"+8+"/"+21} state={false}/>
<Cards title='مقدمة في تحليل البرمجيات باستخدام تقنية ال Symbolic Analysis' loaction='الرياض' duration='يوم' date={2023+"/"+8+"/"+23} state={true}/>


<Cards title='التحقيق الرقمي والاستجابة للحوادث' loaction='الرياض' duration='اسبوعان' date={2023+"/"+8+"/"+27} state={true}/>
<Cards title='تقنية Blockchain والتطبيقات اللامركزية' loaction='الرياض' duration='اسبوعان' date={2023+"/"+8+"/"+27} state={false}/>
<Cards title='برنامج البنية المؤسسية بمنهجية وإطار TOGAF' loaction='الرياض' duration='اسبوعان' date={2023+"/"+9+"/"+3}  state={true}/>

<Cards title='تمثيل البيانات وعرضها باستخدام منصة Superset' loaction='عن بعد' duration='اسبوع' date={2023+"/"+9+"/"+3} state={true}/>
<Cards title='علم المعلومات والحوسبة الكمية' loaction='الرياض' duration='ستة اسابيع' date={2023+"/"+9+"/"+3} state={false}/>
<Cards title='مهارات تقنيات الميتافيرس' loaction='الرياض' duration='اربعة اسابيع' date={2023+"/"+9+"/"+3} state={false}/> 

</div>
<Section/>
<Footer/>
    </>
  )
}

export default App
