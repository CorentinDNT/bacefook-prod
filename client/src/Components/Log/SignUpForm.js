import axios from "axios";
import React, { useState } from "react";
import SignInForm from "./SignInForm";

export default function SignUp() {
    const [formSubmit, setFormSubmit] = useState(false);
    const [pseudo, setPseudo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [controlPassword, setControlPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        const terms = document.getElementById("terms");
        const pseudoError = document.querySelector(".pseudo.error");
        const emailError = document.querySelector(".email.error");
        const passwordError = document.querySelector(".password.error");
        const confirmPasswordError = document.querySelector(
            ".password-confirm.error"
        );
        const termsError = document.querySelector(".terms.error");

        confirmPasswordError.innerHTML = "";
        termsError.innerHTML = "";

        if (password !== controlPassword || !terms.checked) {
            if (password !== controlPassword) {
                confirmPasswordError.innerHTML =
                    "Les mots de passes ne sont pas identiques";
            }
            if (!terms.checked) {
                termsError.innerHTML = "Veuillez valider les CGU";
            }
        } else {
            await axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/user/register`,
                data: {
                    pseudo,
                    email,
                    password,
                },
            })
                .then((res) => {
                    console.log(res);
                    if (res.data.errors) {
                        pseudoError.innerHTML = res.data.errors.pseudo;
                        emailError.innerHTML = res.data.errors.email;
                        passwordError.innerHTML = res.data.errors.password;
                    } else {
                        setFormSubmit(true);
                    }
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <>
            {formSubmit ? (
                <>
                    <SignInForm />
                    <span></span>
                    <h4 className="succes">
                        Enregistrement réussi, veuillez vous connecter
                    </h4>
                </>
            ) : (
                <form action="" onSubmit={handleRegister} id="sign-up-form">
                    <label htmlFor="pseudo">pseudo</label>
                    <br />
                    <input
                        type="text"
                        name="pseudo"
                        id="pseudo"
                        value={pseudo}
                        onChange={(e) => setPseudo(e.target.value)}
                    />
                    <div className="pseudo error"></div>
                    <br />
                    <label htmlFor="email">email</label>
                    <br />
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="email error"></div>
                    <br />
                    <label htmlFor="password">Mot de passe</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <div className="password error"></div>
                    <br />
                    <label htmlFor="password-conf">
                        Confirmez vôtre mot de passe
                    </label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        id="password-conf"
                        onChange={(e) => setControlPassword(e.target.value)}
                        value={controlPassword}
                    />
                    <div className="password-confirm error"></div>
                    <br />
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">
                        J'accepte les{" "}
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            CGU
                        </a>
                    </label>
                    <div className="terms error"></div>
                    <input
                        type="submit"
                        value="Valider l'inscriprion"
                        className="submit-form-button"
                    />
                </form>
            )}
        </>
    );
}
