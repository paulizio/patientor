import React from "react";
import { Container,Icon,Card } from "semantic-ui-react";
import { OccupationalHealthCareEntry } from "../types";


const OccupationalHealthcareEntry: React.FC<{entries: OccupationalHealthCareEntry}>=({entries})=>{

    return(

    <Container>
    <Card>
    <h4>{entries.date} <Icon name="stethoscope"/> {entries.employerName}</h4>
    <em>{entries.description}</em>
    </Card>
    </Container>
    );
};

export default OccupationalHealthcareEntry;