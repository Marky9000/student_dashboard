import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Students from "./Students";
import Nav from "./Nav";
import Footer from "./Footer"
import {
  students,
  diverseAssignmentNames,
  assignmentInfo,
  studentInfo,
  makeStudentSet,
  totalAverageFunAndDifficult,
  getAveragesPerStudent,
  getAveragesPerAssignment,
  getAveragesAllAssignmentsArray,
  sortByDifficult,
  sortByFun,
  getDataSets,
} from "../data/Utilities.js";

const averagesPerAssignmentArray = getAveragesAllAssignmentsArray();
const [xLabels, difficultData, funData] = getDataSets(
  averagesPerAssignmentArray
);
const [averageData] = totalAverageFunAndDifficult();

class Container extends Component {
  constructor(props) {
    super();
    this.state = {
      dashboardChartTitle: "Gemiddelde per onderdeel van alle studenten",
      averagesPerAssignmentArray: averagesPerAssignmentArray,
      dashboardXLabels: xLabels,
      dashboardset1Data: difficultData,
      dashboardset2Data: funData,
      dashboardDataSet: averageData,
      dashboardSortedByDifficult: false,
      dashboardSortedByFun: false,
      dashboardSingleMulti: "single",
      studentDataSetBar: [],
      studentSortedByDifficult: false,
      studentSortedByFun: false,
      studentBarTitle: "",
      studentXLabels: diverseAssignmentNames,
      studentSet: students,
      studentset1Data: [],
      studentset2Data: [],
      studentName: "",
      studentDataSet: [1, 1],
      studentSingleMulti: "single",
      chooseAAssignment: "Kies een Opdracht",
      displayCheckBoxes: true,
    };
  }

