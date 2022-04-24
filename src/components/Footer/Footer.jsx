import { useState } from 'react'
import { NavLink } from "react-router-dom";
import { joinClasses } from "../../helpers";

import classes from "./index.module.scss";



export default function Footer() {

  const [email, setEmail] = useState('');

  console.log(email);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('email', email );
    alert('DONE!');
  };
  
  return (
    <div className={classes.wrap}>
      <div className={classes.subscribe}>
        <div className={classes.subscribe_title}>
          Subscribe to updates and promotions
        </div>
        <form>
        <input name='email' type='email' value={email} onChange={e => setEmail(e.target.value)} required placeholder="Enter your email"/>
        <button onClick={handleFormSubmit}>
          Subscribe
        </button>
        </form>
      </div>
      <div className={classes.footer_items}>
        <div className={classes.item}>Help</div>
        <div className={classes.item}>Address</div>
        <div className={classes.item}>Contacts</div>
      </div>
      <div className={classes.logo}>BeautyLab</div>
    </div>
  );
  }
