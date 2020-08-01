import React from "react";
import axios from "axios";
import { Container,Icon } from "semantic-ui-react";
import {useParams } from "react-router-dom";
// import { PatientFormValues } from "../AddPatientModal/AddPatientForm";
// import AddPatientModal from "../AddPatientModal";
import { Patient,Diagnosis } from "../types";
import { apiBaseUrl } from "../constants";
// import HealthRatingBar from "../components/HealthRatingBar";
import { useStateValue, particularPatient,setDiagnosisList } from "../state";

const PatientPage:React.FC=()=>{
    const { id,code } = useParams<{ id: string,code:string }>();
    const [{patients,diagnosis},dispatch]=useStateValue();
    const patient=patients[id]
    const diagnose=diagnosis[code]

    React.useEffect(() => {    
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
      console.log('diagnose is', diagnose)

    
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
    <h4>entries</h4>
    {patient.entries.map((e,i)=>{
      return(
        <div>
        <p key={i}>{e.date} {e.description}</p>
        {patient.entries.map((x,l)=>{
          return(
            <div key={l}>
          {x.diagnosisCodes?
          <li key={l}>{x.diagnosisCodes.map(code=>
            <li>{code}{Object.values(diagnosis).filter((d:Diagnosis)=>d.code===code).map(match=><p>{match.name}</p>)}</li>
            )}
          </li>:null}
          </div>
        )
        })
      }
        </div>
      )}
      )}

</Container>
    </div>
)
}
}
export default PatientPage;