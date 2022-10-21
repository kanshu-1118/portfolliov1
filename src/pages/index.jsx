import iStyle from "../sass/index.module.scss"
import Head from "../components/head/head"
import FirstView from "../components/firstView/firstView"
import MainSec1 from "../components/mainSec1/mainSec1"
import MainSec2 from "../components/mainSec2/mainSec2"

const index = () => {
// ここにjs
    return (
        <>
            <Head />
            <FirstView />
            <MainSec1 />
            <MainSec2 />
        </>
    )
};

export default index
