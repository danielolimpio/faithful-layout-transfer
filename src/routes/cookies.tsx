import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Callout, Highlight, InfoCards, BadgeList, type LegalSection } from "@/components/LegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — Cebolla.app" },
      { name: "description", content: "Como o Cebolla.app usa cookies próprios e de terceiros (Google AdSense, Analytics) em conformidade com a LGPD e as políticas de consentimento do Google." },
    ],
  }),
  component: Cookies,
});

const sections: LegalSection[] = [
  {
    id: "o-que-sao",
    title: "O Que São Cookies",
    content: (
      <>
        <p>
          <Highlight>Cookies</Highlight> são pequenos arquivos de texto armazenados no seu dispositivo
          quando você visita um site. Eles permitem que o site reconheça seu navegador, guarde
          preferências e ofereça uma experiência mais relevante em visitas futuras.
        </p>
        <p>
          Além dos cookies, utilizamos tecnologias semelhantes como <Highlight>web beacons</Highlight>,
          <Highlight> pixels</Highlight> e <Highlight>local storage</Highlight>. Nesta política, todas
          essas tecnologias são tratadas conjuntamente sob o termo "cookies".
        </p>
      </>
    ),
  },
  {
    id: "por-que-usamos",
    title: "Por Que Utilizamos Cookies",
    content: (
      <>
        <p>Usamos cookies para os seguintes propósitos legítimos:</p>
        <InfoCards
          items={[
            { title: "Funcionamento essencial", text: "Manter o site operacional, seguro e responsivo." },
            { title: "Preferências", text: "Lembrar tema, idioma e escolhas de consentimento." },
            { title: "Analytics", text: "Compreender de forma agregada como o conteúdo é consumido." },
            { title: "Publicidade", text: "Exibir anúncios relevantes via Google AdSense e medir desempenho." },
          ]}
        />
      </>
    ),
  },
  {
    id: "categorias",
    title: "Categorias de Cookies",
    content: (
      <>
        <p>Classificamos os cookies em quatro categorias, seguindo o padrão internacional:</p>
        <div className="not-prose space-y-4 my-6">
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2 py-1 rounded bg-emerald-500 text-white">SEMPRE ATIVOS</span>
              <h4 className="font-bold text-foreground">Estritamente Necessários</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Indispensáveis para o funcionamento do site (sessão, segurança, balanceamento de carga).
              Dispensam consentimento por serem essenciais à prestação do serviço.
            </p>
          </div>
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2 py-1 rounded bg-primary text-primary-foreground">OPCIONAL</span>
              <h4 className="font-bold text-foreground">Desempenho e Analytics</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Google Analytics e ferramentas similares coletam dados agregados e anônimos sobre uso.
              Ajudam a melhorar conteúdo e experiência.
            </p>
          </div>
          <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2 py-1 rounded bg-yellow-500 text-white">OPCIONAL</span>
              <h4 className="font-bold text-foreground">Funcionalidade</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Guardam preferências como tema (claro/escuro), idioma e escolhas do banner de cookies.
            </p>
          </div>
          <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2 py-1 rounded bg-red-500 text-white">OPCIONAL</span>
              <h4 className="font-bold text-foreground">Publicidade e Terceiros</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Google AdSense e parceiros usam cookies para exibir anúncios personalizados e medir
              cliques, conversões e frequência.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "google-adsense",
    title: "Google AdSense e Cookie DART",
    content: (
      <>
        <p>
          Somos parceiros do programa <Highlight>Google AdSense</Highlight>. O Google, como fornecedor
          terceiro, utiliza cookies para veicular anúncios em nosso site — incluindo o{" "}
          <Highlight>cookie DART</Highlight>, que permite exibir anúncios com base em visitas anteriores
          a este e a outros sites da internet.
        </p>
        <Callout type="info" title="Suas escolhas">
          Você pode desativar o cookie DART e a personalização de anúncios do Google visitando{" "}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
            adssettings.google.com
          </a>. Você também pode gerenciar cookies de anúncios de outros fornecedores em{" "}
          <a href="https://youradchoices.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
            youradchoices.com
          </a>.
        </Callout>
        <p>
          Cumprimos a <Highlight>Política de Consentimento do Usuário da UE</Highlight> do Google:
          exibimos um banner de consentimento (CMP) antes de carregar anúncios personalizados. Se você
          recusar, poderemos exibir anúncios não personalizados baseados apenas em contexto.
        </p>
      </>
    ),
  },
  {
    id: "lista-cookies",
    title: "Lista de Cookies Principais",
    content: (
      <>
        <p>Os principais cookies que podem ser definidos no seu navegador incluem:</p>
        <div className="not-prose overflow-x-auto my-6 rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left px-4 py-3 font-bold">Cookie</th>
                <th className="text-left px-4 py-3 font-bold">Provedor</th>
                <th className="text-left px-4 py-3 font-bold">Finalidade</th>
                <th className="text-left px-4 py-3 font-bold">Duração</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-xs">_ga</td><td className="px-4 py-3">Google</td><td className="px-4 py-3 text-muted-foreground">Analytics — identifica visitantes únicos</td><td className="px-4 py-3">2 anos</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs">_gid</td><td className="px-4 py-3">Google</td><td className="px-4 py-3 text-muted-foreground">Analytics — sessões diárias</td><td className="px-4 py-3">24 horas</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs">IDE</td><td className="px-4 py-3">Google DoubleClick</td><td className="px-4 py-3 text-muted-foreground">AdSense — medição e personalização</td><td className="px-4 py-3">13 meses</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs">__gads</td><td className="px-4 py-3">Google</td><td className="px-4 py-3 text-muted-foreground">AdSense — frequência de anúncios</td><td className="px-4 py-3">13 meses</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs">cookie_consent</td><td className="px-4 py-3">Cebolla.app</td><td className="px-4 py-3 text-muted-foreground">Guarda suas escolhas no banner</td><td className="px-4 py-3">6 meses</td></tr>
              <tr><td className="px-4 py-3 font-mono text-xs">theme</td><td className="px-4 py-3">Cebolla.app</td><td className="px-4 py-3 text-muted-foreground">Preferência claro/escuro</td><td className="px-4 py-3">1 ano</td></tr>
            </tbody>
          </table>
        </div>
        <Callout type="warning" title="Lista não exaustiva">
          Parceiros publicitários podem definir cookies adicionais. A lista completa e atualizada de
          fornecedores está disponível no nosso banner de consentimento (CMP).
        </Callout>
      </>
    ),
  },
  {
    id: "gerenciar",
    title: "Como Gerenciar Cookies",
    content: (
      <>
        <p>Você tem controle total sobre os cookies. Existem três formas principais de gerenciá-los:</p>
        <InfoCards
          items={[
            { title: "Banner de consentimento", text: "Ao acessar o site, aceite, recuse ou personalize categorias no banner exibido." },
            { title: "Configurações do navegador", text: "Todos os navegadores permitem bloquear ou apagar cookies nas preferências." },
            { title: "Ferramentas do Google", text: "Gerencie diretamente com o Google em adssettings.google.com." },
          ]}
        />
        <BadgeList items={["Chrome", "Firefox", "Safari", "Edge", "Opera", "Brave"]} />
        <Callout type="warning" title="Impacto ao bloquear cookies">
          Bloquear cookies essenciais pode comprometer funcionalidades do site. Bloquear cookies de
          analytics ou publicidade não impede a navegação, mas pode tornar os anúncios menos relevantes.
        </Callout>
      </>
    ),
  },
  {
    id: "base-legal",
    title: "Base Legal (LGPD)",
    content: (
      <>
        <p>
          O uso de cookies não essenciais está condicionado ao seu <Highlight>consentimento livre,
          informado e inequívoco</Highlight>, nos termos do art. 7º, I, da LGPD. Cookies estritamente
          necessários são amparados pelo legítimo interesse (art. 7º, IX) para a operação segura do
          site.
        </p>
        <p>
          Seu consentimento pode ser revogado a qualquer momento clicando no ícone flutuante do banner
          de cookies ou entrando em contato pelo e-mail <Highlight>contato@cebolla.app</Highlight>.
        </p>
      </>
    ),
  },
  {
    id: "alteracoes",
    title: "Atualizações",
    content: (
      <>
        <p>
          Podemos atualizar esta Política de Cookies para refletir mudanças em tecnologias, parceiros
          ou legislação. A versão vigente estará sempre nesta página, com data no cabeçalho. Mudanças
          relevantes serão destacadas por meio do banner.
        </p>
      </>
    ),
  },
  {
    id: "contato",
    title: "Fale Conosco",
    content: (
      <>
        <p>
          Se tiver dúvidas sobre esta Política de Cookies, sobre como exercer seus direitos ou sobre
          nossos parceiros publicitários, envie e-mail para <Highlight>contato@cebolla.app</Highlight>.
        </p>
      </>
    ),
  },
];

function Cookies() {
  return (
    <LegalPage
      breadcrumbLabel="Política de Cookies"
      eyebrow="Documento Legal"
      title="Política de Cookies"
      intro="Detalhamento completo dos cookies e tecnologias similares utilizados pelo Cebolla.app, incluindo Google AdSense, em conformidade com LGPD e diretrizes do Google."
      updatedAt="16 de julho de 2026"
      sections={sections}
    />
  );
}
