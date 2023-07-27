import menu from "../assests/list.png";
import home from "../assests/arrow-left.png";
import close from "../assests/x.png";

import "../component/slide.css";

import { SlideContext } from "./SlideProvider";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function Slide() {
  const value = useContext(SlideContext);
  const navigate = useNavigate();
  const { slideIndex, goToNextSlide, goToPreviousSlide, level, setLevel} =
    value;
console.log("slideInsex : ", slideIndex, " level : ", level);
  const closeHome = () => {
    let closeHome = document.getElementById("closeHome");
    closeHome.style.display =
      closeHome.style.display == "block" ? "none" : "block";
  };
  const closeBtn = () => {
    document.getElementById("closeHome").style.display = "none";
  };
  const homeBtn = () => {
    navigate("/level", { state: level});
  };

  const next = () => {
    goToNextSlide();

    if (slideIndex > 1) {
      document.getElementById("nextBut").style.display = "none";
      document.getElementById("levelUp").style.display = "block";
    } else {
      document.getElementById("nextBut").style.display = "block";
      document.getElementById("levelUp").style.display = "none";
    }
  };

  const prev = () => {
    goToPreviousSlide();

    if (slideIndex < 4) {
      document.getElementById("nextBut").style.display = "block";
      document.getElementById("levelUp").style.display = "none";
    } else {
      document.getElementById("nextBut").style.display = "none";
      document.getElementById("levelUp").style.display = "block";
    }
  };

  const levelFun = () => {
    navigate("/level", { state: level});
  };

  return (
    <div className="divContainer">
      <header>
        <img
          onClick={closeHome}
          src={menu}
          alt="menu"
          style={{ color: "black" }}
        />
      </header>

      <main>
        <img src={require(`../assests/slide${slideIndex}.png`)} alt="" />
      </main>

      <footer>
        <button disabled={slideIndex == 1} onClick={prev}>
          Back
        </button>
        <button id="nextBut" disabled={slideIndex == 3} onClick={next}>
          Next
        </button>
        <button id="levelUp" style={{ display: "none" }} onClick={levelFun}>
          Finish
        </button>
      </footer>

      <div id="closeHome" className="sideNav">
        <img id="close" src={close} alt="close" onClick={closeBtn} />
        <img id="home" src={home} alt="home" onClick={homeBtn} />
      </div>
    </div>
  );
}

export default Slide;
