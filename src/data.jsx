import cafe1 from './assets/cafe1.webp';
import cafe2 from './assets/cafe2.webp';
import { faWifi, faSmoking, faSmokingBan, faHome, faCalendarDay } from '@fortawesome/free-solid-svg-icons'

const data = [
    {
        _id : 1,
        img : cafe1,
        cafeName : "Warung Kopi Pak Itam",
        address:"Jl Garuda Gg Pelita No 15",
        rating : 5,
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis",
        facilities: [
            {icon : faWifi, text:"Free Wifi"},
            {icon : faSmokingBan, text:"Non Smoking"},
            {icon : faHome, text:"Mushala +- 10m"},
        ]        
    },
    {
        _id : 2,
        img : cafe2,
        cafeName : "Eskosu",
        address:"Jl Garuda Gg Pelita No 15",
        rating : 5,
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis",
        facilities: [
            {icon : faWifi, text:"Free Wifi"},
            {icon : faSmoking, text:"Smoking Area"},
            {icon : faHome, text:"Mushala"},
        ]    
    },
    {
        _id : 3,
        img : cafe1,
        cafeName : "Point Cafe",
        address:"Jl Garuda Gg Pelita No 15",
        rating : 5,
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis",
        facilities: [
            {icon : faWifi, text:"Free Wifi"},
            {icon : faSmoking, text:"Smoking Area"},
            {icon : faHome, text:"Mushala"},
        ]    
    },
    {
        _id : 4,
        img : cafe2,
        cafeName : "Starbuck",
        address:"Jl Garuda Gg Pelita No 15",
        rating : 5,
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis",
        facilities: [
            {icon : faWifi, text:"Free Wifi"},
            {icon : faSmoking, text:"Smoking Area"},
            {icon : faHome, text:"Mushala"},
        ]    
    },
    {
        _id : 5,
        img : cafe2,
        cafeName : "Janji Jiwa",
        address:"Jl Garuda Gg Pelita No 15",
        rating : 5,
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis",
        facilities: [
            {icon : faWifi, text:"Free Wifi"},
            {icon : faSmoking, text:"Smoking Area"},
            {icon : faHome, text:"Mushala"},
        ]    
    },
]

export default data;