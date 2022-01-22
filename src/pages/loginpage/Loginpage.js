import React, {useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import Textfield from "../../components/textfield/Textfield";
import Button from "../../components/button/Button";
import { AuthenticatedContext } from "../../context/AuthenticatedContext";
import './Loginpage.css'
import axios from "axios";
import {useHistory} from "react-router-dom";

function Loginpage() {
    const {register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useContext(AuthenticatedContext)
    const history = useHistory()

    async function onFormSubmit(data) {
        console.log(data)

        try{
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',
                {
                    username: username,
                    password: password,
                })
            history.push('/menu')
            login(result.data.accessToken);
            console.log(result.data)
        }catch(e){
            console.error(e)
        }
    }

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <div className="page-container">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset>
                    <legend>INLOGGEN</legend>
                    <Textfield
                        name="username"
                        title="Gebruikersnaam: "
                        errors={errors}
                        register={register}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        validationRules={{
                            required: {
                                value:true,
                                message: "Gebruikersnaam moet ingevuld zijn!!!"
                            }
                        }}
                    />
                    <Textfield
                        name="password"
                        title="Wachtwoord: "
                        errors={errors}
                        register={register}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        validationRules={{
                            required: {
                                value: true,
                                message: "Wachtwoord moet ingevuld zijn"
                            }
                        }}
                    />

                    <Button
                        type="submit"
                        title="LOG IN"
                    />

                </fieldset>
            </form>
        </div>
    );
}

export default Loginpage;