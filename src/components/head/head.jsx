import style from "./head.module.scss";



const head = (props) => {
  return (
    <header>
      <div className={style.header}>
        <ul className={style.header__nav}>
          <li><a href="/">TOP</a></li>
          <li><a href="/works">WORKS</a></li>
          <li><a href="/profile">PROFILE</a></li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>
      </div>
    </header>
  )

}

export default head
