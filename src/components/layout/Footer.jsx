import React from 'react';
import{AiFillInstagram,AiFillYoutube,AiFillGithub} from "react-icons/ai";

function Footer() {
  return (
    <footer>
        <div>
            <h2>Btech Burger Wala</h2>
            <p>We are trying to give you the best taste possible.</p>
            <br/>
             <em>We give attention to genuine feedback</em>
             <strong>All right received @BtechBurgerWala</strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
            <a href='https://youtube.com'><AiFillYoutube/></a>
            <a href='https://instagram.com/sarthak_singh_16'><AiFillInstagram/></a>
            <a href='https://github.com/sarthak145'><AiFillGithub/></a>
            
        </aside>
    </footer>
  )
}

export default Footer