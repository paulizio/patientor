import React from "react";
import axios from "axios";
import { Container,Icon } from "semantic-ui-react";
import {useParams } from "react-router-dom";
import { Patient,Diagnosis } from "../types";
import { apiBaseUrl } from "../constants";
import { useStateValue, particularPatient,setDiagnosisList } from "../state";
import EntryDetails from "./EntryDetails";

const PatientPage: React.FC=()=>{
    const { id,code } = useParams<{ id: string;code: string }>();
    const [{patients,diagnosis},dispatch]=useStateValue();
    const patient=patients[id];
    const diagnose=diagnosis[code];

    React.useEffect(() => {    
        const fetchPatient = async () => {
          try {
            const { data: patientFromApi } = await axios.get<Patient>(
              `${apiBaseUrl}/patients/${id}`
            );
            dispatch(particularPatient(patientFromApi));
          } catch (e) {
            console.error(e);
          }
        };
        fetchPatient();
      }, [dispatch]);

      React.useEffect(() => {
        const fetchDiagnoseList = async () => {
          try {
            const { data: diagnoseListFromApi } = await axios.get<Diagnosis[]>(
              `${apiBaseUrl}/diagnoses`
            );
            dispatch(setDiagnosisList(diagnoseListFromApi));
          } catch (e) {
            console.error(e);
          }
        };
        fetchDiagnoseList();
      }, [dispatch]);
      console.log('diagnose is', diagnose);

    
      if (!patient){
        return(
          <div>
            <p>Loading...</p>
          </div>
        );
      }else{
return(
 
<Container>
    <h1>Patientor</h1>
    <h3>{patient.name}<Icon name={patient.gender==="female"?"venus":"mars"}/></h3> 
    <p>ssn: {patient.ssn}</p>
    <p>occupation: {patient.occupation}</p>
    <h4>entries</h4>

    {patient.entries.map((e,i)=>{
      return(
        <Container key={i}>
        <EntryDetails key={e.id} entries={e}/>  
      </Container>
      );
      })
    }
</Container>
    );
  }
};
export default PatientPage;