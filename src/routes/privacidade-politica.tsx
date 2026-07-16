import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Callout, Highlight, InfoCards, BadgeList, type LegalSection } from "@/components/LegalPage";

export const Route = createFileRoute("/privacidade-politica")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Cebolla.app" },
      { name: "description", content: "Política de Privacidade do Cebolla.app em conformidade com a LGPD e políticas do Google AdSense: dados coletados, cookies, direitos do titular e contato do DPO." },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: PoliticaPrivacidade,
});

const sections: LegalSection[] = [
  {
    id: "introducao",
    title: "Introdução e Escopo",
    content: (
      <>
        <p>
          A presente Política de Privacidade descreve como o <Highlight>Cebolla.app</Highlight> ("nós", "nosso"
          ou "site") coleta, utiliza, armazena, compartilha e protege informações de visitantes
          ("você", "usuário" ou "titular") ao navegar em nosso portal de conteúdo sobre privacidade,
          criptografia, segurança digital, pagamentos e ferramentas.
        </p>
        <p>
          Este documento foi elaborado em conformidade com a{" "}
          <Highlight>Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD)</Highlight>, com o
          Marco Civil da Internet (Lei nº 12.965/2014) e com as diretrizes do Google, incluindo os
          requisitos do <Highlight>Google AdSense</Highlight> e as políticas de consentimento do usuário
          da UE (EU User Consent Policy).
        </p>
        <Callout type="info" title="Site informativo, sem venda de produtos">
          O Cebolla.app é um portal de conteúdo educativo. Não comercializamos produtos ou serviços
          diretamente. Nossa monetização ocorre exclusivamente por meio de publicidade programática
          (Google AdSense) e conteúdos patrocinados devidamente identificados.
        </Callout>
      </>
    ),
  },
  {
    id: "controlador",
    title: "Controlador de Dados e DPO",
    content: (
      <>
        <p>
          Para fins da LGPD, o controlador dos dados pessoais tratados neste site é o responsável pelo
          domínio <Highlight>cebolla.app</Highlight>. O Encarregado pelo Tratamento de Dados (DPO) pode
          ser contatado pelo e-mail <Highlight>contato@cebolla.app</Highlight>.
        </p>
        <InfoCards
          items={[
            { title: "Controlador", text: "Cebolla.app — Portal editorial sobre privacidade e segurança digital." },
            { title: "Encarregado (DPO)", text: "Responde solicitações da LGPD em até 15 dias úteis por e-mail." },
            { title: "Base legal principal", text: "Legítimo interesse, consentimento e cumprimento de obrigação legal." },
            { title: "Público-alvo", text: "Usuários brasileiros maiores de 18 anos interessados em segurança digital." },
          ]}
        />
      </>
    ),
  },
  {
    id: "dados-coletados",
    title: "Quais Dados Coletamos",
    content: (
      <>
        <p>Coletamos apenas o mínimo necessário para operar o site, exibir anúncios e melhorar a experiência:</p>
        <BadgeList
          items={[
            "Endereço IP",
            "Tipo de navegador",
            "Sistema operacional",
            "Páginas visitadas",
            "Tempo de permanência",
            "Fonte de tráfego",
            "Preferências de consentimento",
            "Dados de formulário (quando enviado)",
          ]}
        />
        <p>
          <strong className="text-foreground">Dados fornecidos por você:</strong> nome e e-mail informados
          voluntariamente em formulários de contato ou newsletter.
        </p>
        <p>
          <strong className="text-foreground">Dados coletados automaticamente:</strong> por meio de
          cookies, pixels e tecnologias similares, incluindo dados de navegação, dispositivo e
          localização aproximada (baseada em IP).
        </p>
        <Callout type="warning" title="Não coletamos dados sensíveis">
          Não solicitamos nem tratamos dados sensíveis como origem racial, convicção religiosa,
          opinião política, saúde, biometria ou orientação sexual. Nunca envie tais informações por
          nossos formulários.
        </Callout>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "Finalidades do Tratamento",
    content: (
      <>
        <p>Tratamos seus dados pessoais para as seguintes finalidades legítimas:</p>
        <InfoCards
          items={[
            { title: "Operação do site", text: "Entregar conteúdo, garantir segurança e prevenir fraudes ou abusos." },
            { title: "Análise estatística", text: "Compreender o comportamento dos leitores por meio do Google Analytics." },
            { title: "Publicidade personalizada", text: "Exibir anúncios relevantes via Google AdSense, respeitando seu consentimento." },
            { title: "Comunicação", text: "Responder mensagens enviadas via formulário e enviar newsletter opt-in." },
            { title: "Cumprimento legal", text: "Atender obrigações legais, regulatórias e ordens judiciais válidas." },
            { title: "Melhoria contínua", text: "Aprimorar conteúdo, usabilidade e desempenho do portal." },
          ]}
        />
      </>
    ),
  },
  {
    id: "base-legal",
    title: "Bases Legais (LGPD Art. 7º e 11)",
    content: (
      <>
        <p>Todo tratamento de dados possui base legal específica prevista na LGPD:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><Highlight>Consentimento</Highlight> — para cookies não essenciais, anúncios personalizados e newsletter.</li>
          <li><Highlight>Legítimo interesse</Highlight> — para métricas anônimas, segurança e prevenção de fraude.</li>
          <li><Highlight>Execução de contrato</Highlight> — quando você usa recursos como formulário de contato.</li>
          <li><Highlight>Cumprimento de obrigação legal</Highlight> — retenção mínima de logs conforme Marco Civil.</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies-adsense",
    title: "Cookies, Google AdSense e Terceiros",
    content: (
      <>
        <p>
          Utilizamos cookies próprios e de terceiros. O detalhamento completo está disponível na nossa{" "}
          <a href="/cookies" className="text-primary font-semibold underline underline-offset-2">Política de Cookies</a>.
          Terceiros que podem colocar cookies incluem:
        </p>
        <BadgeList items={["Google AdSense", "Google Analytics", "Google Tag Manager", "Cloudflare", "Parceiros publicitários certificados"]} />
        <Callout type="info" title="Aviso Google AdSense">
          O Google, como fornecedor terceiro, utiliza cookies para veicular anúncios em nosso site. O
          uso do <Highlight>cookie DART</Highlight> permite ao Google exibir anúncios com base em visitas
          anteriores a este e a outros sites. Você pode desativar o uso do cookie DART acessando a{" "}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="underline">
            página de configurações de anúncios do Google
          </a>.
        </Callout>
        <p>
          Antes da veiculação de anúncios personalizados, solicitamos seu consentimento por meio de um
          banner de cookies (CMP), conforme exigido pela política de consentimento do usuário da UE do
          Google e pela LGPD.
        </p>
      </>
    ),
  },
  {
    id: "compartilhamento",
    title: "Compartilhamento de Dados",
    content: (
      <>
        <p>
          Não vendemos, alugamos ou comercializamos seus dados pessoais. O compartilhamento ocorre
          exclusivamente com operadores necessários à operação do site, sob contrato de confidencialidade
          e conformidade com a LGPD:
        </p>
        <InfoCards
          items={[
            { title: "Provedores de hospedagem", text: "Cloudflare e Hostinger para servir o site com desempenho e segurança." },
            { title: "Google", text: "AdSense, Analytics e Tag Manager para publicidade e métricas." },
            { title: "Serviços de e-mail", text: "Envio de newsletter e respostas a formulários de contato." },
            { title: "Autoridades", text: "Quando exigido por lei, ordem judicial ou requisição legítima de autoridades." },
          ]}
        />
      </>
    ),
  },
  {
    id: "direitos-titular",
    title: "Seus Direitos como Titular",
    content: (
      <>
        <p>
          A LGPD garante a você, titular dos dados, uma série de direitos que podem ser exercidos
          gratuitamente a qualquer momento:
        </p>
        <InfoCards
          items={[
            { title: "Confirmação e acesso", text: "Saber se tratamos seus dados e obter cópia deles." },
            { title: "Correção", text: "Corrigir dados incompletos, inexatos ou desatualizados." },
            { title: "Anonimização ou eliminação", text: "Solicitar anonimização, bloqueio ou eliminação de dados desnecessários." },
            { title: "Portabilidade", text: "Receber seus dados em formato estruturado e interoperável." },
            { title: "Revogação do consentimento", text: "Retirar consentimento a qualquer momento, sem prejuízo de tratamento anterior." },
            { title: "Oposição", text: "Opor-se a tratamento realizado com base em outra hipótese legal." },
          ]}
        />
        <Callout type="success" title="Como exercer seus direitos">
          Envie um e-mail para <Highlight>contato@cebolla.app</Highlight> descrevendo o direito que
          deseja exercer. Podemos solicitar informações adicionais para confirmar sua identidade e
          responderemos em até 15 dias úteis.
        </Callout>
      </>
    ),
  },
  {
    id: "seguranca",
    title: "Segurança e Retenção",
    content: (
      <>
        <p>
          Aplicamos medidas técnicas e administrativas para proteger seus dados contra acesso não
          autorizado, destruição, perda, alteração ou vazamento: <Highlight>criptografia TLS/HTTPS</Highlight>,
          firewall de aplicação, controle de acesso, backups regulares e monitoramento contínuo.
        </p>
        <p>
          Os dados são retidos pelo tempo necessário ao cumprimento das finalidades para as quais foram
          coletados ou pelo prazo mínimo legal (por exemplo, logs de acesso por 6 meses conforme o
          Marco Civil da Internet).
        </p>
        <Callout type="warning" title="Nenhum sistema é 100% seguro">
          Apesar de nossos esforços, nenhuma transmissão pela internet é totalmente inviolável. Em caso
          de incidente relevante, notificaremos você e a ANPD conforme exigido pela LGPD.
        </Callout>
      </>
    ),
  },
  {
    id: "menores",
    title: "Crianças e Adolescentes",
    content: (
      <>
        <p>
          O conteúdo do Cebolla.app é destinado a maiores de 18 anos. Não coletamos intencionalmente
          dados de crianças ou adolescentes. Caso identifiquemos coleta acidental, os dados serão
          eliminados. Pais e responsáveis podem solicitar a exclusão pelo e-mail do DPO.
        </p>
      </>
    ),
  },
  {
    id: "internacional",
    title: "Transferência Internacional",
    content: (
      <>
        <p>
          Alguns operadores (como Google e Cloudflare) processam dados fora do Brasil. Nesses casos,
          garantimos que a transferência ocorra apenas para países com nível adequado de proteção ou
          mediante cláusulas contratuais que assegurem os direitos previstos na LGPD.
        </p>
      </>
    ),
  },
  {
    id: "alteracoes",
    title: "Alterações desta Política",
    content: (
      <>
        <p>
          Podemos atualizar esta Política periodicamente para refletir mudanças legais, técnicas ou de
          negócio. A versão vigente estará sempre disponível nesta página, com a data da última
          atualização no cabeçalho. Alterações materiais serão comunicadas de forma destacada.
        </p>
      </>
    ),
  },
  {
    id: "contato",
    title: "Contato e Autoridade",
    content: (
      <>
        <p>
          Dúvidas, solicitações ou reclamações relacionadas a esta Política ou ao tratamento de dados
          devem ser enviadas para <Highlight>contato@cebolla.app</Highlight>. Você também pode contatar
          a <Highlight>Autoridade Nacional de Proteção de Dados (ANPD)</Highlight> em{" "}
          <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-primary underline">
            gov.br/anpd
          </a>.
        </p>
      </>
    ),
  },
];

function PoliticaPrivacidade() {
  return (
    <LegalPage
      breadcrumbLabel="Política de Privacidade"
      eyebrow="Documento Legal"
      title="Política de Privacidade"
      intro="Transparência total sobre como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD e as diretrizes do Google AdSense."
      updatedAt="16 de julho de 2026"
      sections={sections}
    />
  );
}
