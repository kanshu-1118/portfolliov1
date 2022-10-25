import React from 'react'
import wStyle from "../../sass/works.module.scss"
import { ArrayContext,langContext } from '../../workFile/array'

const worksCont = () => {
    // 配列を取得
    console.log(ArrayContext._currentValue.map((e,i) => e.lang));
    // console.log(ArrayContext._currentValue.lang);
    // console.log(langContext._currentValue);
    
    
    return (
        <div className={wStyle.contWrap}>
                    {/* <ul>{data.map((img,i) => <li key={i}><img src={img.download_url} alt="" className={wStyle.liImg}/></li>)}</ul> */}
                    <ul>{ArrayContext._currentValue.map((ab,i,a) => {
                        console.log(a);
                        return(
                        <li key={i}>
                            {/* <p>{ab.name}</p> */}
                            <div className={wStyle.contAb}>
                                <p className={wStyle.AbSubTitle}>{ab.catchCopy}</p>
                                <h3 className={wStyle.AbTitle}>{ab.name}</h3>
                                <div className={wStyle.contCateWrap}>
                                    <div className={wStyle.contCateColor}>
                                        <p>{ab.season}</p>
                                        <p>{ab.form}</p>
                                    </div>
                                    <div className={wStyle.contCateBorder}>
                                        {/* <p>{ab.lang[0]}</p>
                                        <p>{ab.lang[1]}</p> */}
                                        {/* {ab.lang.reduce((zx,index) => {
                                            return <p>{zx}</p>;
                                            })} */}
                                        {/* {ab.lang.map((en,index) => <li key={index}>{en}</li>)} */}
                                    </div>
                                </div>
                                <p className={wStyle.aboutText}>{ab.about}</p>
                                <div className={wStyle.linkBtn}><a href="#">くわしくみる</a></div>
                            </div>
                            <img src={ab.img} alt="" className={wStyle.liImg} />
                        </li>
                        )}
                    )}</ul>
                </div>
    )
}

export default worksCont