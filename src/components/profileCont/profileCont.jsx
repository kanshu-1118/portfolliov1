import React from 'react'
import style from './profileCont.module.scss'
import { SkillArrayList } from '../../workFile/array'

const profileCont = () => {
    console.log(SkillArrayList[0].age);
    return (
        <div className={style.wrap}>
            <div className={style.name}>
                <h2>下河寛宗</h2>
                <p>
                    ECCコンピュータ専門学校に通う学生です。<br />
                    普通科の公立高校に進学中、自分の進む方向が違うことに気づき<br />
                    Webデザインの業界に進むことを決意。<br />
                    周りを引っ張っていけるような人になるために日々奮闘を重ねています。
                </p>
            </div>
            <div className={style.skill}>
                <h3>SKILL</h3>
                <div className={style.box}>
                    <div className={style.box1}>
                        <p>年齢</p>
                        <p>出身</p>
                        <p>好きなもの</p>
                        <p>使える言語</p>
                        <p>使えるツール</p>
                    </div>
                    <div className={style.box1}>
                        <p>{SkillArrayList[0].age}</p>
                        <p>{SkillArrayList[0].from}</p>
                        <p>{SkillArrayList[0].like}</p>
                        <p>{SkillArrayList[0].lang}</p>
                        {SkillArrayList.map((e,i) => {
                            return(
                                <p>{e.turl}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={style.thing}>
                <h3>THING</h3>
                <p>
                    「自分の思い描けるものを作れる人になりたい」と思い
                    デザインとエンジニアリング両方を学んでいます。<br />
                    将来的にはディレクションもキャリアとして入れているので<br />
                    チーム制作では必ずリーダー役に徹しています。<br />
                </p>
            </div>
        </div>
    )
}

export default profileCont