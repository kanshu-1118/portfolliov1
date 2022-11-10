import React from 'react'
import wStyle from "../../sass/works.module.scss"
import { ArrayList1 } from '../../workFile/array'

const worksCont = () => {
    // 配列を取得
    // console.log(ArrayContext._currentValue.map((e,i) => e.lang));
    // console.log(ArrayContext._currentValue.lang);
    // console.log(langContext._currentValue);

    const test =[{index:"engineer",heading:"使用言語"},{index:"design",heading:"担当"}];
        
    
    return (
        <div className={wStyle.contWrap}>
            {/* <ul>{data.map((img,i) => <li key={i}><img src={img.download_url} alt="" className={wStyle.liImg}/></li>)}</ul> */}
            <ul>{ArrayList1.map((ab,i,a) => {
                console.log(ab.tule);
                return(
                <li key={i}>
                    <div className={wStyle.contAb}>
                        <p className={wStyle.AbSubTitle}>{ab.catchCopy}</p>
                        <h3 className={wStyle.AbTitle}>{ab.name}</h3>
                        <div className={wStyle.contCateWrap}>
                            <div className={wStyle.contCateColor}>
                                <p>{ab.season}</p>
                                <p>{ab.form}</p>
                            </div>
                            <div className={wStyle.contCateLang}>
                                {ab.position.map((data,index) => (
                                    <div key={test[data].index}>
                                        <h5>{test[data].heading}</h5>
                                        <p>{data === 0  ? (ab.lang.map((d) => d )) : (ab.tule.map((d) => d))}</p>
                                    </div>
                                ))}
                                {/* {(() => {
                                    if (ab.position.length == 2) {
                                        return(
                                            <div><h5>使用言語</h5><p>{ab.lang.map((d,index) => d )}</p></div>
                                        )
                                    }else if (ab.position == 'design') {
                                        return(
                                            <div><h5>担当</h5><p>{ab.tule.map((d,index) => d )}</p></div>
                                        )
                                    }else if (ab.position == 'engineer'){
                                        return(
                                            <div><h5>使用言語</h5><p>{ab.lang.map((d,index) => d )}</p></div>
                                        )
                                    }
                                })()} */}
                            </div>
                        </div>
                        <p className={wStyle.aboutText}>{ab.about}</p>
                        <div className={wStyle.linkBtn}><a href="#">くわしくみる</a></div>
                    </div>
                    <img src={ab.img} alt="" className={wStyle.liImg} />
                </li>
                )
                // if (ab.lang.length == 1) {
                //     return(
                //     <li key={i}>
                //         {/* <p>{ab.name}</p> */}
                //         <div className={wStyle.contAb}>
                //             <p className={wStyle.AbSubTitle}>{ab.catchCopy}</p>
                //             <h3 className={wStyle.AbTitle}>{ab.name}</h3>
                //             <div className={wStyle.contCateWrap}>
                //                 <div className={wStyle.contCateColor}>
                //                     <p>{ab.season}</p>
                //                     <p>{ab.form}</p>
                //                 </div>
                //                 <div className={wStyle.contCateBorder}>
                //                     <p>{ab.lang[0]}</p>
                //                 </div>
                //             </div>
                //             <p className={wStyle.aboutText}>{ab.about}</p>
                //             <div className={wStyle.linkBtn}><a href="#">くわしくみる</a></div>
                //         </div>
                //         <img src={ab.img} alt="" className={wStyle.liImg} />
                //     </li>
                // )}else if (ab.lang.length == 2) {
                //     return(
                //     <li key={i}>
                //         {/* <p>{ab.name}</p> */}
                //         <div className={wStyle.contAb}>
                //             <p className={wStyle.AbSubTitle}>{ab.catchCopy}</p>
                //             <h3 className={wStyle.AbTitle}>{ab.name}</h3>
                //             <div className={wStyle.contCateWrap}>
                //                 <div className={wStyle.contCateColor}>
                //                     <p>{ab.season}</p>
                //                     <p>{ab.form}</p>
                //                 </div>
                //                 <div className={wStyle.contCateBorder}>
                //                     <p>{ab.lang[0]}</p>
                //                     <p>{ab.lang[1]}</p>
                //                 </div>
                //             </div>
                //             <p className={wStyle.aboutText}>{ab.about}</p>
                //             <div className={wStyle.linkBtn}><a href="#">くわしくみる</a></div>
                //         </div>
                //         <img src={ab.img} alt="" className={wStyle.liImg} />
                //     </li>
                // )}else if( ab.lang.length == 3){
                //     return(
                //         <li key={i}>
                //             {/* <p>{ab.name}</p> */}
                //             <div className={wStyle.contAb}>
                //                 <p className={wStyle.AbSubTitle}>{ab.catchCopy}</p>
                //                 <h3 className={wStyle.AbTitle}>{ab.name}</h3>
                //                 <div className={wStyle.contCateWrap}>
                //                     <div className={wStyle.contCateColor}>
                //                         <p>{ab.season}</p>
                //                         <p>{ab.form}</p>
                //                     </div>
                //                     <div className={wStyle.contCateBorder}>
                //                         <p>{ab.lang[0]}</p>
                //                         <p>{ab.lang[1]}</p>
                //                         <p>{ab.lang[2]}</p>
                //                     </div>
                //                 </div>
                //                 <p className={wStyle.aboutText}>{ab.about}</p>
                //                 <div className={wStyle.linkBtn}><a href="#">くわしくみる</a></div>
                //             </div>
                //             <img src={ab.img} alt="" className={wStyle.liImg} />
                //         </li>
                // )}else if( ab.lang.length == 0 ){
                //     // console.log(ab.lang);
                //     return(
                //         <li key={i}>
                //             {/* <p>{ab.name}</p> */}
                //             <div className={wStyle.contAb}>
                //                 <p className={wStyle.AbSubTitle}>{ab.catchCopy}</p>
                //                 <h3 className={wStyle.AbTitle}>{ab.name}</h3>
                //                 <div className={wStyle.contCateWrap}>
                //                     <div className={wStyle.contCateColor}>
                //                         <p>{ab.season}</p>
                //                         <p>{ab.form}</p>
                //                     </div>
                //                     <div className={wStyle.contCateBorder}>
                //                         <p>{ab.lang}</p>
                //                     </div>
                //                 </div>
                //                 <p className={wStyle.aboutText}>{ab.about}</p>
                //                 <div className={wStyle.linkBtn}><a href="#">くわしくみる</a></div>
                //             </div>
                //             <img src={ab.img} alt="" className={wStyle.liImg} />
                //         </li>
                // )}
                }
            )}</ul>
        </div>
    )
}

export default worksCont