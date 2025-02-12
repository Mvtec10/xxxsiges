"use client";

import Link from "next/link";
import Image from "next/image";
import "@/styles/globals.css";
import "@/styles/login.css";
import business from "@/assets/imgs/Logo.svg";

export default function Login() {

	
	return (
		<div className="home_main">
			<div className="home_body">
				<div className="left">
				<Link href='/'>
                        <Image src={business} alt="business" />
                </Link>	
					</div>
				<div className="right">
					<form className="login_form">
						<div className="header_form">
							<h1>Faça login na sua conta</h1>
						</div>
						<div className="body_form">
							<div className="input_field">
								<label htmlFor="membership_number">Email ou Número de Telefone</label>
								<input placeholder="Email ou Número de Telefone"/>
								
							</div>
							<div className="input_field">
								<label htmlFor="membership_number">Palavra-Passe</label>
								<input
									type="password"
									placeholder="Insira Sua Palavra-Passe"
								/>
			                </div>
							<button type="submit" className="button_auth">Entrar</button>
							<div className="terms">
                            <p>
								Ainda não tem uma conta?{" "}
								<Link href={"/register"}>Criar conta</Link>
							</p>
                            <p>							
									<Link href="/forgot-password">Esqueci a Palavra-Passe</Link>{" "}
		
								</p>

                                <p>							
									<Link href="/forgot-password">Políticas de Privacidade</Link>{" "}
									são aplicáveis.
								</p>
							</div>
						</div>
					</form>
					
                    <p className="basic_text footer">
                    <small className="footer">
                        <br /> <br />
                XXX Seguros, SA <br />
                Contatos: 935 979 463 / 933 733 563 <br />
                Email: contacto@xxxseguros.co.ao <br /> <br /> 
                </small>
                XXX(30) Seguros, Todos os Direitos Reservados, © 2025
					</p>

				</div>
			</div>
		</div>
        
	);
}
