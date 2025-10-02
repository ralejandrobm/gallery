import { useState, forwardRef, useImperativeHandle } from "react"
import Star from "./star"

const Rate = forwardRef(({conoceRate,index}, ref) => {
    const [raiting, setRaitin] = useState(0)
    const starts = Array.from({length: 5}, (_,i)=>(i+1))

    useImperativeHandle(ref, () => ({
      
      resetear: () => {setRaitin(0)
        console.log("Reseteo el rate index "+index)
      }
     
    }));
    
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
  })
  
  export default Rate
  