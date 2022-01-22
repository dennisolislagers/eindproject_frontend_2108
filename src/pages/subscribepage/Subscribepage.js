import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import Textfield from "../../components/textfield/Textfield";
import './Subscribepage.css'
import { useHistory } from "react-router-dom";
import Button from "../../components/button/Button";
import axios from "axios";

function Subscribepage () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()

   async function onFormSubmit(data) {
        console.log(data)

        try{
             await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    username: username,
                    email: email,
                    password: password,
                    role: ["user"],
                })
            history.push('/inloggen')
        }catch (e) {
            console.error(e)
            console.log(e.response)
        }
    }

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="page-container">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset>
            <legend>REGISTREREN</legend>
                    <Textfield
                        name="username"
                        title="Gebruikersnaam:  "
                        errors={errors}
                        register={register}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        validationRules={{
                            required: {
                                minLength: 6,
                                message: "De gebruikersnaam moet minimaal 6 tekens bevatten!!!"
                        }
                        }}
                    />
                    <Textfield
                        name="email"
                        title="Emailadres:  "
                        errors={errors}
                        register={register}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        validationRules={{
                            required: {
                                value:true,
                                message: "Emailadres moet ingevuld zijn!!!"
                            }
                        }}
                        />
                    <Textfield
                        name="password"
                        title="Wachtwoord:  "
                        errors={errors}
                        register={register}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        validationRules={{
                            minLength: {
                                value: 6,
                                message: "Het wachtwoord moet 6 tekens bevatten !!!!"
                        }
                        }}
                    />
                    <Button
                        type="submit"
                        title="Registreren"
                    />
                </fieldset>

            </form>

        </div>
    );
}

export default Subscribepage;