import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
    ToggleButton
  } from 'react-bootstrap';

class ActivityReport extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
        startDate:new Date(),
        endDate:new Date(),
        selectedValue:0,
        
    }
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  handleStartDateChange(value) {
    console.log(value); // this will be a moment date object
    // now you can put this value into state
    this.setState({startDate: value});
  }

  setState(isShow){

  }
  handleEndDateChange(value) {
    console.log(value); // this will be a moment date object
    // now you can put this value into state
    this.setState({endDate: value});
  }

  render(){
      return <div className="container-fluid border">
      <div className="row">
        <div className=" col-sm-11 col-md-3">
            <div className="row">
           <div className="col-sm-4"><label>Supplier:</label></div>
           <div className="col-sm-7">Supplier Name</div></div>
        </div>
        <div className="col-md-3 col-sm-11">
            <div className="row">
        <div className="col-sm-5"><label>Start Date:</label></div>
           <div className="col-sm-6">  
        <DatePicker
          selected={this.state.startDate}
          onChange={(event) => this.handleStartDateChange(event)}
        />
        </div>
        </div>
        </div>
        <div className="col-md-3 col-sm-9">
            <div className="row">
        <div className="col-sm-5"><label>End Date:</label></div>
           <div className="col-sm-6"><DatePicker
          selected={this.state.endDate}
          onChange={(event) => this.handleEndDateChange(event)}
        /></div></div>
        </div>
      
    </div>
    <div className="row">
    <div className=" col-sm-11 col-md-3">
            <div className="row">
           <div className="col-sm-4"><label>Item:</label></div>
           <div className="col-sm-7"> <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Col sm={6}>
            <Form.Control
              type="text"
              placeholder="all items by default"
              value={this.state.selectedValue}
              disabled
            />
          </Col>
          <Col sm={1}>
            <Button
              size=""
            > ...
            </Button>
          </Col>
        </Form.Group></Form></div></div>
        </div>
        <div className="col-md-3 col-sm-11">
            <div className="row">
        <div className="col-sm-5"><label>Lot:</label></div>
           <div className="col-sm-6"></div></div>
        </div>
        <div className="col-md-3 col-sm-11">
            <div className="row">
        <div className="col-sm-6"><label>Report in Uom:</label></div>
           <div className="col-sm-5"></div></div>
        </div>
        <div className="col-md-3 col-sm-11">
            <div className="row">
        <div className="col-sm-6"><label>Details Level:</label></div>
           <div className="col-sm-5"></div></div>
        </div>
         <div className="col-sm-11" style={{textAlign:"right"}}><input type="Submit" value="Submit"></input></div>   

    </div>
     </div> 
    }
}

export default ActivityReport