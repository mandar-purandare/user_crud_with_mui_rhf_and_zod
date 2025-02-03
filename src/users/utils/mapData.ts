import { ApiCommon, ApiCreateEdit,  } from "../types/apiTypes";
import { Schema } from "../types/schema";

export function mapData(data:Schema): ApiCreateEdit {
    const common: ApiCommon ={
        name: data.name,
                email: data.email,
                formerEmploymentPeriod: [
                    data.formerEmploymentPeriod[0].toString(),
                    data.formerEmploymentPeriod[1].toString(),
                ],
                gender: data.gender,
                languagesSpoken: data.languagesSpoken,
                registrationDateAndTime: data.registrationDateAndTime.toString(),
                salaryRange: [data.salaryRange[0], data.salaryRange[1]],
                skills: data.skills,
                states: data.states,
                students: data.isTeacher === true ? data.students : [],
                isTeacher: data.isTeacher,
    };

    switch(data.variant){
        case 'create':{
            return {...common, variant: data.variant};
        }
        case 'edit': {
            return {...common, id: data.id, variant: data.variant};
        }
    }
}