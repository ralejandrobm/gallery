function Star(props) {
  

    return (
      <>
          <span className={props.star>props.raiting ? "star" : 'active'} ><a onClick={()=>(props.avisaRate(props.star))}>{'\u2605'}</a></span>
      </>
    )
  }
  
  export default Star