import React from 'react'

const ArrayList = {
    'apple' : 'red',
    'banana': 'yellow',
    'cherry': 'pink'
};
let Arraylist1 = [];
Arraylist1[0] = ArrayList;


const ArrayContext = React.createContext(Arraylist1);

export default ArrayContext