import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "./Select";
import Doughnut from "./Doughnut";
import Bar from "./Bar";
import FotoStudent from "./FotoStudent";
import Personas from "./Personas";

const Students = props => {

  const string = window.location.pathname;
  const array = string.split("");
  array.splice(0, 9);
  const studentName = array.join("");
  const getStudent = props.getStudent;

  useEffect(()=>{
    getStudent(studentName)
  },
    []); // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div >
      <div>
        <Doughnut dataSet={props.studentDataSet} />
        <h3>{studentName}</h3>
        <FotoStudent studentName={studentName} />
        <Personas studentName={studentName} />
        <div className="bar">
          <Bar
            chartTitle={props.studentBarTitle}
            xLabels={props.studentXLabels}
            set1Data={props.studentset1Data}
            set2Data={props.studentset2Data}
          />
          <div className="buttonDiv">
            <h4>Sorteer:</h4>
            <button
              onClick={props.studentHandleSortByDifficult}>
              Moeilijk
            </button>
            <button onClick={props.studentHandleSortByFun}>
              Leuk
            </button>
            <button onClick={props.studentHandleSortDefault}>
              Standaard
            </button>
            <h4>Selecteer:</h4>
            <Select
              listData={props.assignmentInfo}
              onChange={props.getAssignmentStudent}
              innerHTML={props.chooseAAssignment}
            />
            <label>
              <input
                value="single"
                type="radio"
                name="studentSingleMulti"
                onChange={props.handleChange}
                checked={props.studentSingleMulti === "single"}
              /> 1 onderdeel
            </label>
            <label>
              <input
                value="multi"

                type="radio"
                name="studentSingleMulti"
                onChange={props.handleChange}
                checked={props.studentSingleMulti === "multi"}
              /> meerdere onderdelen
            </label>
            <Link to="/">
              <button className="resetButton">
                RESET
              </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Students;
