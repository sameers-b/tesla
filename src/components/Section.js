import {Fade} from 'react-reveal'

const Section = (props) => {
   return (
      <>
      <Fade top cascade>
        <div className="container" style={{
           backgroundImage: `url(${props.img})`        
           }}>
           <div className="text-area">
              <h1>{props.model}</h1>
              <p>{props.text}</p>
           </div>
           <div className="btn-area">
              <button>Custom Order</button>
              <button>Existing Inventory</button>
           
           <div className="down-arrow">
              <img src="images/down-arrow.svg" alt="abc" />
           </div>
           </div>
        </div>  
        </Fade>
      </>
   )
}

export default Section
