import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../styles/nav.module.css";
import Link from "next/link";
import Image from "next/image";
import myicon from "../assets/mymenu.png";
import myiconClose from "../assets/closemenu.png";

function Navbar() {
  const [menu, setmenu] = useState(false);
  const navmenu = useRef();

  function iconClicked() {
    setmenu(!menu);
  }
  useEffect(() => {
    if (menu) {
      gsap.to(navmenu.current, 0.8, {
        translateX: "0",
        display: "flex",
        ease: "circ",
      });
    } else {
      gsap.to(navmenu.current, 0.8, {
        translateX: "90vw",
        display: "none",
        ease: "circ",
      });
    }
  }, [menu]);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <a>My Dope Code</a>
        </Link>
      </div>
      <nav className={styles.navigatorBig}>
        <a href="http://localhost:3000/post">React js</a>
        <a href="#">Next js</a>
        <a href="#">JavaScript</a>
        <a href="#">Html/Css</a>
        <a href="#">Back-end</a>
        <a href="#">Ui and Ux</a>
        <a href="#">Other</a>
      </nav>
      <nav ref={navmenu} className={styles.navigator}>
        <a href="http://localhost:3000/post">React js</a>
        <a href="#">Next js</a>
        <a href="#">JavaScript</a>
        <a href="#">Html/Css</a>
        <a href="#">Back-end</a>
        <a href="#">Ui and Ux</a>
        <a href="#">Other</a>
      </nav>
      <div className={styles.iconCont}>
        {!menu ? (
          <Image
            onClick={iconClicked}
            className={styles.icon}
            width={30}
            height={30}
            src={myicon}
            alt="Categories"
          />
        ) : (
          <Image
            onClick={iconClicked}
            className={styles.icon}
            width={30}
            height={30}
            src={myiconClose}
            alt="Categories"
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
