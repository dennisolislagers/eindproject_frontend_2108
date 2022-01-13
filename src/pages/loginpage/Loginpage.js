import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Textfield from "../../components/textfield/Textfield";
import Button from "../../components/button/Button";
import { AuthenticatedContext } from "../../context/AuthenticatedContext";
import './Loginpage.css'

function Loginpage() {
    const {register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()
    const { login } = useContext(AuthenticatedContext)


    function onFormSubmit(data) {
        console.log(data)
        login()
        history.push('/resultaat')
    }
    console.log(errors);

    return (
        <div className="page-container">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset>
                    <legend>INLOGGEN</legend>
                <div>
                    <Textfield
                        errors={errors}
                        register={register}
                        labelText="Gebruikersnaam: "
                        labelId="details-username"
                        inputName="username"
                        validationRules={{
                            required: {
                                value: true,
                                message: "Gebruikersnaam moet ingevuld zijn"
                            }
                        }}
                    />
                </div>
                <div>
                    <Textfield
                        errors={errors}
                        register={register}
                        labelText="Wachtwoord: "
                        labelId="details-password"
                        inputName="password"
                        inputType="password"
                        validationRules={{
                            required: {
                                value: true,
                                message: "Wachtwoord moet ingevuld zijn"
                            }
                        }}
                    />
                </div>

                        <br/>
                    <Button
                        type="submit"
                    />

                </fieldset>
            </form>
        </div>
    );
}

export default Loginpage;