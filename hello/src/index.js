import React from "react";
import  ReactDOM from 'react-dom';
import './index.css'

function Hi() {
  
  return( <div >
  <div className="Curriculum"> Curriculam Vitae</div>    
  <div className="container">
  <div className="First"> Muhammad Naufel Jeelani</div>    
  </div>
    </div>
 );


}
ReactDOM.render(<Hi/>,document.querySelector('#root'));