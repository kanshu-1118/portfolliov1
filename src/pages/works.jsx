import { useEffect, useRef, useState } from "react"
import Head from "../components/head/head"
import Roading from "../components/roading/roading"
import wStyle from "../sass/works.module.scss"
import ArrayList from "../workFile/array"
// import Arrays from "../workFile/array"


const works = () => {
    const [data, setData] = useState([])
    const [cateBtn, setCateBtn] = useState(true)
    const btnToggle = () => {
        setCateBtn(!cateBtn);
        setCurrentCatagory("All")
    }
    console.log(ArrayList._currentValue);
    const [currentCategory, setCurrentCatagory] = useState("All")
    if (currentCategory === "All") {
        console.log("render all component");
    } else if (currentCategory === "Design") {
        console.log("render design component");
    }

    useEffect(()=> {
        fetch('https://picsum.photos/v2/list?limit=10')
        .then(response => response.json())
        .then(d => 
            setData(d)
        );
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
                <div className={wStyle.contWrap}>
                    <ul>{data.map((img,i) => <li key={i}><img src={img.download_url} alt="" className={wStyle.liImg}/></li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default works