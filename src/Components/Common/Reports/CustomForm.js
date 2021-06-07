import { KeyboardReturn } from '@material-ui/icons';
import React from 'react'
import {
    Button,
    Modal,
    Form,
    Row,
    Col,
    Container,
    InputGroup,
    FormControl,
    ListGroup,
    ButtonGroup,
    ToggleButton,
    FormGroup,
  } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

  const CustomForm=(props)=>{
    let { title, Fields } = props.template
        return (
            <>
            {renderFields(Fields,props)}
            </>
        );

    }

 const renderOptions=(options)=>{
    var arr =Object.values(options);
console.log(arr[0].length);
var data=arr[0],i=0;

let dataList = data.length > 0
		&& data.map((item, i) => {
		return (
			<option key={i} value={item.id}>{item.name}</option>
		)
	}, this);
return dataList;
}
const renderFields = (fields,props) => {
    return fields.map(field => {
        let { type, title, name, required,validation,dafaultDate,options} = field;
        
switch(type){
  case 'text':
return (
  <div className="form-group col-sm-2">
     <label htmlFor={name} className="label">
              {title}
              <span style={required?{color:'red'}:{}}>*</span> 
             </label>
             <input             
              type='text'
              name={name}                        
              className="dynamictext"
              />                             
                         
          </div>
        
);
case 'select':
return (
  <div className="form-group col-sm-2">
    <label htmlFor={name} className="label">{title}<span style={required?{color:'red'}:{}}>*</span></label>
    <select className="dynamictext" >
        {renderOptions({options})}
    </select>
     </div>
);
case "datepicker":
    return(<div className="form-group col-sm-2">
<label htmlFor={name} className="label">{title}<span style={required?{color:'red'}:{}}>*</span></label>
<DatePicker selected={dafaultDate}/>
</div>);
case "lookup":
    return(<div className="col-sm-4" style={{paddingLeft:"0.9em"}}>
     
    <label htmlFor={name} className="label">{title}<span style={required?{color:'red'}:{}}>*</span></label>
       <div style={{display:"inline-block"}}>
    <input
        type="text"
        placeholder="all"
        name={name}                        
         className="dynamictext"
     />
    <button
            className="btn btn-primary"
            type="submit" style={{backgroundColor:"grey",border:0,alignContent:"center",height:"25px"}}  
            onClick={()=>props.itemLookupClick(true)}>
            ...
          </button>
    </div>
  </div>);

  default:
   return (
    <div>
      <span>Invalid Field</span>
           </div>
);
   }});



}


export default CustomForm