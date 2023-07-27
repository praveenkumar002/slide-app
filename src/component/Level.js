import { useEffect } from 'react';
import '../component/level.css';
import {useLocation, useNavigate} from 'react-router-dom';

function Level() {
    const navigate = useNavigate();
    const location = useLocation();

useEffect(()=>{
    document.querySelectorAll(".img")[location.state].style.filter = "grayscale(0%)";
})
const slide = () => {
    navigate("/slide")
}
    return (
        <div className='levelDiv'>
            <button disabled onClick={slide}>
                <img className="img" style={{filter:"grayscale(0%"}} src={require(`../assests/level.png`)} />
                level-1
            </button>

            <div onClick={slide}>
                <img className="img" src={require(`../assests/level.png`)} />
                level-2
            </div>

            <div onClick={slide}>
                <img className="img" src={require(`../assests/level.png`)} />
                level-3
            </div>
            <div onClick={slide}>
                <img className="img" src={require(`../assests/level.png`)} />
                level-4
            </div >
            <div onClick={slide}>
                <img className="img" src={require(`../assests/level.png`)} />
                level-5
            </div>
        </div>
    )
}

export default Level;