import React from "react";
import Doughnut from "./Doughnut";
import Bar from "./Bar";
import Select from "./Select";
import { Link } from "react-router-dom";

const Dashboard = props => {
  function refreshPage() {
    window.location.reload();
  }

  return(<div>
    <div className="listOfStudents">
      {props.studentInfo.map(student => (
        <h4 key={student.id}>
          <Link to={`/Student/${student.name}`}>{student.name}</Link>
        </h4>))}
    </div>
    <div className="barChart" >
      <Doughnut
        dataSet={props.dashboardDataSet} />
    </div>
    <div >
      <div className="bar">
        <Bar
          chartTitle={props.dashboardChartTitle}
          xLabels={props.dashboardXLabels}
          set1Data={props.dashboardset1Data}
          set2Data={props.dashboardset2Data}
        />
        <div>
          <div className="buttonDiv">
            <h4>Sorteer:</h4>
            <button
              onClick={props.handleSortByDifficult}>
              Moeilijk
            </button>
            <button onClick={props.handleSortByFun}>
              Leuk
            </button>
            <button onClick={props.handleSortDefault} >
              Reset
            </button>
            <h4>Selecteer:</h4>
            <Select
              listData={props.assignmentInfo}
              onChange={props.getAssignment}
              innerHTML={props.chooseAAssignment}
            />
            <label>
              <input
                value="single"
                type="radio"
                name="dashboardSingleMulti"
                onChange={props.handleChange}
                checked={props.dashboardSingleMulti === "single"}
              /> 1 onderdeel</label>
            <label>
              <input
                value="multi"
                type="radio"
                name="dashboardSingleMulti"
                onChange={props.handleChange}
                checked={props.dashboardSingleMulti === "multi"}
              />Meerdere onderdelen</label>
            <button type="button" onClick={refreshPage} className="resetButton">RESET</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );


};

      


export default Dashboard;
