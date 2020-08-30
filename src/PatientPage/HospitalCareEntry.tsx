import React from "react";
import { Container,Card } from "semantic-ui-react";
import {Hospital } from "../types";


const HospitalCareEntry: React.FC<{entries:  Hospital}>=({entries})=>{
    return(
<Container>
    <Card>
     <h4>{entries.date}</h4>
     <em>{entries.description}</em>    
    </Card>
   
</Container>

    );
};

export default HospitalCareEntry;