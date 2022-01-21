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
            const result = await axios.post('http://localhost:3000/login',
                {
                    email: email,
                    password: password,
                })
            console.log(result.data)
            history.push('/menu')
            login(result.data.accessToken);
        }catch(e){
            console.error(e)
        }
    }
    console.log(errors);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <div className="page-container">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset>
                    <legend>INLOGGEN</legend>
                    <Textfield
                        id="emailadres-field"
                        name="email"
                        title="Emailadres: "
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
                        id="password-field"
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