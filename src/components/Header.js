import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
   return (
      <>
         <div className="header">
            <div className="logo">
               <img src="images/logo.svg" />
            </div>
            <div className="mid-menu">
               <ul>
                  <li>Model S</li>
                  <li>Model 3</li>
                  <li>Model X</li>
                  <li>Model Y</li>
                  <li>Solar Roof</li>
                  <li>Solar Panels</li>
               </ul>
            </div>
            <div className="right-menu">
               <ul>
                  <li>Shop</li>
                  <li>Account</li>
                  <li>Menu</li>
               </ul>
            </div>
            <div className="mobile-menu">
               <AiOutlineMenu />
            </div>
         </div>
      </>
   )
}

export default Header
