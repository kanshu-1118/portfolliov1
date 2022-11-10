import Head from "../components/head/head"
import pStyle from "../sass/profile.module.scss"
import ProfileCont from "../components/profileCont/profileCont"

const profile = () => {
    return (
        <>
        <Head />
        <div className={pStyle.wrap}>
            <p className={pStyle.title}>PROFILE</p>
            <div className={pStyle.cateWrap}>
                <ProfileCont />
            </div>
        </div>
        </>
        
    )
}

export default profile