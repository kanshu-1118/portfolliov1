import { useEffect, useRef } from "react";
import style from "./mainSec1.module.scss";

const mainSec1 = () => {
  // const contWrap = document.getElementsByClassName("mainSec1__cont-wrap")
  const contElment = useRef(null)
  // 描画された後に開始
  useEffect(() => {
    console.log(contElment.current);
  },[])
  return (
    <div className={style.mainSec1}>
      <h2 className={style.mainSec1__title}>CONCEPT</h2>
      <div className={style.mainSec1__wrap} ref={contElment}>
      </div>
    </div>
  )
};

export default mainSec1;