import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import MyImage from './MyImage.png';

function Hi() {

  return (<div >
    <div className="Curriculum">
     <img className="img" src={MyImage} alt="images"/>
    </div>
  </div>
  );


}
ReactDOM.render(<Hi />, document.querySelector('#root'));