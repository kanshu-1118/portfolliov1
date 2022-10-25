import React from 'react'

// const titleName = []
// titleName[0] = 'cosmoCafe'
// titleName[1] = 'NONST'
// titleName[2] = 'GolePort'

// const catchCopy = []
// catchCopy[0] = '非日常をあなたに'
// catchCopy[1] = 'もう溜め込まない'
// catchCopy[2] = 'コンプレックスも個性'

// const time = []
// time[0] = '40時間'
// time[1] = '60時間'
// time[2] = '30時間'

// const day = []
// day[0] = '6ヶ月'
// day[1] = '2週間'
// day[2] = '6ヶ月'
// const tule = []
// tule[0] = 'XD Illustlater '
// tule[1] = '60hour'
// tule[2] = '30hour'
// const lang = []
// lang[0] = '40hour'
// lang[1] = '60hour'
// lang[2] = '30hour'
// const team = []
// team[0] = '40hour'
// team[1] = '60hour'
// team[2] = '30hour'
// const about = []
// about[0] = '40hour'
// about[1] = '60hour'
// about[2] = '30hour'
// const img = []
// img[0] = '40hour'
// img[1] = '60hour'
// img[2] = '30hour'
// const position = []
// position[0] = '40hour'
// position[1] = '60hour'
// position[2] = '30hour'

// const ArrayList1 = []
// titleName.forEach((e,i) => {
//     ArrayList1[i] = [],
//     ArrayList1[i]['name'] = titleName[i],
//     ArrayList1[i]['catchCopy'] = catchCopy[i],
//     ArrayList1[i]['time'] = time[i],
//     ArrayList1[i]['day'] = day[i],
//     ArrayList1[i]['tule'] = tule[i],
//     ArrayList1[i]['lang'] = lang[i],
//     ArrayList1[i]['team'] = team[i],
//     ArrayList1[i]['about'] = about[i]
//     ArrayList1[i]['img'] = img[i]
//     ArrayList1[i]['position'] = position[i]
// });

const tule = [
    'Illustlator','Photoshop','XD','AfterEffect','Figma'
];
const lang = [
    "html","css","javascript","react"
];
const form = [
    '個人制作','チーム制作'
];
const position = [
    'design','engineer'
];
const ArrayList1 = [
    { 
        name : "cosmocafe",
        catchCopy : "宇宙をモチーフにしたカフェのサイト",
        time : '40時間',
        day : '5ヶ月',
        tule : tule.filter((t,i) => i == 0 || i == 2),
        lang : lang.filter((t,i) => t == "html"|| t == "css"),
        form : form[0],
        about : 'Webを学んで初めて企画から実装まで1人で行った制作物です。宇宙をコンセプトにしたカフェのWebサイトです。',
        img : "../image/cosmocafeLogo.png",
        season :"1年生前期",
        position : position,
    },
    { 
        name : "freeme",
        catchCopy : "HackUでの作成",
        time : '10時間',
        day : '1ヶ月',
        tule : "",
        lang : lang.filter((t,i) => t == "html"|| t == "css"),
        form : form[1],
        about : '1年生の夏休みの時期に制作したYahoo!Japan主催の学生ハッカソン"Hack U"にて制作したものです',
        img : "",
        season :"1年生前期",
        position : position[1],
    },
    { 
        name : "NONST",
        catchCopy : "もう溜め込まない",
        time : '24時間',
        day : '2週間',
        tule : 'XD',
        lang : lang.filter((t,i) => t == "html" || t == "css" || t == "javascript"),
        form : form[1],
        about : '1年生の夏休み時期に制作した学内短期制作にて制作したものです、愚痴を聞く人と話す人のマッチングアプリサービスです。',
        img : "",
        season :"1年生前期",
        position : position[1],
    },
    { 
        name : "GolePort",
        catchCopy : "非日常をあなたに",
        time : '40時間',
        day : '5ヶ月',
        tule : 'XD',
        lang : 'html,css',
        form : '個人',
        about : 'こんにちは',
        img : "",
        season :"",
        position : "",
    },
    { 
        name : "うみとこころとぼく",
        catchCopy : "非日常をあなたに",
        time : '40時間',
        day : '5ヶ月',
        tule : 'XD',
        lang : 'html,css',
        form : '個人',
        about : 'こんにちは',
        img : "",
        season :"",
        position : "",
    },
    { 
        name : "fagory",
        catchCopy : "非日常をあなたに",
        time : '40時間',
        day : '5ヶ月',
        tule : 'XD',
        lang : 'html,css',
        form : '個人',
        about : 'こんにちは',
        img : "",
        season :"",
        position : "",
    },
    { 
        name : "まつりる",
        catchCopy : "非日常をあなたに",
        time : '40時間',
        day : '5ヶ月',
        tule : 'XD',
        lang : 'html,css',
        form : '個人',
        about : 'こんにちは',
        img : "",
        season :"",
        position : "",
    },
    { 
        name : "おさけたて",
        catchCopy : "非日常をあなたに",
        time : '40時間',
        day : '5ヶ月',
        tule : 'XD',
        lang : 'html,css',
        form : '個人',
        about : 'こんにちは',
        img : "",
        season :"",
        position : "",
    },
];


const ArrayContext = React.createContext(ArrayList1);
const langContext = React.createContext(lang);

export {ArrayContext,langContext};