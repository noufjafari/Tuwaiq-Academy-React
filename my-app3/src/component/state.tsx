
interface state {
    state:boolean;
}

function state(props:state) {
    let state=props.state;
    if(state==true){
        return (
            < >
      <button>التفاصيل</button>
            </ >
       )

    }else{
        return (
            < >
            <button>مفلق</button>
            </ >
       )
    }

  }
  export default state
  