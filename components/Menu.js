import Link from "next/link";

function Menu() {
  return (
    <>
      <Link href="/categories/react">
        <a>React js</a>
      </Link>
      <Link href="/categories/next">
        <a h>Next js</a>
      </Link>
      <Link href="/categories/javascript">
        <a>JavaScript</a>
      </Link>
      <Link href="/categories/css">
        <a>Html/Css</a>
      </Link>
      <Link href="/categories/backend">
        <a>Back-end</a>
      </Link>
      <Link href="/categories/uiandux">
        <a>Ui and Ux</a>
      </Link>
      <Link href="/categories/other">
        <a>Other</a>
      </Link>
    </>
  );
}

export default Menu;
