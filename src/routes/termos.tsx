import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Callout, Highlight, InfoCards, BadgeList, type LegalSection } from "@/components/LegalPage";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Cebolla.app" },
      { name: "description", content: "Termos e condições de uso do Cebolla.app: regras de acesso, propriedade intelectual, monetização por Google AdSense, isenções e limitações de responsabilidade." },
    ],
  }),
  component: Termos,
});

const sections: LegalSection[] = [
  {
    id: "aceite",
    title: "Aceite dos Termos",
    content: (
      <>
        <p>
          Ao acessar ou utilizar o <Highlight>Cebolla.app</Highlight>, você declara ter lido, compreendido
          e concordado integralmente com estes Termos de Uso e com nossa Política de Privacidade. Se
          você não concordar com qualquer disposição, deve interromper imediatamente o uso do site.
        </p>
        <Callout type="info" title="Leitura obrigatória">
          Estes Termos constituem um contrato eletrônico vinculante entre você e o Cebolla.app.
          Recomendamos leitura atenta e a impressão ou salvamento de uma cópia para referência.
        </Callout>
      </>
    ),
  },
  {
    id: "objeto",
    title: "Objeto do Serviço",
    content: (
      <>
        <p>
          O Cebolla.app é um <Highlight>portal editorial gratuito</Highlight> dedicado a conteúdos
          educativos sobre privacidade digital, criptografia, segurança da informação, meios de
          pagamento e ferramentas tecnológicas.
        </p>
        <p>
          <strong className="text-foreground">Não vendemos produtos ou serviços.</strong> Nossa
          monetização ocorre exclusivamente por meio de <Highlight>publicidade programática (Google
          AdSense)</Highlight>, links afiliados devidamente identificados e eventuais conteúdos
          patrocinados marcados como tal.
        </p>
      </>
    ),
  },
  {
    id: "elegibilidade",
    title: "Elegibilidade e Cadastro",
    content: (
      <>
        <p>
          Ao usar o site você declara ter <Highlight>pelo menos 18 anos de idade</Highlight> ou estar
          devidamente autorizado e representado por responsável legal. O uso por menores é
          expressamente vedado.
        </p>
        <p>
          Não é necessário cadastro para leitura do conteúdo. Ao inscrever-se em newsletter ou enviar
          formulário de contato, você concorda com o tratamento dos dados descritos em nossa Política
          de Privacidade.
        </p>
      </>
    ),
  },
  {
    id: "uso-permitido",
    title: "Uso Permitido e Proibido",
    content: (
      <>
        <p>Você concorda em utilizar o site apenas para fins lícitos e conforme estes Termos. É proibido:</p>
        <InfoCards
          items={[
            { title: "Reprodução não autorizada", text: "Copiar, republicar ou distribuir nossos artigos sem autorização escrita." },
            { title: "Engenharia reversa", text: "Descompilar, extrair código-fonte ou tentar burlar mecanismos de segurança." },
            { title: "Automação abusiva", text: "Utilizar robôs, scrapers ou ferramentas para sobrecarregar o site." },
            { title: "Fraude publicitária", text: "Clicar em anúncios de forma automatizada ou incentivar cliques indevidos." },
            { title: "Conteúdo ilícito", text: "Enviar mensagens com discurso de ódio, spam, phishing ou material ilegal." },
            { title: "Violação de direitos", text: "Infringir direitos autorais, marcas, privacidade ou dignidade de terceiros." },
          ]}
        />
        <Callout type="warning" title="Cliques inválidos em anúncios">
          O incentivo, o convite ou o próprio clique intencional em anúncios do Google AdSense viola as
          <Highlight> políticas do Google</Highlight> e pode resultar em suspensão do site. Não clique
          em anúncios por curiosidade nem peça a terceiros que cliquem.
        </Callout>
      </>
    ),
  },
  {
    id: "propriedade",
    title: "Propriedade Intelectual",
    content: (
      <>
        <p>
          Todo o conteúdo publicado — textos, imagens, ilustrações, logotipos, layout, código e marcas —
          é de titularidade do Cebolla.app ou de seus licenciadores, protegido pela{" "}
          <Highlight>Lei de Direitos Autorais (Lei nº 9.610/98)</Highlight> e pela{" "}
          <Highlight>Lei da Propriedade Industrial (Lei nº 9.279/96)</Highlight>.
        </p>
        <p>
          É permitido o compartilhamento de trechos curtos com atribuição e link para a fonte original.
          Qualquer uso comercial, tradução ou republicação integral exige autorização prévia por
          escrito.
        </p>
      </>
    ),
  },
  {
    id: "publicidade",
    title: "Publicidade e Monetização",
    content: (
      <>
        <p>
          Este site exibe anúncios do <Highlight>Google AdSense</Highlight> e pode incluir links
          afiliados. Os anúncios são personalizados com base em cookies, sujeitos ao seu consentimento
          conforme banner de cookies.
        </p>
        <BadgeList items={["Google AdSense", "Links afiliados sinalizados", "Conteúdo patrocinado identificado", "Sem venda direta"]} />
        <p>
          O Cebolla.app <strong className="text-foreground">não endossa</strong> automaticamente os
          produtos ou serviços anunciados. A responsabilidade pelo conteúdo publicitário é do respectivo
          anunciante. Ao clicar em anúncios ou links afiliados, você será redirecionado a sites de
          terceiros regidos por seus próprios termos e políticas.
        </p>
      </>
    ),
  },
  {
    id: "conteudo",
    title: "Natureza do Conteúdo",
    content: (
      <>
        <p>
          O conteúdo publicado tem finalidade <Highlight>informativa e educativa</Highlight>. Não constitui
          consultoria profissional, jurídica, financeira ou de segurança da informação. Antes de
          aplicar qualquer recomendação, avalie sua situação particular e, se necessário, consulte um
          profissional qualificado.
        </p>
        <Callout type="warning" title="Sem garantias absolutas">
          Nenhuma medida de segurança é infalível. Aplicar as práticas discutidas nos artigos não
          garante proteção absoluta contra ataques, vazamentos ou perdas.
        </Callout>
      </>
    ),
  },
  {
    id: "limitacao",
    title: "Limitação de Responsabilidade",
    content: (
      <>
        <p>Dentro dos limites permitidos por lei, o Cebolla.app não se responsabiliza por:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Indisponibilidade temporária, interrupções ou erros técnicos do site;</li>
          <li>Perdas ou danos decorrentes de uso indevido do conteúdo publicado;</li>
          <li>Ações, produtos, serviços ou conteúdo de terceiros anunciantes ou parceiros;</li>
          <li>Ataques cibernéticos, vírus ou códigos maliciosos originados de terceiros;</li>
          <li>Prejuízos indiretos, lucros cessantes ou danos consequenciais.</li>
        </ul>
      </>
    ),
  },
  {
    id: "links",
    title: "Links Externos",
    content: (
      <>
        <p>
          O site contém links para páginas externas. Não controlamos o conteúdo, as práticas de
          privacidade ou a segurança desses sites e não somos responsáveis por eles. Recomendamos ler
          os termos e políticas de cada destino visitado.
        </p>
      </>
    ),
  },
  {
    id: "suspensao",
    title: "Suspensão e Encerramento",
    content: (
      <>
        <p>
          Podemos, a qualquer momento e sem aviso prévio, <Highlight>suspender, bloquear ou encerrar</Highlight>{" "}
          o acesso de usuários que violarem estes Termos, praticarem atos ilegais ou comprometerem a
          integridade do site. Também podemos descontinuar total ou parcialmente o serviço a nosso
          critério.
        </p>
      </>
    ),
  },
  {
    id: "alteracoes",
    title: "Alterações dos Termos",
    content: (
      <>
        <p>
          Estes Termos podem ser atualizados periodicamente. A versão vigente estará sempre disponível
          nesta página. O uso continuado do site após alterações significa aceite das novas condições.
          Recomendamos revisão periódica.
        </p>
      </>
    ),
  },
  {
    id: "lei-foro",
    title: "Lei Aplicável e Foro",
    content: (
      <>
        <p>
          Estes Termos são regidos pelas leis da <Highlight>República Federativa do Brasil</Highlight>.
          Fica eleito o foro da comarca de João Pessoa/PB para dirimir quaisquer controvérsias, com
          renúncia a qualquer outro, por mais privilegiado que seja.
        </p>
        <Callout type="success" title="Resolução amigável">
          Antes de acionar o Judiciário, incentivamos a busca por uma solução amigável pelo e-mail{" "}
          <Highlight>contato@cebolla.app</Highlight>. Estamos abertos ao diálogo.
        </Callout>
      </>
    ),
  },
];

function Termos() {
  return (
    <LegalPage
      breadcrumbLabel="Termos de Uso"
      eyebrow="Documento Legal"
      title="Termos de Uso"
      intro="Regras claras e transparentes que regem sua navegação no Cebolla.app, incluindo direitos, deveres e a relação com nossa publicidade Google AdSense."
      updatedAt="16 de julho de 2026"
      sections={sections}
    />
  );
}
