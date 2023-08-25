import React, { useState } from "react";
import styles from '../signin/signin.module.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        try{
            const body = {
                name: name,
                email: email,
                password: password
            }
            const parsebody = JSON.stringify(body);
            const response = await fetch('http://127.0.0.1:8000/api/guest/register',{
                method: "POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: parsebody
            });
            const data = await response.json();
            if(data.status === "success"){
                console.log("successfully registered");
            }else{
                console.log("Check inputted fields");
            }
        }catch(error){
            console.log("failed to call api", error);
        }
    }

    const Login  = () => {
        window.location.href = "./";
    }

    return(
        <div className={styles.container}>
            <div className={styles.input_form}>
                <div className={styles.title_container}>
                    <div className={styles.title}>Daily Cook Book</div>
                    <div>Welcome Back</div>
                    <div className={styles.slogan}>
                        sign up and get looking.
                    </div>
                </div>
                <div className={styles.row}>
                    <label>Name:</label>
                    <input type="text"  value={name} onChange={ e => setName(e.target.value)} placeholder="Name"/>
                </div>
                <div className={styles.row}>
                    <label>Email:</label>
                    <input type="text"  value={email} onChange={ e => setEmail(e.target.value)} placeholder="Email"/>
                </div>
                <div className={styles.row}>
                    <label>password:</label>
                    <input type="password"  value={password} onChange={ e => setPassword(e.target.value)} placeholder="Password"/>
                </div>
                <div className={styles.button_container}>
                    <button onClick={register}>Register</button>
                </div>
                <div className={styles.CTA}>Already have an account? <span onClick={Login}>Log in</span></div>
            </div>
        </div>
    )
}

export default Register;