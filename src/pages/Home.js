import Section from "../components/Section"

const Home = () => {
   return (
      <>
         <Section 
           model="Model S"
           text="Order Online for Touchless Delivery"
           img="images/model-s.jpg" 
          />
          <Section 
           model="Model Y"
           text="Order Online for Touchless Delivery"
           img="images/model-y.jpg" 
          />
          <Section 
           model="Model 3"
           text="Order Online for Touchless Delivery"
           img="images/model-3.jpg" 
          />
          <Section 
           model="Model X"
           text="Order Online for Touchless Delivery"
           img="images/model-x.jpg" 
          />
          <Section 
           model="Solar Panels"
           text="Lowest Cost Solar Panels in America"
           img="images/solar-panel.jpg" 
          />
          <Section 
           model="Solar Roof"
           text="Produce Clean Energy From Your Roof"
           img="images/solar-roof.jpg" 
          />
          <Section 
           model="Accessories"
           img="images/accessories.jpg" 
          />
      </>
   )
}

export default Home
