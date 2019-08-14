import React from "react";

const FormErrors = ({formErrors}) =>
  <div style={{ background: `red`, color: `white`, fontSize: 10, position: `fixed`, bottom: 0, left: 0, width: `100%`, textAlign: `center`}}>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p style={{padding: 10}} key={i}>{formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>

export default FormErrors