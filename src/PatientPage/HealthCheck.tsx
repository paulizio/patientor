import React from "react";
import { Container,Icon,Card} from "semantic-ui-react";
import {  HospitalEntry } from "../types";
import HealthRating from "./HealthRating";


const HealthCheckEntry: React.FC<{entries: HospitalEntry}>=({entries})=>{
    return(
<Container>
    <Card>
     <h4>{entries.date} <Icon name="user md"/> </h4> 
     <em>{entries.description}</em>
     <Container>
         <HealthRating healthCheckRating={entries.healthCheckRating}/>
         </Container>
     
    </Card>
</Container>
    
    );
};

export default HealthCheckEntry;