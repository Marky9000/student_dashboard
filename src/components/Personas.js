
import PersonaData from "../data/PersonaData";

const Personas = ({ studentName }) => {
    
    const getStudent = PersonaData.filter((e) => e.first_name === studentName)

    return (
        Object.keys(getStudent).map((obj, i) => {
                return (
                    <div className="studentPersona" key="id">
                        <li >Naam: {getStudent[obj].first_name} {getStudent[obj].last_name}</li>
                        <li >Email: {getStudent[obj].email}</li>
                        <li >Tel: {getStudent[obj].telefoon}</li>
                    </div>
                    )   
        })
    )
}


export default Personas