import React from "react";
import axios from "axios";
import { Container,Icon } from "semantic-ui-react";
import {useParams } from "react-router-dom";
// import { PatientFormValues } from "../AddPatientModal/AddPatientForm";
// import AddPatientModal from "../AddPatientModal";
import { Patient } from "../types";
import { apiBaseUrl } from "../constants";
// import HealthRatingBar from "../components/HealthRatingBar";
import { useStateValue, particularPatient } from "../state";

const PatientPage:React.FC=()=>{
    const { id } = useParams<{ id: string }>();
    const [{patients},dispatch]=useStateValue();
    const patient=patients[id]

    React.useEffect(() => {
        axios.get<void>(`${apiBaseUrl}/ping`);
    
        const fetchPatient = async () => {
          try {
            const { data: patientFromApi } = await axios.get<Patient>(
              `${apiBaseUrl}/patients/${id}`
            );
            dispatch(particularPatient(patientFromApi))
          } catch (e) {
            console.error(e);
          }
        };
        fetchPatient();
      }, [dispatch]);
      if (!patient){
        return(
          <div>
            <p>Loading...</p>
          </div>
        )
      }else{
return(
    <div>
<Container >
    <h1>Patientor</h1>
    <h3>{patient.name}<Icon name={patient.gender==="female"?"venus":"mars"}/></h3> 
    <p>ssn: {patient.ssn}</p>
    <p>occupation: {patient.occupation}</p>
</Container>
    </div>
)
}
}
export default PatientPage;