  handleChange=(event)=> {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  getStudent=(studentName)=> {
    this.setState(prevState => {
      const chosenStudent = studentName;
      const [newStudentName, newDataSet] = getAveragesPerStudent(
        students,
        chosenStudent
      );
      const studentSet = makeStudentSet(chosenStudent);
      const [newXLAbels, newdifficultData, newfunData] = getDataSets(
        studentSet
      );

      const newState = {
        ...prevState,
        studentDataSetBar: studentSet,
        studentSortedByDifficult: false,
        studentSortedByFun: false,
        studentXLabels: newXLAbels,
        studentBarTitle: `Moeilijk vs Leuk voor ${newStudentName} per onderdeel`,
        studentName: chosenStudent,
        studentDataSet: newDataSet,
        studentset1Data: newdifficultData,
        studentset2Data: newfunData,
        displayCheckBoxes: true,
      };
      return newState;
    });
  }
  getAssignmentStudent=(event)=> {
    const chosenAssignment = event.target.value;
    this.state.studentSingleMulti === "single"
      ? this.getAssignmentStudentSingle(chosenAssignment)
      : this.state.studentXLabels.length > 7
      ? this.getAssignmentStudentSingle(chosenAssignment)
      : this.getAssignmentStudentMulti(chosenAssignment);
  }
 
  getAssignmentStudentSingle=(chosenAssignment)=> {
    chosenAssignment === "Kies een Opdracht"
      ? alert("KIES EEN OPDRACHT")
      : this.setState(prevState => {
          const newfunData = [],
            newdifficultData = [],
            newXLabels = [];
          const studentSet = this.state.studentDataSetBar;
          studentSet.forEach(item => {
            if (item.Opdracht === chosenAssignment) {
              newXLabels.push(item.Opdracht);
              newdifficultData.push(item.Moeilijk);
              newfunData.push(item.Leuk);
            }
          });
          const newState = {
            ...prevState,
            studentSortedByDifficult: false,
            studentSortedByFun: false,
            studentXLabels: newXLabels,
            studentBarTitle: `Moeilijk vs Leuk voor ${this.state.studentName} bij onderdeel ${chosenAssignment}`,
            studentset1Data: newdifficultData,
            studentset2Data: newfunData,
            displayCheckBoxes: false,
          };
          return newState;
        });
  }


  getAssignmentStudentMulti=(chosenAssignment)=> {
    this.state.studentXLabels.includes(chosenAssignment)
      ? alert(`ONDERDEEL ${chosenAssignment} IS AL GEKOZEN.`)
      : chosenAssignment === "Kies een onderdeel"
      ? alert(`KIES EEN ONDERDEEL`)
      : this.setState(prevState => {
          const newfunData = [...prevState.studentset2Data],
            newdifficultData = [...prevState.studentset1Data],
            newXLabels = [...prevState.studentXLabels];
          const studentSet = makeStudentSet(this.state.studentName);
          studentSet.forEach(item => {
            if (item.Opdracht === chosenAssignment) {
              newXLabels.push(item.Opdracht);
              newdifficultData.push(item.Moeilijk);
              newfunData.push(item.Leuk);
            }
          });
          const newState = {
            ...prevState,
            studentSortedByDifficult: false,
            studentSortedByFun: false,
            studentXLabels: newXLabels,
            studentBarTitle: `Moeilijk vs Leuk voor ${this.state.studentName} bij de gekozen onderdelen`,
            studentset1Data: newdifficultData,
            studentset2Data: newfunData,
            displayCheckBoxes: false,
          };
          return newState;
        });
  }

  getAssignment=(event)=> {
    const chosenAssignment = event.target.value;
    this.state.dashboardSingleMulti === "single"
      ? this.getAssignmentSingle(chosenAssignment)
      : this.state.dashboardXLabels.length > 7
      ? this.getAssignmentSingle(chosenAssignment)
      : this.getAssignmentMulti(chosenAssignment);
  }

  getAssignmentSingle=(chosenAssignment)=> {
    chosenAssignment === "Kies een onderdeel"
      ? alert("KIES EEN ONDERDEEL")
      : this.setState(prevState => {
          const newfunData = [],
            newdifficultData = [],
            newXLabels = [];
          const averagesPerAssignment = getAveragesPerAssignment(
            chosenAssignment
          );
          newXLabels.push(averagesPerAssignment.Opdracht);
          newdifficultData.push(averagesPerAssignment.Moeilijk);
          newfunData.push(averagesPerAssignment.Leuk);
          const newState = {
            ...prevState,
            dashboardChartTitle: `Gemiddelde van alle studenten voor onderdeel ${chosenAssignment}`,
            dashboardXLabels: newXLabels,
            dashboardset1Data: newdifficultData,
            dashboardset2Data: newfunData,
            displayCheckBoxes: false,
          };
          return newState;
        });
  }

  getAssignmentMulti=(chosenAssignment)=>{
    this.state.dashboardXLabels.includes(chosenAssignment)
      ? alert(`OPDRACHT ${chosenAssignment} IS AL GEKOZEN.`)
      : chosenAssignment === "Kies een onderdeel"
      ? alert(`KIES EEN OPDRACHT`)
      : this.setState(prevState => {
          const newXLabels = [...prevState.dashboardXLabels],
            newdifficultData = [...prevState.dashboardDataSet1Data],
            newfunData = [...prevState.dashboardDataSet2Data];
          const averagesPerAssignment = getAveragesPerAssignment(
            chosenAssignment
          );
          newXLabels.push(averagesPerAssignment.Opdracht);
          newdifficultData.push(averagesPerAssignment.Moeilijk);
          newfunData.push(averagesPerAssignment.Leuk);
          const newState = {
            ...prevState,
            dashboardChartTitle: `Gemiddelde van alle studenten voor de gekozen onderdelen`,
            dashboardXLabels: newXLabels,
            dashboardset1Data: newdifficultData,
            dashboardset2Data: newfunData,
            displayCheckBoxes: false,
          };
          return newState;
        });
  }

  studentHandleSortByDifficult=()=> {
    this.state.studentName === ""
      ? alert(`KIES EERST EEN STUDENT`)
      : this.setState(prevState => {
          const studentSet = this.state.studentDataSetBar;
          const studentSetSorted = sortByDifficult(studentSet);
          const [newXLabels, newdifficultData, newfunData] = getDataSets(
            studentSetSorted
          );
          const newState = {
            ...prevState,
            studentSortedByDifficult: true,
            studentSortedByFun: false,
            studentXLabels: newXLabels,
            studentBarTitle: `Opdrachten gesorteerd op 'Moeilijk' voor ${this.state.studentName}.`,
            studentset1Data: newdifficultData,
            studentset2Data: newfunData,
            studentDifficultChecked: true,
            studentFunChecked: true,
            displayCheckBoxes: true,
          };
          return newState;
        });
  }

  studentHandleSortByFun=()=> {
      this.setState(prevState => {
          const studentSet = this.state.studentDataSetBar;
          const studentSetSorted = sortByFun(studentSet);
          const [newXLabels, newdifficultData, newfunData] = getDataSets(
            studentSetSorted
          );
          const newState = {
            ...prevState,
            studentSortedByDifficult: false,
            studentSortedByFun: true,
            studentXLabels: newXLabels,
            studentBarTitle: `Opdrachten gesorteerd op 'Leuk' voor ${this.state.studentName}.`,
            studentset1Data: newdifficultData,
            studentset2Data: newfunData,
            studentDifficultChecked: true,
            studentFunChecked: true,
            displayCheckBoxes: true,
          };
          return newState;
        });
  }
 
  studentHandleSortDefault=()=> {
      this.setState(prevState => {
          const studentSet = makeStudentSet(this.state.studentName);
          const [newXLabels, newdifficultData, newfunData] = getDataSets(
            studentSet
          );

          const newState = {
            ...prevState,
            studentSortedByDifficult: false,
            studentSortedByFun: false,
            studentXLabels: newXLabels,
            studentBarTitle: `Moeilijk vs Leuk voor ${this.state.studentName} per onderdeel`,
            studentset1Data: newdifficultData,
            studentset2Data: newfunData,
            studentDifficultChecked: true,
            studentFunChecked: true,
            displayCheckBoxes: true,
          };
          return newState;
        });
  }

  handleSortByDifficult=()=> {
    this.setState(prevState => {
      const averagesPerAssignmentArray = this.state.averagesPerAssignmentArray;
      const averagesPerAssignmentArraySorted = sortByDifficult(
        averagesPerAssignmentArray
      );
      const [xLabels, difficultData, funData] = getDataSets(
        averagesPerAssignmentArraySorted
      );
      const newState = {
        ...prevState,
        dashboardSortedByDifficult: true,
        dashboardSortedByFun: false,
        dashboardChartTitle: "Gesorteerd op 'Moeilijk' voor alle studenten",
        dashboardXLabels: xLabels,
        dashboardset1Data: difficultData,
        dashboardset2Data: funData,
        displayCheckBoxes: true,
        dashboardDifficultChecked: true,
        dashboardFunChecked: true,
      };
      return newState;
    });
  }

  handleSortByFun=()=> {
    this.setState(prevState => {
      const averagesPerAssignmentArray = this.state.averagesPerAssignmentArray;
      const averagesPerAssignmentArraySorted = sortByFun(
        averagesPerAssignmentArray
      );
      const [xLabels, difficultData, funData] = getDataSets(
        averagesPerAssignmentArraySorted
      );
      const newState = {
        ...prevState,
       dashboardSortedByDifficult: false,
       dashboardSortedByFun: true,
        dashboardChartTitle: "Gesorteerd op 'Leuk' voor alle studenten",
       dashboardXLabels: xLabels,
       dashboardset1Data: difficultData,
       dashboardset2Data: funData,
        displayCheckBoxes: true,
       dashboardDifficultChecked: true,
       dashboardFunChecked: true,
      };
      return newState;
    });
  }

  handleSortDefault= ()=> {
    this.setState(prevState => {
      const averagesPerAssignmentArray = getAveragesAllAssignmentsArray();
      const [xLabels, difficultData, funData] = getDataSets(
        averagesPerAssignmentArray
      );
      const newState = {
        ...prevState,
        dashboardSortedByDifficult: false,
        dashboardSortedByFun: false,
        dashboardChartTitle: "Gemiddelde per Opdracht van alle Studenten",
        dashboardXLabels: xLabels,
        dashboardset1Data: difficultData,
        dashboardset2Data: funData,
        displayCheckBoxes: true,
        dashboardDifficultChecked: true,
        dashboardFunChecked: true,
      };
      return newState;
    });
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route
                path="/"
                exact
                render={props => (
                  <Dashboard
                    assignmentInfo={assignmentInfo}
                    studentInfo={studentInfo}
                    chooseAAssignment={this.state.chooseAAssignment}
                    dashboardChartTitle={this.state.dashboardChartTitle}
                    dashboardXLabels={this.state.dashboardXLabels}
                    dashboardset1Data={this.state.dashboardset1Data}
                    dashboardset2Data={this.state.dashboardset2Data}
                    studentName={this.state.studentName}
                    dashboardDataSet={this.state.dashboardDataSet}               
                    displayCheckBoxes={this.state.displayCheckBoxes}
                    dashboardSingleMulti={this.state.dashboardSingleMulti}
                    handleChange={this.handleChange}
                    handleSortByDifficult={this.handleSortByDifficult}
                    handleSortByDifficult={this.handleSortByDifficult}
                    handleSortByFun={this.handleSortByFun}
                    handleSortDefault={this.handleSortDefault}
                    getAssignment={this.getAssignment}
                    getStudentRoute={this.getStudentRoute}
                  />
                )}
              />
              <Route
                path="/Student/:id"
                render={props => (
                  <Students
                    studentBarTitle={this.state.studentBarTitle}
                    studentInfo={studentInfo}
                    assignmentInfo={assignmentInfo}
                    chooseAAssignment={this.state.chooseAAssignment}
                    studentName={this.state.studentName}
                    studentDataSet={this.state.studentDataSet}
                    studentXLabels={this.state.studentXLabels}
                    studentset1Data={this.state.studentset1Data}
                    studentset2Data={this.state.studentset2Data}
                    displayCheckBoxes={this.state.displayCheckBoxes}
                    studentSingleMulti={this.state.studentSingleMulti}
                    handleChange={this.handleChange}
                    getStudent={this.getStudent}
                    studentHandleSortByDifficult={this.studentHandleSortByDifficult}
                    studentHandleSortByFun={this.studentHandleSortByFun}
                    studentHandleSortDefault={this.studentHandleSortDefault}
                    getAssignmentStudent={this.getAssignmentStudent}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default Container;
