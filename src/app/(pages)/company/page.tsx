'use client'

import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/navbar.css";
import "@/styles/not-found.css";
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/react";
import Image from "next/image";
import party from "@/assets/imgs/Celebration-amico.svg";
import logo2 from "@/assets/imgs/Logo.svg";
import visao from "@/assets/imgs/arrow-circle-up.svg";
import missao from "@/assets/imgs/arrow-up.svg";
import valores from "@/assets/imgs/crown.svg";




const menuItems = [
    "Home",
    "Entrar",
    "Aderir",
    "Política de Privacidade",
];

export default function Company() {
    return (
        <div className="home_main">
           <Navbar>
				<NavbarContent className="sm:hidden">
					<NavbarBrand>
         			</NavbarBrand>
				</NavbarContent>

				<NavbarContent className="hidden sm:flex gap-6">
					<NavbarBrand>
          
					</NavbarBrand>
                    <NavbarItem>
						<Link className="text-color-text" size="md" href="/">
							Home
						</Link>
					</NavbarItem>
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
                    <Image src={party} alt="wellcome" layout="responsive" width={500} height={500} loading="lazy" />
                </div>
                <div className="right">
                        <Image src={logo2} alt="wellcome" height={300} />
                    
                    <h1> XXX(30) Seguros! </h1>
                    <p>
                    A empresa XXX Seguros, foi fundada à 1 de Dezembro de 2024, iniciou a sua
actividade à 1 de Janeiro de 2025, sob forma de sociedade anónima, com capital de
300.000.000 kz. A XXX Seguros acredita que a protecção dos bens e saúde é essencial
para a qualidade de vida. Sendo assim, ela oferece uma excelente gama de seguros,todos desenhados para atender as necessidades dos clientes.  </p>
                   
                </div>
            </div>

			<div className="home_body">
                <div className="left">
                    <Image src={visao} alt="wellcome" height={200} />
                </div>
                <div className="right">
                    <h1>MISSÃO </h1>
                    <p>
					Oferecer soluções de seguros acessíveis,
personalizadas e inovadoras, garantindo satisfação aos nossos clientes. Estamos
comprometidos em proporcionar um atendimento ágil, transparente e humano,
construindo relações duradouras baseadas na confiança. Além disso, buscamos educar
nossos clientes sobre a importância do seguro na gestão de riscos, promovendo uma
cultura de prevenção que beneficie toda a comunidade angolana.
                    </p>
                   
                </div>
            </div>

			<div className="home_body">
                <div className="left">
                    <Image src={missao} alt="wellcome" height={200}/>
                </div>
                <div className="right">
                    <h1>VISÃO </h1>
                    <p>
					A empresa tem como visão ser a seguradora líder em Angola, reconhecida pela
excelência em serviços e pela confiança que transmitimos aos nossos clientes. Juntos,
aspiramos a ser um agente de mudança no sector de seguros, promovendo a educação
financeira e a cultura de protecção, contribuindo assim para o desenvolvimento
econômico e social do país.
                    </p>
                   
                </div>
            </div>

			<div className="home_body">
                <div className="left">
                    <Image src={valores} alt="wellcome" height={200} />
                </div>
                <div className="right">
                    <h1>VALORES </h1>
                    <p>
					1. Integridade: Após discussões entre os sócios, reforçamos nosso compromisso
com a honestidade e a ética em todas as nossas relações, construindo confiança com
nossos clientes e parceiros.
                    </p>
                    <p>
                    2. Excelência: Juntos, nos comprometemos a oferecer serviços de alta qualidade
                    e a buscar continuamente melhorias em nossos processos e produtos.
                    </p>
                    <p>
                    3. Inovação: Valorizamos a criatividade e a inovação, colaborando para
desenvolver soluções que atendam às necessidades em constante evolução dos nossos
clientes.
                    </p>
                    <p>
                    4. Colaboração: Promovemos um ambiente de trabalho colaborativo onde todos
os colaboradores são incentivados a contribuir com ideias e soluções, reconhecendo que
o sucesso da empresa é resultado do esforço conjunto.
                    </p>
                    
                </div>
            </div>



            <p className="basic_text footer">
                <small>
                XXX Seguros, SA <br />
                Endereço: Rua Kwame Nkrumah, Maianga, Luanda, Angola <br />
                Contatos: 935 979 463 / 933 733 563 <br />
                Email: contacto@xxxseguros.co.ao <br /> <br /> <br />
                </small>
            XXX(30) Seguros, Todos os Direitos Reservados, © 2025
            </p>
        </div>
  );
 }