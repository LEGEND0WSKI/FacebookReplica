import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './Header/Header'
// import Home from './Home/Home'
// import Body from './Body/Body'
// const jsonArray =[{
//     "name":'Vishal',
//     "dp": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
//     "imgUrl":"https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg",
//     "post":"",
//     "likes":"200",
//     "comments":"5"
//   },
//   {"name":'Chandu',
//   "dp": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg",
//   "post":"Bhai ka Style",
//   "imgUrl":"",
//   "likes":"200",
//   "comments":"5000"}
//   ];

//  const lul = jsonArray.map((val)=>{
//       const {name,dp,likes,post,imgUrl,comments} = lul
//         return<Body name={name} dp={dp} />
//     })
// }


class App extends Component{
  constructor(props){
    super(props);
      this.state = {
        cityName:"",
        weather:"",
        visibility:0,
        isLoading: true
      }     
  }


 componentDidMount() {
  fetch ("https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22k")
    .then((response)=> {
       return response.json();
    })
    .then((data)=> {
      const {name,weather,visibility} = data
      
      this.setState({
        cityName:name,
         weather: weather[0].main,
         visibility 
        })
           console.log(data);
      
    })
    .catch((error)=>{
      console.log(error)
    } )
 }
 
 render() {
  const {cityName,weather,visibility}=this.state

    return(
    <div>
      <h1>
        {cityName}
      </h1>
      <h2>
        {weather}
      </h2>
      <h4>
      {visibility}
      </h4>
    </div>
    )
 }
 }

export default App;
