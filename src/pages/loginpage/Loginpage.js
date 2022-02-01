import React, {useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import Textfield from "../../components/textfield/Textfield";
import Button from "../../components/button/Button";
import { AuthenticatedContext } from "../../context/AuthenticatedContext";
import './Loginpage.css'
import axios from "axios";
import {Link, useHistory} from "react-router-dom";

function Loginpage() {
    const {register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useContext(AuthenticatedContext)
    const history = useHistory()
    const [error, toggleError] = useState(false)

    async function onFormSubmit(data) {
        console.log(data)

        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',
                {
                    username: data.username,
                    password: data.password,
                })
            history.push('/menu')
            login(result.data.accessToken);
            console.log(result.data)
        } catch (e) {
            console.error(e)
            toggleError(true)
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                    <h1>INLOGGEN</h1>
                    <p>Om gebruik te maken van de applicatie dien je eerst te registreren en aansluitend kun je hier inloggen.</p>
                    <p>Als je nog niet geregistreerd bent, klik <Link to ="/inschrijven">HIER</Link> om je in te registreren.</p>
                    <Textfield
                        id="details-username"
                        name="username"
                        title="Gebruikersnaam: "
                        errors={errors}
                        register={register}
                        validationRules={{
                            required: {
                                value:true,
                                message: "Gebruikersnaam moet ingevuld zijn!!!"
                            },
                            minLength: {
                                value:6,
                                message:"Gebruikersnaam moet minimaal 6 tekens bevatten"
                            }
                        }}
                    />
                    <Textfield
                        id="details-password"
                        name="password"
                        title="Wachtwoord: "
                        errors={errors}
                        register={register}
                        validationRules={{
                            required: {
                                value: true,
                                message: "Wachtwoord moet ingevuld zijn"
                            },
                            minLength: {
                                value:6,
                                message:"Wachtwoord moet minimaal 6 tekens bevatten"
                            }
                        }}
                    />
                {error && <p>Gebruikersnaam en/of wachtwoord is onjuist, probeer opnieuw</p>}
                    <Button
                        type="submit"
                        title="LOG IN"
                    />

            </form>
        </div>
    );
}

export default Loginpage;