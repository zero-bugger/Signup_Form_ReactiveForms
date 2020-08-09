import {FormGroup} from '@angular/forms'

export function passchecker(
    controlname:string,
    controlcompare:string
){
    return (formGroup:FormGroup)=>{
        const pass=formGroup.controls[controlname];
        const comppass=formGroup.controls[controlcompare];

        if(pass.value !== comppass.value){
            comppass.setErrors({
                mustmatch:true,
            })
        }else{
            comppass.setErrors(null);
        }

    } 

}