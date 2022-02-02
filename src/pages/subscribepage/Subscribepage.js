import React from 'react';
import { useForm } from "react-hook-form";
import Textfield from "../../components/textfield/Textfield";
import './Subscribepage.css'
import {Link, useHistory} from "react-router-dom";
import Button from "../../components/button/Button";
import axios from "axios";
import Checkbox from "../../components/checkbox/Checkbox";

function Subscribepage () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()


   async function onFormSubmit(data) {
        console.log(data)

        try{
             await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    info:data.newsletter,
                })
            history.push('/inloggen')
        }catch (e) {
            console.error(e)
            console.log(e.response)
        }
    }

    return (
        <div className="subscribepage-container">

            <form onSubmit={handleSubmit(onFormSubmit)}>

            <h1>REGISTREREN</h1>
                <p>Hier kun je jezelf registreren waarna je kunt inloggen op de inlogpagina.</p>
                <p>Als je al geregistreerd bent, klik <Link to ="/inloggen">HIER</Link> om naar de inlogpagins te gaan.</p>
                    <Textfield
                        id="details-username"
                        name="username"
                        title="Gebruikersnaam:  "
                        errors={errors}
                        register={register}
                        validationRules={{
                            minLength: {
                                value: 6,
                                message: "De gebruikersnaam moet 6 tekens bevatten !!!!"
                            },
                            required: {
                                value:true,
                                message: "De gebruikersnaam moet ingevuld zijn!!!"
                            },
                        }}
                    />
                    <Textfield
                        id="details-email"
                        type="email"
                        name="email"
                        title="Emailadres:  "
                        errors={errors}
                        register={register}
                        validationRules={{
                            required: {
                                value:true,
                                message: "Het emailadres moet ingevuld zijn!!!"
                            },
                                validate: (value) => value.includes("@"),
                                message:"Het emailadres is niet juist ingevuld"
                        }}
                        />
                    <Textfield
                        id="details-password"
                        name="password"
                        title="Wachtwoord:  "
                        errors={errors}
                        register={register}
                        validationRules={{
                            minLength: {
                                value: 6,
                                message: "Het wachtwoord moet 6 tekens bevatten !!!!"
                        },
                            required: {
                                value:true,
                                message: "Het wachtwoord moet ingevuld zijn!!!"
                            },
                        }}
                    />
                    {/*{errors && <p>{errors.response.data}</p>}*/}
                    <Checkbox
                        id="details-checkbox"
                        name="newsletter"
                        register={register}
                        value="true"
                        title="Ik schrijf me in voor de nieuwsbrief"
                    />
                    <Button
                        type="submit"
                        title="Registreren"
                    />
            </form>
        </div>
    );
}

export default Subscribepage;