import React from 'react';
import { useForm } from "react-hook-form";
import Textfield from "../../components/textfield/Textfield";
import './Subscribepage.css'
import { useHistory } from "react-router-dom";
import Button from "../../components/button/Button";

function Subscribepage () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()


    function onFormSubmit(data) {
        console.log(data)
        history.push('/inloggen')
    }
    console.log(errors);

    return (
        <div className="page-container">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset>
            <legend>INSCHRIJVEN</legend>

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
                                message: "Gebruikersnaam moet ingevuld zijn!!!"
                        }
                        }}
                    />
                </div>
                    <Textfield
                        errors={errors}
                        register={register}
                        labelText="Emailadres: "
                        labelId="details-emailadres"
                        inputName="emailadres"
                        inputType="email"
                        validationRules={{
                            required: {
                                value:true,
                                message: "Emailadres moet ingevuld zijn!!!"
                            }
                        }}
                        />
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
                <div>
                    <Textfield
                        errors={errors}
                        register={register}
                        labelText="Herhaal Wachtwoord: "
                        labelId="details-repeat"
                        inputName="repeat"
                        inputType="password"
                        validationRules={{
                            required: {
                                value: true,
                                message: "Wachtwoord moet ingevuld zijn"
                        }
                        }}
                    />
                </div>
                <div>
                    <Textfield className="checkbox"
                               errors={errors}
                               register={register}
                               labelText="Ik schrijf me in voor de nieuwsbrief"
                               labelId="details-newsletter"
                               inputName="newsletter"
                               inputType="checkbox"
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

export default Subscribepage;