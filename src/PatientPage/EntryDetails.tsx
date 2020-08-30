import React from "react";
import { Entries } from "../types";
import {assertNever} from '../helpers/helpers';
import OccupationalHealthcareEntry from "./OccupationalHealthcareEntry";
import HospitalCareEntry from "./HospitalCareEntry";
import HealthCheckEntry from "./HealthCheck";

const EntryDetails: React.FC<{entries: Entries}>=({entries})=> {
    switch(entries.type){
        case "Hospital":
            return <HospitalCareEntry entries={entries}/>;
            case 'OccupationalHealthcare':
                return <OccupationalHealthcareEntry entries={entries}/>;
                case 'HealthCheck':
                    return <HealthCheckEntry entries={entries}/>;
                default:
                    return assertNever(entries);
    }
};


export default EntryDetails;