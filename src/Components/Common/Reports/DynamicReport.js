import React from 'react'
import { Fragment } from 'react';
import CustomForm from './CustomForm'
import template from './DynamicReportTemplate'
import './report.css'
import ItemLookupModal from './ItemLookupModal';
import ReactDOM from 'react-dom';
import itemsLotsResult from './SampleGridResult';
import {Table} from 'react-bootstrap';


class DynamicReport extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:false,
            selectedValue:0
        }
    }

    itemLookupClick=() =>(isShow) =>{
        console.log(this.state.show);
        this.setState({show: isShow})
    }

    render(){
        console.log(this.state.show);
const {title,Fields}=template;
 return (<form>
     <h5>{title}</h5>
<div className="form-row">
    <Fragment>
<CustomForm  
       template={template} 
       itemLookupClick={this.itemLookupClick}
       />
     </Fragment>
     <div className="text-right">
          <button
            className="btn btn-primary"
            type="submit" style={{backgroundColor:"grey",border:0,float: "left",marginTop: "20px"}} 
            onClick={e => {
                e.preventDefault();
                ReactDOM.render(
                  <SubmitResponse />,
                  document.getElementById('renderResultHere')
                );
              }}
            >
            Submit
          </button>
          </div>
         <div style={{paddintTop:"30px"}}>&nbsp;</div>
         <br/>
        </div>
        <div id="renderResultHere" />
        <ItemLookupModal
        show={this.state.show}
      />
   </form>
   
)}
}

const RenderTable = ({ result }) => {
    console.log(result.Columns);
    console.log(result.GridData);

    return (
      <>
        <thead>
          <tr>
          <th>LotNo</th>
          <th>LotRef</th>
          <th>Starting Physical</th>
          <th>Starting On Hold</th>
          <th>Starting Avaialable</th>
          <th>Ending Physical</th>
          <th>Ending On Hold</th>
          <th>Ending Available</th>
          <th>Adjustments</th>
          <th>miscIssues</th>
          <th>shipments</th>
          <th>receipts</th>
          </tr>
        </thead>
        <tbody>
          {result.GridData[0].lots.map((lot, index) => {
            return (
              <tr key={index}>
                {Object.values(lot).map((tableValue, index) => {
                  return <td key={index}>{tableValue}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </>
    );
  };

const SubmitResponse = () => {
    return itemsLotsResult.map((result, index) => {
        console.log(result);
        return (
          <>
            <h5>{result.GridData[0].itemName}</h5>
            <Table key={index} hover responsive>
              <RenderTable result={result} />
            </Table>
            <br />
            <hr />
            <br />
          </>
        );
      });
  };
  



export default DynamicReport;