import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../styles/nav.module.css";
import Menu from "./Menu";
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
          <a>
            My<span>Dope</span>Code
          </a>
        </Link>
      </div>
      <nav className={styles.navigatorBig}>
        <Menu />
      </nav>
      <nav ref={navmenu} className={styles.navigator}>
        <Menu />
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
