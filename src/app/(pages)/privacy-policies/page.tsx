import Image from "next/image";
import Link from "next/link";
import "@/styles/globals.css";
import "@/styles/privacy-policies.css";
import business from "@/assets/imgs/Privacy-policy.svg";

export default function PrivacyPolicies() {
	return (
		<div className="home_main">
			<div className="home_body">
				<div className="left">
					<Image src={business} alt="business" />
				</div>
				<div className="right">
					<form className="login_form">
						<div className="header_form">
							<h1>Políticas de Privacidade</h1>
						</div>
						<div className="body_form">
							<div className="privacy_container">
								<h1 id="policies">XXX(30) SEGUROS</h1>
								<p>
									Esta página é usada para informar os
									visitantes sobre nossas políticas de colecta, uso e divulgação
									de informações pessoais, caso alguém decida usar nosso
									serviço. Se você optar por usar nosso Serviço, concorda com a
									colecta e o uso de informações relacionadas a esta política.
									As informações pessoais que colectamos são usadas para
									fornecer e melhorar o serviço. Não usaremos ou
									compartilharemos as suas informações com ninguém, excepto
									conforme descrito nesta Política de Privacidade. 
								</p>
								<h1>Colecta e uso de informações</h1>
								<p>
									Para uma melhor experiência, ao usar nosso Serviço, podemos
									exigir que nos forneça certas informações de identificação
									pessoal. As informações que
									solicitamos serão retidas por nós e usadas conforme descrito
									nesta política de privacidade. O aplicativo usa serviços de
									terceiros que podem colectar informações usadas para
									identificá-lo.
								</p>
								
								<h1>Provedores de serviço</h1>
								<p>
									Podemos empregar empresas e indivíduos terceirizados devido
									aos seguintes motivos: <br /> • Para facilitar nosso Serviço <br /> •
									Para fornecer o Serviço em nosso nome; <br /> • Para realizar
									serviços relacionados ao Serviço; ou <br /> • Para nos ajudar
									a analisar como nosso Serviço é usado. <br /> Queremos
									informar aos usuários deste Serviço que esses terceiros têm
									acesso às suas Informações Pessoais. O motivo é realizar as
									tarefas atribuídas a eles em nosso nome. No entanto, eles são
									obrigados a não divulgar ou usar as informações para qualquer
									outra finalidade.
								</p>
								<h1>Segurança</h1>
								<p>
									Valorizamos sua confiança em nos fornecer suas informações
									pessoais, portanto, estamos conscientes para usar meios
									comercialmente aceitáveis de protegê-las. Mas lembre-se que
									nenhum método de transmissão pela internet, ou método de
									armazenamento electrónico é 100% seguro e confiável, e não
									podemos garantir sua segurança absoluta. 
								</p>
								<h1>Privacidade das crianças</h1>
								<p>
									Esses Serviços não se destinam a menores de 18 anos. Não
									colectamos intencionalmente informações de identificação
									pessoal de crianças menores. No caso de descobrirmos que uma
									criança menor de 18 anos nos forneceu informações pessoais,
									nós as excluímos imediatamente de nossos servidores. O Maior
									de idade (pai/Mãe) ou responsável próximos estiver ciente de
									que seu filho nos forneceu informações pessoais, entre em
									contacto connosco para que possamos tomar as medidas
									necessárias. <br /> Nossa aplicação colecta informações apenas
									com o consentimento verificável dos pais ou responsáveis
									legais. Antes de colectar qualquer informação pessoal,
									solicitaremos o consentimento dos pais ou responsáveis legais
									por meio de um processo adequado e seguro, de acordo com as
									leis aplicáveis. <br />
									Não compartilhamos informações pessoais de crianças com
									terceiros, excepto nas seguintes circunstâncias: <br />• Se
									obtivermos o consentimento dos pais ou responsáveis legais; <br /> •
									Quando necessário para cumprir uma obrigação legal, como
									responder a uma ordem judicial ou processo legal; <br /> • Para
									proteger os direitos, propriedade ou segurança de nossa
									empresa, usuários da aplicação ou o público em geral. <br /> •
									Medidas de Segurança.
								</p>
								<h1>Direitos dos Pais ou Responsáveis Legais</h1>
								<p>
									Os pais ou responsáveis legais têm o direito de revisar,
									corrigir, actualizar ou excluir as informações pessoais de
									seus filhos colectadas pela aplicação. Eles também podem
									retirar seu consentimento a qualquer momento, solicitando a
									exclusão das informações pessoais da criança. Para exercer
									esses direitos, entre em contacto connosco por meio das
									informações fornecidas no final desta política.
								</p>
								<h1>Mudança das Políticas de Privacidade</h1>
								<p>
									Podemos actualizar nossa Política de Privacidade de tempos em
									tempos. Assim, você é aconselhado a revisar esta página
									periodicamente para quaisquer alterações. Iremos notificá-lo
									sobre quaisquer alterações publicando a nova Política de
									Privacidade nesta página. 
								</p>
								<h1>Contacte-nos</h1>
								<p>
									Todos os dados, e todo o conteúdo em geral
									constante da da APP XXX(30) Seguros são propriedade da Seguradora XXX Seguros ou de alguma empresa sua parceira e estão
									protegidas nos termos gerais do direito, pela legislação
									nacional. Se tiver alguma dúvida ou sugestão sobre a nossa
									Política de Privacidade, não hesite em contactar-nos para 			contacto@xxxseguros.co.ao
									
								</p>
							</div>
							<div className="terms">
								<p>
									Ao utilizar esta plataforma você corcorda com as 
									Políticas de Privacidade descritas acima.
								</p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
