import { useState } from "react"
import Star from "./star"

function Rate({conoceRate,index}) {
    const [raiting, setRaitin] = useState(0)
    const starts = Array.from({length: 5}, (_,i)=>(i+1))
    
    const avisaRate = ( valor) =>
    {
        setRaitin(valor)
        conoceRate(index, valor)
    }

    return (
      <>   
        <div>
            <div className="stars">
            {/*starts.map((star,i) => (<span  key= {i} className={star>raiting ? "star" : 'active'}><a onClick={()=>(avisaRate(star))}>{'\u2605'}</a></span>))*/
              starts.map((star,i) => <Star llave ={i} key={i} star={star} raiting={raiting} avisaRate={avisaRate}/>)
            }
            </div>       
        </div>
      </>
    )
  }
  
  export default Rate
  