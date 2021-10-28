import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../styles/nav.module.css";
import Router from "next/router";
import Menu from "./Menu";
import Link from "next/link";

function Navbar() {
  const [menu, setmenu] = useState(false);
  const navmenu = useRef();

  function iconClicked() {
    setmenu(!menu);
  }
  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      if (menu) {
        setmenu(false);
      }
      return;
    });
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
          <img
            onClick={iconClicked}
            className={styles.icon}
            src="/mymenu.png"
            alt="Menu"
          />
        ) : (
          <img
            onClick={iconClicked}
            className={styles.icon}
            src="/closemenu.png"
            alt="Close Menu"
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
