'use client'

import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/navbar.css";
import "@/styles/not-found.css";
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/react";
import Image from "next/image";
import wellcome from "@/assets/imgs/wellcome.svg";
import homeimg from "@/assets/imgs/House-searching.svg";
import health from "@/assets/imgs/Worldhealth.svg";
import logo from "@/assets/imgs/Logo4.svg";
import car from "@/assets/imgs/Electric car-amico.svg";

const menuItems = [
    "Entrar",
    "Aderir",
	"Empresa",
    "Política de Privacidade",
];

export default function Home() {
    return (
        <div className="home_main">
           <Navbar>
				<NavbarContent className="sm:hidden">
					<NavbarBrand>
          <Image src={logo} alt="wellcome" layout="responsive" />
					</NavbarBrand>
				</NavbarContent>

				<NavbarContent className="hidden sm:flex gap-6">
					<NavbarBrand>
          <Image src={logo} alt="wellcome" height={120} />
					</NavbarBrand>
					<NavbarItem>
						<Link className="text-color-text" size="md" href="/login">
							Entrar
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							href="/register"
							className="text-color-text"
							size="md"
							aria-current="page"
						>
							Aderir
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							className="text-color-text"
							size="md"
							href="/company"
						>
							Empresa
						</Link>
					</NavbarItem>

					<NavbarItem>
						<Link
							className="text-color-text"
							size="md"
							href="/privacy-policies"
						>
							Políticas de Privacidade
						</Link>
					</NavbarItem>
					
				</NavbarContent>

				<NavbarContent className="sm:hidden" justify="end">
					<NavbarMenuToggle />
				</NavbarContent>

				<NavbarMenu>
					{menuItems.map((item, index) => (
						<NavbarMenuItem
							key={`${item}-${
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								index
							}`}
						>
							<Link className="w-full text-color-text" href="#" size="md">
								{item}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
						</Navbar>
            <div className="home_body">
                <div className="left">
                    <Image src={wellcome} alt="wellcome" layout="responsive" width={500} height={500} loading="lazy" />
                </div>
                <div className="right">
                    <h1> Garanta o seu Presente e o Futuro com Seguros de Qualidade </h1>
                    <p>
                    Proteja a si mesmo e os seus bens! Temos os melhores seguros para responder às suas necessidades, e garantir a sua estabilidade à nível Automóvel, Residencial e de Saúde.
                    </p>
                    <div className="buttons">
                       
                        <Link href="/login">
                            <p>Entrar</p>
                            
                        </Link>
                    </div>
                </div>
            </div>

			<div className="home_body">
                <div className="left">
                    <Image src={health} alt="wellcome"  height={100} />
                </div>
                <div className="right">
                    <h1>SEGURO DE SAÚDE </h1>
                    <p>
					O seguro de saúde funciona como um contrato entre o segurado e uma empresa seguradora,
onde o segurado paga uma quantia regularmente em troca de cobertura financeira para
despesas médicas. A importância do seguro de saúde reside na sua capacidade de
proporcionar assistência médica sem sobrecarregar financeiramente o segurado. Com o
aumento dos custos dos cuidados de saúde, um seguro de saúde pode ajudar a cobrir despesas,
como consultas médicas, exames, tratamentos hospitalares e cirurgias, que de outra forma
poderiam ser muito dispendiosas.
                    </p>
                    <div className="buttons">
                        <Link href="/email">
                            <p>Aderir</p>
                            
                        </Link>
                        <Link href="/login">
                            <p>Entrar</p>
                            
                        </Link>
                    </div>
                </div>
            </div>

			<div className="home_body">
                <div className="left">
                    <Image src={homeimg} alt="wellcome"  height={100} />
                </div>
                <div className="right">
                    <h1>SEGURO RESIDENCIAL </h1>
                    <p>
					O seguro residencial tem como principal finalidade proteger o patrimônio dos segurados
contra diversos tipos de riscos que possam afetar suas residências. Este tipo de seguro oferece
cobertura contra danos causados por incêndios, explosões, quedas de raios, e desastres
naturais, como tempestades e inundações. A proteção contra esses eventos ajuda a minimizar
as perdas financeiras, permitindo que o segurado possa reparar ou reconstruir sua casa em
caso de sinistro.
                    </p>
                    <div className="buttons">
                        <Link href="/email">
                            <p>Aderir</p>
                            
                        </Link>
                        <Link href="/login">
                            <p>Entrar</p>
                            
                        </Link>
                    </div>
                </div>
            </div>

			<div className="home_body">
                <div className="left">
                    <Image src={car} alt="wellcome" height={100} />
                </div>
                <div className="right">
                    <h1>SEGURO AUTOMÓVEL </h1>
                    <p>
					O seguro de automóvel é uma proteção essencial para proprietários de veículos, oferecendo
segurança financeira e tranquilidade em casos de acidentes, roubo ou danos ao veículo.
Funcionando como um contrato entre o segurado e uma empresa de seguros, o seguro de
automóvel requer o pagamento de uma taxa regular em troca da cobertura de despesas
relacionadas ao veículo. A importância do seguro de automóvel reside na sua capacidade de proteger o segurado contra custos imprevistos e elevados associados a acidentes de trânsito.
                    </p>
                    <div className="buttons">
                        <Link href="/email">
                            <p>Aderir</p>
                            
                        </Link>
                        <Link href="/login">
                            <p>Entrar</p>
                            
                        </Link>
                    </div>
                </div>
            </div>


            <p className="basic_text footer">
            XXX(30) Seguros, Todos os Direitos Reservados, © 2025
            </p>
        </div>
    );
}
