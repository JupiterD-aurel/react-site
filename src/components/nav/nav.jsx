import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
        <span class="survol">Home</span>
      </a>
      <a href="#about">
        <AiOutlineUser className="icon" />
        <span class="survol">Mes qualifications</span>
      </a>
      <a href="#members">
        <TiGroupOutline className="icon" />
        <span class="survol">A propos</span>
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon" />
        <span class="survol">Contact</span>
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon" />
        <span class="survol">footer</span>
      </a>
    </div>
  );
}

let Icons = document.querySelectorAll('.navigation .icon');
Icons.forEach(icon =>{
    icon.addEventListener('click', () => {
       changeactive();
     icon.classList.add('active-nav');
  });
});

function changeactive(){
      Icons.forEach(icon =>{
        icon.classList.remove('active-nav')
})
}

export default Navbar;

