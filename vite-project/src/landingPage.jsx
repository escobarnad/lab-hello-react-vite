import logo from "./assets/ironhack-logo-xs.png"
import menu from "./assets/menu-top-xs.png"
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"
import icon4 from "./assets/icon4.png"

function LandingPage (){
    return(
        <>
            <div className="nav">
            <img src={logo}/>
            <img src={menu}/>
            </div>
            <div className="text">
            <h1>Say hello to</h1>
            <h1>ReactJS</h1>
            <p>You will learn how to use</p>
            <p>the most popular frontend library,</p>
            <p>and become a super Ninja developer.</p>
            <button>Awesome!</button>
            </div>
            <div className="icons">
                <img src={icon1}/>
                <img src={icon2}/>
                <img src={icon3}/>
                <img src={icon4}/>
            </div>
        </>
    )
}
export default LandingPage