export const siteUrl = "https://emanoellamaso.adv.br";

export const site = {
  name: "Emanoella Krauzer Maso",
  eyebrow: "Advocacia & Consultoria",
  whatsappDisplay: "(49) 99905-6160",
  whatsappUrl: "https://wa.me/554999056160",
  email: "contato@emanoellamaso.adv.br",
  linkedinUrl: "https://www.linkedin.com/in/emanoella-maso/",
  linkedinHandle: "/emanoella-maso",
  location: "Florianópolis/SC",
  locationLine: "Florianópolis/SC · Atendimento presencial e online",
};

export type Area = {
  slug: string;
  number: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  description: string;
  headline: string;
  headlineHighlight: string;
  intro: string[];
  services: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export const areas: Area[] = [
  {
    slug: "direito-previdenciario",
    number: "01",
    title: "Direito Previdenciário",
    seoTitle: "Advogada Previdenciária em Florianópolis · INSS e Aposentadorias",
    metaDescription:
      "Advogada previdenciária em Florianópolis/SC. Aposentadorias junto ao INSS, auxílio-doença, auxílio-acidente, pensão por morte, Revisão da Vida Toda e planejamento previdenciário. Atendimento presencial e online.",
    description:
      "Aposentadorias junto ao INSS, auxílio-doença e auxílio-acidente, pensões, Revisão da Vida Toda e correção monetária do FGTS.",
    headline: "O benefício que você construiu,",
    headlineHighlight: "garantido com técnica.",
    intro: [
      "Décadas de contribuição merecem um benefício calculado corretamente. Atuo junto ao INSS e à Justiça Federal para garantir aposentadorias, auxílios e pensões — desde o requerimento administrativo até a revisão de benefícios já concedidos.",
      "Cada caso começa com a análise detalhada do seu histórico contributivo (CNIS), identificando vínculos não computados, períodos especiais e o melhor momento para se aposentar.",
    ],
    services: [
      {
        title: "Aposentadorias",
        description:
          "Por idade, por tempo de contribuição, especial e da pessoa com deficiência — análise das regras de transição da Reforma da Previdência para identificar o caminho mais vantajoso.",
      },
      {
        title: "Auxílio-doença e auxílio-acidente",
        description:
          "Concessão e restabelecimento de benefícios por incapacidade, inclusive quando o INSS nega ou cessa o benefício indevidamente.",
      },
      {
        title: "Pensão por morte",
        description:
          "Orientação e requerimento para dependentes, incluindo casos de união estável e dependência econômica a comprovar.",
      },
      {
        title: "Revisão de benefícios",
        description:
          "Revisão da Vida Toda e demais teses revisionais para corrigir benefícios calculados a menor pelo INSS.",
      },
      {
        title: "Planejamento previdenciário",
        description:
          "Estudo técnico para quem ainda vai se aposentar: quando contribuir, por qual alíquota e quando dar entrada para maximizar o benefício.",
      },
      {
        title: "FGTS",
        description:
          "Ações de correção monetária do FGTS e levantamento de valores em situações previstas em lei.",
      },
    ],
    faq: [
      {
        question: "O INSS negou meu benefício. O que posso fazer?",
        answer:
          "A negativa do INSS não é o fim do caminho. É possível apresentar recurso administrativo ou ingressar com ação judicial, conforme a estratégia mais adequada ao caso. Muitos benefícios negados na via administrativa são concedidos na Justiça com a documentação e os argumentos corretos.",
      },
      {
        question: "O que é a Revisão da Vida Toda?",
        answer:
          "É uma tese revisional que permite incluir contribuições anteriores a julho de 1994 no cálculo do benefício, o que pode aumentar o valor da aposentadoria de quem tinha salários mais altos antes do Plano Real. A viabilidade precisa ser analisada caso a caso, com cálculo prévio.",
      },
      {
        question: "Quanto tempo demora um processo previdenciário?",
        answer:
          "Varia conforme a via escolhida: requerimentos administrativos costumam levar alguns meses, enquanto ações judiciais podem levar de um a três anos, dependendo da complexidade e da necessidade de perícia. Em todos os cenários, você é informado de cada andamento.",
      },
      {
        question: "Atende fora de Florianópolis?",
        answer:
          "Sim. Processos previdenciários tramitam de forma eletrônica, o que permite atender clientes de todo o Brasil de forma online, com a mesma proximidade do atendimento presencial.",
      },
    ],
  },
  {
    slug: "direito-do-consumidor",
    number: "02",
    title: "Direito do Consumidor",
    seoTitle: "Advogada de Direito do Consumidor em Florianópolis",
    metaDescription:
      "Advogada de direito do consumidor em Florianópolis/SC. Cobranças indevidas, negativação indevida no SPC/Serasa, danos morais e materiais, problemas com bancos, telefonia e planos de saúde.",
    description:
      "Relações de consumo, cobranças indevidas, indenizações por danos material e moral e recursos administrativos.",
    headline: "Relações de consumo com",
    headlineHighlight: "respeito e reparação.",
    intro: [
      "O Código de Defesa do Consumidor existe para equilibrar a relação entre você e as empresas. Quando esse equilíbrio é quebrado — uma cobrança indevida, um nome negativado sem razão, um serviço que não foi prestado — a lei garante reparação.",
      "Atuo na resolução extrajudicial e judicial de conflitos de consumo, buscando o caminho mais rápido para restabelecer o seu direito e, quando cabível, a indenização por danos morais e materiais.",
    ],
    services: [
      {
        title: "Cobranças indevidas",
        description:
          "Contestação de cobranças não reconhecidas, duplicadas ou abusivas, com pedido de repetição do indébito — a devolução em dobro prevista no CDC.",
      },
      {
        title: "Negativação indevida",
        description:
          "Retirada do nome do SPC/Serasa quando a inscrição é indevida e indenização por dano moral decorrente da negativação.",
      },
      {
        title: "Bancos e instituições financeiras",
        description:
          "Tarifas abusivas, contratos não reconhecidos, fraudes, golpes via Pix e empréstimos consignados não autorizados.",
      },
      {
        title: "Telefonia, internet e energia",
        description:
          "Cobranças em desacordo com o contratado, suspensão indevida do serviço e descumprimento de oferta.",
      },
      {
        title: "Planos de saúde",
        description:
          "Negativas indevidas de cobertura, reajustes abusivos e rescisões unilaterais de contrato.",
      },
      {
        title: "Compras e serviços",
        description:
          "Produtos com defeito, atraso ou não entrega, descumprimento de garantia e problemas em compras online.",
      },
    ],
    faq: [
      {
        question: "Meu nome foi negativado indevidamente. Tenho direito a indenização?",
        answer:
          "Em regra, sim. A inscrição indevida em cadastros como SPC e Serasa gera dano moral presumido, segundo o STJ. Além da retirada do nome, é possível pleitear indenização. O primeiro passo é reunir o comprovante da negativação e a prova de que a dívida não existe ou já foi paga.",
      },
      {
        question: "Fui cobrado por algo que não contratei. O que fazer?",
        answer:
          "Guarde os comprovantes da cobrança e registre reclamação junto à empresa. Se não houver solução, é possível exigir judicialmente o cancelamento, a devolução em dobro do que foi pago indevidamente e, conforme o caso, indenização.",
      },
      {
        question: "Vale a pena processar por valores pequenos?",
        answer:
          "Muitas vezes, sim. Causas de consumo de menor valor podem tramitar nos Juizados Especiais, com procedimento mais rápido e sem custas iniciais. Na consulta, avaliamos juntos se o caso compensa e qual a via mais eficiente.",
      },
      {
        question: "Quanto custa a consulta?",
        answer:
          "Entre em contato pelo WhatsApp para conversarmos sobre o seu caso. Na primeira conversa, explico como funciona o atendimento e os honorários, sempre com transparência e sem surpresas.",
      },
    ],
  },
  {
    slug: "direito-civil",
    number: "03",
    title: "Direito Civil",
    seoTitle: "Advogada de Direito Civil em Florianópolis · Contratos e Família",
    metaDescription:
      "Advogada de direito civil em Florianópolis/SC. Contratos, responsabilidade civil e indenizações, questões de família — divórcio, pensão alimentícia, inventário — e proteção do patrimônio.",
    description:
      "Contratos, responsabilidade civil, questões de família e patrimônio, com acompanhamento próximo em cada etapa.",
    headline: "Segurança jurídica para",
    headlineHighlight: "as decisões da sua vida.",
    intro: [
      "O Direito Civil acompanha os momentos mais importantes da vida: um contrato relevante, a compra de um imóvel, um casamento ou divórcio, uma herança. São decisões que pedem orientação técnica antes, durante e depois.",
      "Atuo de forma consultiva — prevenindo litígios com contratos bem redigidos — e contenciosa, defendendo seus interesses quando o conflito é inevitável, sempre com acompanhamento próximo em cada etapa.",
    ],
    services: [
      {
        title: "Contratos",
        description:
          "Elaboração, análise e revisão de contratos de compra e venda, locação, prestação de serviços e parcerias — prevenindo conflitos antes que aconteçam.",
      },
      {
        title: "Responsabilidade civil",
        description:
          "Ações de indenização por danos materiais, morais e estéticos, tanto na defesa de quem sofreu o dano quanto de quem é cobrado indevidamente.",
      },
      {
        title: "Família",
        description:
          "Divórcio consensual e litigioso, pensão alimentícia, guarda e regulamentação de convivência, reconhecimento e dissolução de união estável.",
      },
      {
        title: "Sucessões e inventário",
        description:
          "Inventário judicial e extrajudicial, partilha de bens e testamentos, conduzidos com a sensibilidade que o momento exige.",
      },
      {
        title: "Patrimônio e imóveis",
        description:
          "Regularização de imóveis, usucapião, cobranças e execuções, e proteção patrimonial preventiva.",
      },
      {
        title: "Mediação de conflitos",
        description:
          "Busca de soluções consensuais antes do litígio — mais rápidas, menos custosas e menos desgastantes para todos os envolvidos.",
      },
    ],
    faq: [
      {
        question: "O divórcio precisa ir à Justiça?",
        answer:
          "Nem sempre. Quando há consenso e não existem filhos menores ou incapazes, o divórcio pode ser feito em cartório, de forma rápida. Havendo filhos menores ou desacordo, a via judicial é necessária — e a mediação pode encurtar bastante o caminho.",
      },
      {
        question: "Como funciona o inventário?",
        answer:
          "O inventário formaliza a transmissão dos bens de quem faleceu aos herdeiros. Pode ser extrajudicial (em cartório, quando todos os herdeiros são capazes e estão de acordo) ou judicial. O prazo legal para abertura é de 60 dias após o falecimento — buscar orientação cedo evita multas sobre o imposto.",
      },
      {
        question: "Preciso de advogado para revisar um contrato?",
        answer:
          "Não é obrigatório, mas é altamente recomendável em contratos relevantes — imóveis, sociedades, prestações de serviço de valor significativo. A revisão preventiva custa uma fração do que custa um litígio para desfazer um contrato mal redigido.",
      },
      {
        question: "Qual o prazo para pedir indenização?",
        answer:
          "Em regra, a pretensão de reparação civil prescreve em 3 anos, mas há prazos diferentes conforme a situação. Por isso, é importante buscar orientação assim que o dano ocorre, preservando provas e evitando a perda do direito.",
      },
    ],
  },
];

export const values = [
  {
    numeral: "i.",
    title: "Justiça e Transparência",
    description: "Comunicação clara e honesta em cada decisão do seu processo.",
  },
  {
    numeral: "ii.",
    title: "Sigilo e Segurança",
    description: "Confidencialidade absoluta e cuidado com as suas informações.",
  },
  {
    numeral: "iii.",
    title: "Estudo e Dedicação",
    description: "Atualização constante e preparo técnico para defender o seu caso.",
  },
];
