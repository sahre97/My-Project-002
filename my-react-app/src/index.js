import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import  Box  from './shop.js';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// <------------------ MY CODE ----------------->

// ReactDOM.render(<Box/>,document.getElementById('root'));
// function Hello (props){

//   return <h1>Hello Worldgfhfhgfhgfhygf!</h1>

  
// }

// ReactDOM.render(<Hello/>,document.getElementById('root'));

// // export default Hello;

// // ------------

// // const myfirstelement = <h1>where are u dude?</h1>
// const myfirstelement = (
//                          <>
//                          <p>where are u dude?</p>

//                          <p>hjgjg</p>
//                          </>
//                          );
// ReactDOM.render(myfirstelement,document.getElementById('root'));




// const myelement = <input type="text"/>;
// ReactDOM.render(myelement,document.getElementById('root'));
// // -----------

// class Car{
//   constructor(name){
//     this.brand=name;
//   }
//   present(){
//     return 'I have a'+this.brand ;
//   }
// }
// const mycar =new Car("Ford");


// ReactDOM.render(mycar.present(),document.getElementById('root'));

// --------------------
// const vehicles =['apple','orange','banana'];
// const mylist = vehicles.map (item => <p>{item}</p>);
// ReactDOM.render(mylist,document.getElementById('root'));

// --------------------
// const message =() =>{
//  const name ="sarah";
//  const age =34;
//  return name+'is'+age+'years old';
// };
// ReactDOM.render(message(),document.getElementById('root'));
// export default message;

// -------------------
// const x=5;
// const text = <h1>{(x)<10?"Hello":"GoodBye"}</h1>;
// ReactDOM.render(text,document.getElementById('root'));

// ------------Props --------------------------
function Car(props){
  // return <h2>I am a {props.color} Car!</h2>
}
// ReactDOM.render(<Car color ="red"/>,document.getElementById('root'));



// const Header = () => {
//   return (
//     <>
//       <h1 style={{color: "red"}}>Hello Style!</h1>
//       <p>Add a little style!</p>
//     </>
//   );
// }

// ReactDOM.render(<Header />, document.getElementById('root'));



const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

ReactDOM.render(<Header />, document.getElementById('root'));