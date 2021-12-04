import React from 'react';
import{useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import Inputfield from "../../components/inputfield/Inputfield";

function Loginpage() {
    const history = useHistory()
    function pushThrough ()  {
     history.push('main-menu')
                        }
    const {register, handleSubmit, formState: { errors }} = useForm();

    function onFormSubmit(data) {
    console.log(data)
    }
    console.log(errors);
    return (
        <fieldset className="pagecontainer">
            <legend>INLOGGEN</legend>
                <form onSubmit={handleSubmit(onFormSubmit)}>

                    <Inputfield
                        errors={errors}
                        register={register}
                        labelText="Gebruikersnaam"
                        labelId="details-username"
                        inputName="username"
                        validationRules={{
                            required: {
                                value: true,
                                message: "Gebruikersnaam moet ingevuld zijn"
                            }
                        }}
                    />

                    <Inputfield
                        errors={errors}
                        register={register}
                        labelText="Wachtwoord"
                        labelId="details-password"
                        inputName="password"
                        validationRules={{
                            required: {
                                value: true,
                                message: "Wachtwoord moet ingevuld zijn"
                            }
                        }}
                    />
                <button id="send-button"
                    type="submit" onClick={pushThrough}>
                    Versturen
                </button>
            </form>
        </fieldset>
    );
}

export default Loginpage;