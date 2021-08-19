
import Evelyn from './pics/evelyn.png'
import Aranka from './pics/aranka.png'
import Floris from './pics/floris.png'
import Hector from './pics/hector.png'
import Martina from './pics/martina.png'
import Maurits from './pics/maurits.png'
import Rahima from './pics/rahima.png'
import Sandra from './pics/sandra.png'
import Storm from './pics/storm.png'
import Wietske from './pics/wietske.png'
import React from 'react'



const FotoStudent = ({ studentName }) => {


    if (studentName === 'Evelyn'){
        return (
            // eslint-disable-next-line
            <img className="studentPhoto" src={Evelyn} alt="student-photo" />
        )
    }

    if (studentName === 'Aranka') {
        return (
            // eslint-disable-next-line
            <img className="studentPhoto" src={Aranka} alt="student-photo"/>
        )
    }
    if (studentName === 'Floris') {
        return (
            // eslint-disable-next-line
            <img className="studentPhoto" src={Floris} alt="student-photo"/>
        )
    }
    if (studentName === 'Hector') {
        return (
            // eslint-disable-next-line
            <img className="studentPhoto" src={Hector}alt="student-photo"/>
        )
    }
    if (studentName === 'Martina') {

        return (
            // eslint-disable-next-line
            <img className="studentPhoto" src={Martina} alt="student-photo"/>
        )
    }
    if (studentName === 'Storm') {
        return (
            // eslint-disable-next-line
            <img className="studentPhoto" src={Storm} alt="student-photo"/>
        )
    }
    if (studentName === 'Sandra') {
        return (
            // eslint-disable-next-line
            <img className="studentPhoto" src={Sandra} alt="student-photo"/>
        )
    }
    if (studentName === 'Rahima') {
        return (
            // eslint-disable-next-line
            <img className="studentPhoto" src={Rahima} alt="student-photo" />
        )
    }
    if (studentName === 'Maurits') {
        return (
            // eslint-disable-next-line
            <img className="studentPhoto" src={Maurits} alt="student-photo" />
        )
    }
    if (studentName === 'Wietske') {
        return (
            // eslint-disable-next-line
            <img className="studentPhoto" src={Wietske} alt="student-photo"/>
        )
    }
    else {
        return null
    };

};

        
        
                   

export default FotoStudent