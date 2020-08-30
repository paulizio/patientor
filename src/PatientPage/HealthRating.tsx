import React from 'react';
import { HealthCheckRating } from '../types';
import {Icon} from "semantic-ui-react";

const HealthRating: React.FC<{healthCheckRating: HealthCheckRating}>=({healthCheckRating})=>{
    switch(healthCheckRating){
        case 0:
            return <Icon color="green" name="heart"/>;
            case 1:
                return <Icon color="yellow" name="heart"/>;
                case 2:
                    return <Icon color="orange" name="heart"/>;
                    case 3:
                        return <Icon color="red" name="heart"/>;
            default:
            return null;
    }

};
export default HealthRating;