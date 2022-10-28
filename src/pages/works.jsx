import { Children, useEffect, useRef, useState } from "react"
import Head from "../components/head/head"
import WorksCont from "../components/worksCont/worksCont"
import Roading from "../components/roading/roading"
import wStyle from "../sass/works.module.scss"
// import Arrays from "../workFile/array"


const works = () => {
    // カテゴリの処理
    const [data, setData] = useState([])
    const [cateBtn, setCateBtn] = useState(true)
    const btnToggle = () => {
        setCateBtn(!cateBtn);
        setCurrentCatagory("All")
    }
    const [currentCategory, setCurrentCatagory] = useState("All")
    if (currentCategory === "All") {
        console.log("render all component");
    } else if (currentCategory === "Design") {
        console.log("render design component");
    } else if (currentCategory === "Engineer") {
        console.log("render engineer component");
    }
    // 配列を取得
    // console.log(ArrayContext._currentValue.map((e,i) => e.lang));
    // // console.log(ArrayContext._currentValue.lang);
    // // console.log(langContext._currentValue);
    
    
    useEffect(()=> {
        console.log("renderAfter");
    },[]);
    
    return (
        <div>
            <Head />
            <div className={wStyle.wrap}>
                <p className={wStyle.title}>WORKS</p>
                <nav>
                    {/* 一個の値が他のところにいくと消える */}
                    <ul  className={wStyle.cateWrap}>
                        <li><button onClick={() => setCurrentCatagory("All")} className={currentCategory === "All" ? wStyle.set : ""}>{cateBtn ? "All" : "Graphic" }</button></li>
                        <li><button onClick={() => setCurrentCatagory("Design")} className={currentCategory === "Design" ? wStyle.set : ""}>{cateBtn ? "Design" : "Logo" }</button></li>
                        <li><button onClick={() => setCurrentCatagory("Engineering")} className={currentCategory === "Engineering" ? wStyle.set : ""}>{cateBtn ? "Engineering" : "Document" }</button></li>
                        <li className={wStyle.other}><button onClick={btnToggle}>{cateBtn ? "Other" : "Web" }</button></li>
                    </ul>
                </nav>
                <WorksCont />
            </div>
        </div>
    )
}

export default works