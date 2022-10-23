import React from 'react'

const titleName = []
titleName[0] = 'cosmoCafe'
titleName[1] = 'NONST'
titleName[2] = 'GolePort'

const catchCopy = []
catchCopy[0] = '40hour'
catchCopy[1] = '60hour'
catchCopy[2] = '30hour'

const time = []
time[0] = '40hour'
time[1] = '60hour'
time[2] = '30hour'

const day = []
day[0] = '40hour'
day[1] = '60hour'
day[2] = '30hour'
const tule = []
tule[0] = '40hour'
tule[1] = '60hour'
tule[2] = '30hour'
const lang = []
lang[0] = '40hour'
lang[1] = '60hour'
lang[2] = '30hour'
const team = []
team[0] = '40hour'
team[1] = '60hour'
team[2] = '30hour'
const about = []
about[0] = '40hour'
about[1] = '60hour'
about[2] = '30hour'

const ArrayList1 = []
titleName.forEach((e,i) => {
    ArrayList1[i] = [],
    ArrayList1[i]['name'] = titleName[i],
    ArrayList1[i]['catchCopy'] = catchCopy[i],
    ArrayList1[i]['time'] = time[i],
    ArrayList1[i]['day'] = day[i],
    ArrayList1[i]['tule'] = tule[i],
    ArrayList1[i]['lang'] = lang[i],
    ArrayList1[i]['team'] = team[i],
    ArrayList1[i]['about'] = about[i]
});
// let Arraylist1 = [];
// Arraylist1[0] = ArrayList;


const ArrayContext = React.createContext(ArrayList1);

export default ArrayContext