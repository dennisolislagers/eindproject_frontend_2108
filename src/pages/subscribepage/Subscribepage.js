import React from 'react';
import { useForm } from "react-hook-form";
import Inputfield from "../../components/inputfield/Inputfield";

function Subscribepage () {
    const {register, handleSubmit, formState: { errors } } = useForm();

    function onFormSubmit(data) {
        console.log(data)
    }
    console.log(errors);

    return (
        <fieldset className="pagecontainer">
            <legend>INSCHRIJVEN</legend>
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
                                message: "Gebruikersnaam moet ingevuld zijn!!!"
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

                    <Inputfield
                        errors={errors}
                        register={register}
                        labelText="Herhaal Wachtwoord"
                        labelId="details-repeat"
                        inputName="repeat"
                        validationRules={{
                            required: {
                                value: true,
                                message: "Wachtwoord moet ingevuld zijn"
                        }
                        }}
                    />

                    <Inputfield
                        errors={errors}
                        register={register}
                        labelText="Ik schrijf me in voor de nieuwsbrief"
                        labelId="details-newsletter"
                        inputName="newsletter"
                        inputType="checkbox"
                    />

                <button id="send-button"
                        type="submit">
                    Versturen
                </button>
            </form>
        </fieldset>
    );
}

export default Subscribepage;