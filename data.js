const quizData = [
  {
    "id": 1,
    "question": "Um produtor rural de Mato Grosso está decidindo como ceder o uso de sua terra para terceiros. Qual é a principal diferença jurídica e contábil que ele deve observar entre o Arrendamento e a Parceria Rural?",
    "options": {
      "A": "No Arrendamento, ocorre a cessão do uso da terra mediante um aluguel de retribuição certa, sem partilha de riscos climáticos; na Parceria, os riscos, custos e frutos são divididos entre proprietário e parceiro.",
      "B": "Ambos possuem a mesma tributação no Imposto de Renda, não havendo diferença estratégica para o dono da terra.",
      "C": "No Arrendamento, o proprietário assume os riscos de frustração climática junto com o arrendatário; na Parceria, o risco é exclusivo de quem planta.",
      "D": "A Parceria Rural é exclusiva para empresas (CNPJ), enquanto o Arrendamento só pode ser firmado por produtores pessoas físicas.",
      "E": "No Arrendamento, o pagamento é feito por uma porcentagem obrigatória da colheita; na Parceria, o pagamento é sempre fixo em dinheiro."
    },
    "correct": "A"
  },
  {
    "id": 2,
    "question": "Um fazendeiro decide vender uma propriedade que atualmente está arrendada para um vizinho. Perante a legislação agrária, qual o procedimento obrigatório que o proprietário deve adotar?",
    "options": {
      "A": "Ignorar o contrato vigente, visto que a venda cancela automaticamente arrendamentos rurais.",
      "B": "Pagar uma multa de 50% do valor do imóvel para o atual ocupante.",
      "C": "Oferecer a propriedade primeiro ao arrendatário, respeitando seu direito de preferência, mediante notificação formal com prazo de 30 dias.",
      "D": "Notificar o arrendatário para que ele desocupe a área imediatamente.",
      "E": "Transferir 10% do valor da venda para o arrendatário como forma de indenização."
    },
    "correct": "C"
  },
  {
    "id": 3,
    "question": "Para estar em conformidade ambiental, as propriedades rurais precisam aderir ao Cadastro Ambiental Rural (CAR). Sobre este instrumento governamental, assinale a alternativa correta:",
    "options": {
      "A": "É um documento exigido apenas para produtores que operam com exportação internacional.",
      "B": "A inscrição no CAR garante imunidade total contra multas futuras do IBAMA.",
      "C": "Apenas o agronegócio de grande porte (acima de 1.000 hectares) possui a obrigatoriedade do registro.",
      "D": "Trata-se de um registro público eletrônico nacional, de caráter obrigatório para todos os imóveis rurais, visando integrar as informações ambientais.",
      "E": "Substitui definitivamente a Matrícula do Imóvel no Cartório para fins de comprovação de posse."
    },
    "correct": "D"
  },
  {
    "id": 4,
    "question": "A legislação ambiental brasileira divide as áreas de proteção dentro das fazendas. Qual é a distinção técnica e legal fundamental entre a Área de Preservação Permanente (APP) e a Reserva Legal (RL)?",
    "options": {
      "A": "Ambas as áreas podem ser totalmente desmatadas mediante o pagamento de taxas compensatórias anuais.",
      "B": "A APP foca na função ecológica sensível do local (como nascentes e margens de rios); já a Reserva Legal é um percentual da área total da fazenda destinado à conservação com uso sustentável.",
      "C": "A Reserva Legal é cobrada apenas em terras do governo, enquanto a APP se aplica a propriedades privadas.",
      "D": "A APP só tem validade no bioma Amazônico, ao passo que a RL abrange o país inteiro.",
      "E": "Na prática jurídica não há diferença, sendo os dois termos sinônimos absolutos."
    },
    "correct": "B"
  },
  {
    "id": 5,
    "question": "Um grupo de investidores adquire uma fazenda e descobre que há um passivo ambiental (desmatamento ilegal) causado pelo dono anterior. Segundo o Direito Ambiental Brasileiro, como funciona a responsabilidade civil neste cenário de compra e venda?",
    "options": {
      "A": "É subjetiva, sendo necessário provar que o novo comprador ajudou a desmatar.",
      "B": "Fica limitada ao valor de avaliação da terra nua estipulada no ITR.",
      "C": "Extingue-se automaticamente após 5 anos contados da data da infração.",
      "D": "É restrita ao governo, que não cumpriu seu dever de fiscalizar o antigo dono.",
      "E": "É objetiva e propter rem (adere à coisa), significando que o novo dono herda o passivo e a obrigação de recuperar a área degradada."
    },
    "correct": "E"
  },
  {
    "id": 6,
    "question": "Durante a auditoria de uma empresa agrícola, o contador verifica que a fazenda sofreu uma autuação milionária por supressão de vegetação nativa sem licença, com alta probabilidade de condenação. Aplicando o CPC 25, qual é a atitude correta no Balanço Patrimonial?",
    "options": {
      "A": "Reconhecer o passivo provável registrando uma provisão para contingências ambientais, o que reduzirá o patrimônio líquido.",
      "B": "Ignorar o fato até que o processo transite em julgado no STF.",
      "C": "Registrar o valor como uma linha de lucro contingente futuro.",
      "D": "Ocultar a informação para não inviabilizar financiamentos bancários de curto prazo.",
      "E": "Abater o valor integral do passivo diretamente no Imposto de Renda do exercício seguinte."
    },
    "correct": "A"
  },
  {
    "id": 7,
    "question": "Em uma agroindústria estruturada, como uma usina de etanol, o Tribunal Superior do Trabalho (TST) utiliza qual critério principal para diferenciar e enquadrar corretamente um funcionário como trabalhador rural ou trabalhador urbano?",
    "options": {
      "A": "A modalidade de pagamento (se recebe insalubridade ou não).",
      "B": "O sindicato ao qual o trabalhador decidiu se associar no momento da contratação.",
      "C": "A atividade preponderante do empregador combinada com o local específico da prestação de serviço (ex: tratorista na lavoura é rural; operador na fábrica é urbano).",
      "D": "O grau de instrução escolar exigido para a vaga.",
      "E": "A localização física do escritório administrativo (se urbano ou rural)."
    },
    "correct": "C"
  },
  {
    "id": 8,
    "question": "Para que um produtor rural pessoa física possa gerir sua folha de pagamento e contratar empregados de maneira regular, recolhendo encargos sem a necessidade burocrática de abrir um CNPJ, ele utiliza um cadastro governamental específico. Qual é esse registro?",
    "options": {
      "A": "CAR (Cadastro Ambiental Rural).",
      "B": "ITR (Imposto Territorial Rural).",
      "C": "DAP (Declaração de Aptidão ao Pronaf).",
      "D": "CAEPF (Cadastro de Atividade Econômica da Pessoa Física).",
      "E": "CCIR (Certificado de Cadastro de Imóvel Rural)."
    },
    "correct": "D"
  },
  {
    "id": 9,
    "question": "O 'Contrato de Safra' é uma ferramenta de flexibilização trabalhista criada para o campo. Sua principal vantagem e característica jurídica é:",
    "options": {
      "A": "Ter uma data calendário rígida (como 31 de dezembro) que não pode ser alterada mesmo se a safra atrasar.",
      "B": "Ser um contrato de prazo determinado atrelado às variações estacionais (duração da colheita), que isenta o empregador do aviso prévio e da multa de 40% do FGTS em seu término.",
      "C": "Exigir que o empregado permaneça trabalhando na manutenção das máquinas após a colheita.",
      "D": "Ter duração perpétua, não gerando vínculos empregatícios.",
      "E": "Ser utilizado unicamente no cultivo da soja."
    },
    "correct": "B"
  },
  {
    "id": 10,
    "question": "Devido às jornadas que frequentemente se estendem no campo, a lei fixou parâmetros próprios para o Adicional Noturno na agricultura (lavoura), que difere das regras urbanas. Assinale a alternativa que indica o horário e o percentual corretos:",
    "options": {
      "A": "Das 22h às 06h, adicional de 50%.",
      "B": "Das 22h às 05h, adicional de 20%.",
      "C": "Das 20h às 04h, adicional de 25%.",
      "D": "No meio rural não incide adicional noturno por determinação constitucional.",
      "E": "Das 21h às 05h, adicional de 25%."
    },
    "correct": "E"
  },
  {
    "id": 11,
    "question": "Muitas propriedades rurais fornecem moradia e alimentação para facilitar a retenção de seus trabalhadores. A legislação permite descontar parte do salário do empregado rural por essas utilidades, desde que autorizado, respeitando os seguintes limites máximos:",
    "options": {
      "A": "20% para moradia e 25% para alimentação.",
      "B": "10% para moradia e 15% para alimentação.",
      "C": "A lei proíbe terminantemente qualquer desconto salarial por fornecimento de utilidades básicas.",
      "D": "30% para moradia e 30% para alimentação.",
      "E": "50% somados entre moradia e alimentação."
    },
    "correct": "A"
  },
  {
    "id": 12,
    "question": "A Norma Regulamentadora nº 31 (NR-31) é severa quanto ao uso de Equipamentos de Proteção Individual (EPI) na aplicação de defensivos. Em uma fiscalização do Ministério do Trabalho, qual é a principal prova exigida da empresa para atestar o fornecimento adequado?",
    "options": {
      "A": "O receituário agronômico preenchido pelo engenheiro responsável.",
      "B": "A nota fiscal que atesta o volume de máscaras e luvas compradas pela fazenda.",
      "C": "A Ficha de Entrega de EPI, individualizada, devidamente assinada e com a data de recebimento do trabalhador.",
      "D": "Um termo verbal coletivo gravado em vídeo.",
      "E": "O contrato de prestação de serviços do médico do trabalho (PCMSO)."
    },
    "correct": "C"
  },
  {
    "id": 13,
    "question": "Historicamente, o deslocamento do trabalhador fornecido pelo fazendeiro gerava um grande passivo trabalhista. Com a Reforma Trabalhista (Lei 13.467/2017), como ficaram as regras sobre as Horas In Itinere?",
    "options": {
      "A": "Passaram a integrar o adicional de periculosidade.",
      "B": "O produtor ficou terminantemente proibido de fornecer transporte próprio, devendo contratar linhas públicas.",
      "C": "Passaram a ser pagas em dobro em vias não asfaltadas.",
      "D": "Extinguiu-se a obrigatoriedade de pagamento, deixando o tempo de trajeto de compor a jornada de trabalho remunerada.",
      "E": "Geram estabilidade temporária de emprego proporcional ao tempo de viagem."
    },
    "correct": "D"
  },
  {
    "id": 14,
    "question": "Na busca por eficiência, um fazendeiro terceiriza a colheita de sua produção para uma empresa prestadora de serviços, a qual desaparece sem pagar os salários da equipe braçal. Diante disso, o dono da fazenda:",
    "options": {
      "A": "Não possui responsabilidade alguma, afinal, as carteiras de trabalho foram assinadas pela terceirizada.",
      "B": "Assume a responsabilidade subsidiária, o que significa que sofrerá execuções e bloqueios patrimoniais na Justiça do Trabalho caso o terceirizado não quite a dívida.",
      "C": "Perderá o direito ao Cadastro Ambiental Rural.",
      "D": "Transfere o problema automaticamente para o sindicato patronal resolver.",
      "E": "Deve ser preso preventivamente por formação de quadrilha."
    },
    "correct": "B"
  },
  {
    "id": 15,
    "question": "A fiscalização moderna para o combate ao trabalho análogo à escravidão não busca apenas flagrantes físicos de restrição de liberdade (correntes e capatazes armados). A infração se caracteriza fortemente quando há presença de:",
    "options": {
      "A": "Falta de retenção do imposto de renda na fonte.",
      "B": "Erros pontuais no recolhimento do FGTS nos últimos dois meses.",
      "C": "Pagamento da remuneração mediante transferência bancária em vez de dinheiro vivo.",
      "D": "Demissão em massa durante o período de entressafra.",
      "E": "Submissão a jornada exaustiva, condições degradantes de higiene e moradia, além de servidão por dívidas contraídas no próprio armazém da fazenda."
    },
    "correct": "E"
  },
  {
    "id": 16,
    "question": "O Art. 243 da Constituição Federal do Brasil impõe uma das sanções mais duras e definitivas do nosso ordenamento jurídico ao proprietário de terras flagrado com exploração de trabalho escravo. Essa pena máxima resulta na:",
    "options": {
      "A": "Expropriação (perda) da propriedade rural, sem qualquer tipo de indenização ao dono, destinando-se a área ao programa de reforma agrária.",
      "B": "Proibição de acessar crédito em bancos públicos pelo prazo de 5 anos.",
      "C": "Interdição parcial da fazenda, permitindo apenas a colheita do que já estava plantado.",
      "D": "Multa que confisca 10% do faturamento bruto da safra anual.",
      "E": "Suspensão dos direitos políticos do fazendeiro."
    },
    "correct": "A"
  },
  {
    "id": 17,
    "question": "Para que um banco de investimento aceite uma grande propriedade rural como garantia sólida (hipoteca ou alienação fiduciária) na liberação de milhões em crédito, o único documento aceito para comprovar a segurança jurídica da posse e titularidade é:",
    "options": {
      "A": "A guia de pagamento atualizada do ITR.",
      "B": "O Cadastro Ambiental Rural validado pela Secretaria de Meio Ambiente.",
      "C": "A Matrícula expedida e atualizada pelo Cartório de Registro de Imóveis.",
      "D": "O 'Contrato de Gaveta' registrado em cartório de notas.",
      "E": "O laudo de avaliação topográfica do engenheiro."
    },
    "correct": "C"
  },
  {
    "id": 18,
    "question": "A Cédula de Produto Rural (CPR) Física revolucionou o financiamento privado no agronegócio brasileiro. Estruturalmente, o que esse título representa para o mercado?",
    "options": {
      "A": "Uma debênture governamental que perdoa dívidas agrícolas antigas.",
      "B": "Um contrato de seguro subsidiado pelo governo para risco de clima.",
      "C": "Uma ação (equity) comercializada na bolsa de valores B3.",
      "D": "Uma promessa de entrega futura de um produto agropecuário especificado, servindo de garantia e lastro para captação prévia de recursos.",
      "E": "Uma carta de fiança assinada exclusivamente por tradings internacionais."
    },
    "correct": "D"
  },
  {
    "id": 19,
    "question": "O Certificado de Direitos Creditórios do Agronegócio (CDCA) fomenta a liquidez no setor, permitindo a antecipação de recebíveis comerciais. Quem são as entidades autorizadas pelo mercado a emitir esse título?",
    "options": {
      "A": "Prefeituras de municípios com Produto Interno Bruto (PIB) altamente agrícola.",
      "B": "Cooperativas agropecuárias e agroindústrias, estruturadas com base nos direitos que possuem a receber decorrentes de suas vendas a prazo.",
      "C": "Corretoras de seguros internacionais.",
      "D": "Apenas produtores rurais pessoas físicas (agricultura familiar).",
      "E": "Bancos de fomento estatal, como BNDES e Banco do Brasil."
    },
    "correct": "B"
  },
  {
    "id": 20,
    "question": "A Letra de Crédito do Agronegócio (LCA) é amplamente procurada por investidores comuns no mercado bancário para irrigar as linhas de financiamento do campo. O principal chamariz financeiro que impulsiona a demanda pela LCA no Brasil é:",
    "options": {
      "A": "A garantia absoluta contra qualquer tipo de inflação existente na economia.",
      "B": "A possibilidade legal de liquidar impostos federais com o título.",
      "C": "A promessa de recebimento de juros atrelados à variação da cotação do dólar comercial.",
      "D": "A conversão automática do título em sacas físicas de milho ou soja no vencimento.",
      "E": "O rendimento ser integralmente isento da cobrança de Imposto de Renda para os investidores pessoas físicas."
    },
    "correct": "E"
  },
  {
    "id": 21,
    "question": "No contexto da tributação no agronegócio, o que é o FUNRURAL?",
    "options": {
      "A": "Imposto municipal cobrado sobre o trânsito de tratores.",
      "B": "Contribuição sindical obrigatória para donos de terras.",
      "C": "É a contribuição previdenciária incidente sobre a receita bruta da comercialização da produção rural.",
      "D": "Taxa cobrada pelo Ibama para emissão de licenças operacionais.",
      "E": "Benefício pago pelo INSS aos trabalhadores no período de entressafra."
    },
    "correct": "C"
  },
  {
    "id": 22,
    "question": "O LCDPR (Livro Caixa Digital do Produtor Rural) revolucionou a prestação de contas com a Receita Federal. O que ele representa?",
    "options": {
      "A": "Obrigação acessória para produtores rurais pessoas físicas com receita bruta anual superior a R$ 4,8 milhões.",
      "B": "Livro opcional para registrar a produtividade diária das vacas leiteiras.",
      "C": "Documento que substitui a declaração de Imposto de Renda das multinacionais do agro.",
      "D": "Relatório enviado mensalmente ao sindicato dos trabalhadores rurais do município.",
      "E": "Um registro fotográfico digital obrigatório das áreas de preservação da fazenda."
    },
    "correct": "A"
  },
  {
    "id": 23,
    "question": "O Imposto Territorial Rural (ITR) possui uma característica regulatória importante definida na Constituição. Qual é sua principal função?",
    "options": {
      "A": "Imposto estadual focado em taxar fortemente a exportação de grãos.",
      "B": "Substitui o IPTU em áreas urbanas que possuem hortas comunitárias.",
      "C": "É cobrado apenas de empresas com CNPJ, isentando produtores pessoas físicas.",
      "D": "Tem função extrafiscal, com alíquotas maiores para terras improdutivas para desestimular o latifúndio ocioso.",
      "E": "É um imposto fixo, onde todas as fazendas pagam o mesmo valor anual independente do seu tamanho."
    },
    "correct": "D"
  },
  {
    "id": 24,
    "question": "Como a contabilidade rural lida com a depreciação de máquinas pesadas, como colheitadeiras, usadas intensamente durante a safra?",
    "options": {
      "A": "Máquinas agrícolas não sofrem depreciação, pois tendem a valorizar com o tempo.",
      "B": "Pode considerar o desgaste acelerado de máquinas que operam em turnos ininterruptos (2 ou 3 turnos) durante a colheita.",
      "C": "O trator é depreciado sempre em 30 anos, taxa linear idêntica à de imóveis urbanos.",
      "D": "É estritamente proibido depreciar ativos envolvidos diretamente na colheita sob qualquer hipótese.",
      "E": "Apenas caminhões com placa rodoviária podem ser depreciados no agronegócio."
    },
    "correct": "B"
  },
  {
    "id": 25,
    "question": "Segundo o CPC 29 (Pronunciamento Contábil sobre Agricultura), como os Ativos Biológicos (como o rebanho bovino ou as lavouras) devem ser avaliados e registrados no balanço?",
    "options": {
      "A": "São mensurados exclusivamente pelo peso em quilos no momento do nascimento do bezerro.",
      "B": "Englobam apenas os tratores e colheitadeiras equipados com tecnologia embarcada de precisão.",
      "C": "Devem ser contabilizados como despesa financeira imediata no momento do plantio ou nascimento.",
      "D": "Não afetam de maneira alguma o balanço patrimonial até o momento em que são efetivamente vendidos.",
      "E": "Devem ser mensurados ao valor justo menos as despesas estimadas de venda no ponto de colheita ou comercialização."
    },
    "correct": "E"
  },
  {
    "id": 26,
    "question": "Os FIAGROs (Fundos de Investimento nas Cadeias Produtivas Agroindustriais) trouxeram o mercado de capitais para mais perto do campo. O que eles são?",
    "options": {
      "A": "Permitem que investidores de todos os portes comprem cotas de fundos que aplicam em terras, títulos de crédito do agro ou cotas de empresas do setor.",
      "B": "É o fundo de aval governamental que paga indenizações imediatas em casos de secas severas extremas.",
      "C": "Sigla para o sindicato patronal nacional focado exclusivamente em defender os interesses de engenheiros agrônomos.",
      "D": "É um imposto federal cobrado compulsoriamente sobre transações financeiras internacionais de commodities.",
      "E": "Fundo de pensão exclusivo de aposentadoria para ex-funcionários do Ministério da Agricultura."
    },
    "correct": "A"
  },
  {
    "id": 27,
    "question": "A operação de 'Barter' é um mecanismo de financiamento muito comum no agronegócio brasileiro. Em que consiste essa operação?",
    "options": {
      "A": "Um sistema de irrigação inteligente e automatizado utilizado em lavouras no cerrado.",
      "B": "Um documento sanitário que comprova a vacinação de todo o rebanho bovino contra a febre aftosa.",
      "C": "Operação estruturada onde o produtor paga os insumos adquiridos (como fertilizantes e defensivos) com a entrega física de parte da sua produção futura.",
      "D": "Um tipo de sociedade anônima (S.A.) desenvolvida de forma exclusiva para a operação de usinas de etanol.",
      "E": "É o nome técnico e contábil dado à prática da queima controlada de pastagens degradadas."
    },
    "correct": "C"
  },
  {
    "id": 28,
    "question": "Sobre o mecanismo de Seguro Rural e o Programa de Subvenção ao Prêmio do Seguro Rural (PSR), é correto afirmar que:",
    "options": {
      "A": "O custo total do seguro é arcado integralmente pelo sindicato rural de cada município.",
      "B": "A apólice cobre única e exclusivamente os danos causados por quedas de meteoros ou satélites.",
      "C": "É um seguro de contratação obrigatória para todos os agricultores familiares, sob pena de prisão civil.",
      "D": "O Programa de Subvenção (PSR) auxilia o produtor pagando parte do custo da apólice, barateando a proteção contra intempéries climáticas.",
      "E": "Garante legalmente a margem de lucro do produtor mesmo que ele decida propositalmente não plantar no ano corrente."
    },
    "correct": "D"
  },
  {
    "id": 29,
    "question": "No universo financeiro do agronegócio, o que significa realizar uma operação de 'Hedge'?",
    "options": {
      "A": "Uma técnica avançada de plantio direto que utiliza cercas vivas (hedges) para conter o vento.",
      "B": "Estratégia de proteção financeira e comercial contra oscilações bruscas de preços através do travamento de valores na bolsa de mercadorias e futuros.",
      "C": "É a margem de lucro oculta cobrada pelos chamados atravessadores de gado nas feiras rurais.",
      "D": "Nome popular dado ao adubo químico importado de forma ilegal e sem certificação agronômica.",
      "E": "Um software integrado de gestão de Recursos Humanos voltado exclusivamente para rastrear trabalhadores sazonais."
    },
    "correct": "B"
  },
  {
    "id": 30,
    "question": "Alguns estados brasileiros utilizam a ferramenta do Crédito Presumido de ICMS para o setor agropecuário. Qual o objetivo dessa medida?",
    "options": {
      "A": "É um recurso financeiro que o governo deposita diretamente e mensalmente na conta corrente do produtor familiar.",
      "B": "Refere-se à presunção legal de que o produtor rural está sonegando impostos, gerando multas automáticas.",
      "C": "É um imposto de cunho federal cobrado com alíquota majorada sobre a exportação marítima de carnes processadas.",
      "D": "Trata-se de uma taxa administrativa cobrada pelos cartórios no exato momento de se registrar a hipoteca da terra.",
      "E": "Benefício fiscal concedido por alguns estados para simplificar, aliviar a carga tributária e incentivar a competitividade e instalação da agroindústria local."
    },
    "correct": "E"
  },
  {
    "id": 31,
    "question": "Na legislação tributária brasileira, as cooperativas agropecuárias usufruem do conceito de 'Ato Cooperativo'. O que ele representa?",
    "options": {
      "A": "Operações realizadas diretamente entre as cooperativas e seus associados que, por lei, não implicam operação de mercado e possuem isenção ou tratamento tributário favorecido.",
      "B": "Uma ação judicial de caráter coletivo movida por federações cooperativistas contra o monopólio de bancos privados.",
      "C": "O documento oficial de registro de compra de maquinário importado feito em conjunto por dezenas de produtores.",
      "D": "É o termo jurídico utilizado no exato momento em que uma cooperativa decreta sua falência no Diário Oficial.",
      "E": "A reunião anual obrigatória onde os cooperados são obrigados a doar 10% do lucro da safra para instituições de caridade."
    },
    "correct": "A"
  },
  {
    "id": 32,
    "question": "Ao fazer a sua Declaração de Ajuste Anual, como o Produtor Rural Pessoa Física apura e tributa a sua Atividade Rural no Imposto de Renda?",
    "options": {
      "A": "O produtor rural que opera como pessoa física é sumariamente isento de qualquer tipo de Imposto de Renda.",
      "B": "O imposto é calculado de forma engessada sempre sobre 100% da receita bruta da fazenda, sem permitir dedução de despesas.",
      "C": "Permite a opção vantajosa de tributação pelo resultado real apurado no Livro Caixa ou, alternativamente, pelo arbitramento fixo de 20% da receita bruta.",
      "D": "O IR no campo é cobrado unicamente em caso de ganho de capital na alienação (venda) da propriedade rural.",
      "E": "A alíquota de imposto é definida anualmente por meio de decreto da prefeitura municipal onde a fazenda se localiza."
    },
    "correct": "C"
  },
  {
    "id": 33,
    "question": "No que diz respeito à conformidade fiscal no campo, o que é a Nota Fiscal Produtor Eletrônica (NFP-e)?",
    "options": {
      "A": "Um aplicativo de celular estatal criado unicamente para monitorar as chuvas e o clima nas regiões agrícolas.",
      "B": "A nova norma técnica de segurança editada pelo Ministério da Agricultura determinando as regras de diluição de agrotóxicos.",
      "C": "Um modelo inovador de trator com motorização elétrica altamente subsidiado pelo banco de fomento federal.",
      "D": "Documento fiscal eletrônico obrigatório instituído pelas Secretarias de Fazenda para registrar, controlar e acobertar todas as operações de circulação de mercadorias no meio rural.",
      "E": "É uma guia de imposto cobrado em caráter de urgência sobre a contratação excessiva de trabalhadores vindos de países vizinhos."
    },
    "correct": "D"
  },
  {
    "id": 34,
    "question": "Um grande produtor rural com idade avançada deseja evitar inventários longos e proteger seu patrimônio. Qual figura jurídica é amplamente recomendada por consultorias contábeis e jurídicas nestes casos?",
    "options": {
      "A": "A fundação de uma empresa de tecnologia focada em drones de pulverização.",
      "B": "A abertura de uma Holding Familiar Rural, estrutura societária criada para concentrar as terras, facilitar e baratear o planejamento sucessório e blindar o patrimônio da família.",
      "C": "O registro exclusivo de uma marca internacional de maquinário pesado focado na colheita de algodão e girassol.",
      "D": "A constituição de uma Associação de moradores da zona rural focada no asfaltamento de estradas vicinais e pontes.",
      "E": "Adoção técnica de um novo método de engorda rápida de gado em confinamento intensivo visando liquidez imediata."
    },
    "correct": "B"
  },
  {
    "id": 35,
    "question": "Para garantir liquidez ao mercado, a legislação criou a Cédula de Produto Rural Financeira (CPR-F). Qual é a sua distinção vital em relação à CPR Física convencional?",
    "options": {
      "A": "Trata-se do cartão magnético que o agricultor utiliza para realizar saques diretamente no caixa eletrônico do banco parceiro.",
      "B": "É simplesmente a exata mesma CPR física, porém assinada e registrada necessariamente em papel moeda com selo d'água da Casa da Moeda.",
      "C": "Funciona como um documento de votação (título de eleitor) de emissão exclusiva para residentes permanentes da zona rural brasileira.",
      "D": "Consiste apenas no recibo de prestação de serviços assinado em cartório pelo gerente e pelo contador financeiro da fazenda.",
      "E": "Diferente da CPR Física (que exige a entrega do grão/boi), a liquidação da CPR-F ocorre exclusivamente de modo financeiro, pagando-se ao credor o valor financeiro correspondente àquele produto na data de vencimento."
    },
    "correct": "E"
  },
  {
    "id": 36,
    "question": "Antes de iniciar a instalação de confinamentos, desmatamentos ou grandes sistemas de irrigação, o produtor precisa obter o LAR. Do que se trata?",
    "options": {
      "A": "Licenciamento Ambiental Rural: processo administrativo obrigatório exigido pelos órgãos ambientais para autorizar atividades agropecuárias que utilizam recursos naturais e podem causar efetivo ou potencial impacto/degradação.",
      "B": "Permissão especial emitida pelo DETRAN e Polícia Rodoviária autorizando que tratores e colheitadeiras sem placa circulem normalmente nas rodovias federais.",
      "C": "O documento sanitário expedido pela vigilância em saúde que autoriza formalmente o abate imediato e clandestino de animais comprovadamente doentes.",
      "D": "Trata-se de uma licença poética regulamentada para permitir que artistas e compositores possam criar músicas sertanejas retratando os perigos da lida no campo.",
      "E": "É a permissão sindical anual obrigatória (Ato Liberatório) exigida em convenção coletiva para que as usinas possam dar início oficial ao período de colheita da cana."
    },
    "correct": "A"
  },
  {
    "id": 37,
    "question": "A escassez hídrica tornou a água um recurso altamente regulado. O que é a Outorga de Direito de Uso de Recursos Hídricos?",
    "options": {
      "A": "É a nomenclatura oficial dada em ata à cerimônia de formatura dos engenheiros agrônomos na universidade federal.",
      "B": "É o decreto ambiental de cunho federal que proíbe terminantemente a captação e o armazenamento de água da chuva para uso em plantações.",
      "C": "Documento técnico emitido pelo poder público competente que autoriza formalmente o produtor a captar volume determinado de água de rios, lagos ou poços artesianos para atividades como irrigação.",
      "D": "Refere-se ao equipamento (hidrômetro de precisão) que os auditores instalam nas casas dos colonos da fazenda para tarifação de uso pessoal.",
      "E": "Consiste em uma taxa governamental pesada cobrada mensalmente visando custear o tratamento de rejeitos e dejetos líquidos de suinoculturas."
    },
    "correct": "C"
  },
  {
    "id": 38,
    "question": "Como os produtores rurais de commodities e as tradings se protegem caso os preços globais caiam drasticamente até a época da colheita?",
    "options": {
      "A": "Utilizando novas sementes transgênicas desenvolvidas geneticamente para suportar o atraso da germinação por até 5 anos no solo, aguardando o preço subir.",
      "B": "Fazem uma promessa informal de venda a prazo para comerciantes locais e seguram os pagamentos dos funcionários até o lucro retornar.",
      "C": "Atrelam os contratos de trabalho da equipe braçal ao valor internacional do grão, transferindo o risco de prejuízo financeiro para o operário do campo.",
      "D": "Utilizam Instrumentos Financeiros Derivativos (Contratos Futuros e Opções) negociados na bolsa de valores (B3/Chicago) que permitem fixar e travar o preço de venda da safra muito antes do plantio, mitigando severos riscos de mercado.",
      "E": "Recorrem a um contrato de seguro internacional que cobre exclusivamente chuvas de granizo severas em safras que ainda não foram semeadas."
    },
    "correct": "D"
  },
  {
    "id": 39,
    "question": "O mercado europeu e chinês têm exigido cada vez mais do Brasil o conceito de 'Rastreabilidade' da carne e da soja. O que isso engloba?",
    "options": {
      "A": "O uso de drones equipados com infravermelho e cães farejadores com a finalidade de encontrar rebanhos roubados em áreas de fronteira.",
      "B": "A capacidade tecnológica e de compliance para documentar e provar a origem exata, o histórico vacinal/químico e o caminho do produto ao longo da cadeia produtiva, garantindo total transparência e atestando que o alimento não veio de área com desmatamento ou trabalho escravo.",
      "C": "A prática de instalar microchips GPS escondidos nos tratores da fazenda com o intuito focado de evitar furtos e punir funcionários que durmam durante a jornada.",
      "D": "É uma técnica altamente qualificada de investigação policial sigilosa operada contra as sofisticadas quadrilhas de roubo e desvio de defensivos agrícolas.",
      "E": "Refere-se de forma estrita àquele carimbo rústico de tinta ou marcação a fogo vivo colocado tradicionalmente na pele do bezerro durante as semanas de vacinação."
    },
    "correct": "B"
  },
  {
    "id": 40,
    "question": "Na Contabilidade Rural avançada, as reservas naturais exploradas comercialmente (como minas em fazendas ou projetos de extração florestal sustentável) sofrem qual fenômeno contábil para refletir sua perda de valor com o tempo?",
    "options": {
      "A": "Adicional de insalubridade de natureza contábil pago aos maquinistas pelo esforço de exploração de madeira em áreas pantanosas.",
      "B": "Sucateamento agressivo imediato, lançando-se o valor das máquinas e motosserras como perda total no fim de cada safra.",
      "C": "Falência sistêmica, indicando que o ativo da fazenda passou a dar lucro zero a partir da metade da sua vida útil.",
      "D": "Ruptura de Caixa, caracterizada pelo fim abrupto do dinheiro líquido no caixa financeiro da fazenda logo durante as semanas críticas da entressafra.",
      "E": "Exaustão: O reconhecimento contábil, mês a mês, da diminuição de capacidade ou perda de valor real de recursos naturais esgotáveis devido a sua extração e aproveitamento comercial."
    },
    "correct": "E"
  },
  {
    "id": 41,
    "question": "Ao preencher a declaração anual do Imposto Territorial Rural (ITR), o contador rural analisa uma métrica fundamental chamada GUT para fugir das alíquotas punitivas do governo. O que é o GUT?",
    "options": {
      "A": "Grau de Utilização da Terra: Índice percentual que verifica matematicamente se a área produtiva e aproveitável do imóvel rural está sendo adequadamente explorada e cultivada, isentando áreas de preservação dessa conta.",
      "B": "Grau de Umidade Técnica: É a medida exata de profundidade e umidade necessária requerida para o plantio correto de sementes certificadas de soja e algodão no centro-oeste.",
      "C": "Graduação de Uso de Tóxicos: Quantidade exata e limitada por lei de fertilizante químico nitrogenado que o produtor pode aplicar por cada metro quadrado de pasto.",
      "D": "Gestão de Utilização do Tempo: Parâmetro cronológico que indica por lei os meses em que a terra precisa ficar totalmente em repouso ocioso entre uma safra colhida e o próximo plantio.",
      "E": "Garantia de Unidade Trabalhadora: O limite máximo estatístico fixado pelo Ministério do Trabalho de cortadores de cana permitidos por hectare fatiado."
    },
    "correct": "A"
  },
  {
    "id": 42,
    "question": "No Plano Safra do Governo e nas agências bancárias, o produtor encontra o 'Crédito de Custeio'. Para que ele serve exclusivamente?",
    "options": {
      "A": "É o dinheiro com taxas subsidiadas emprestado a produtores gigantes interessados em especular e comprar novas fazendas em outros estados ou no exterior.",
      "B": "Trata-se de um financiamento robusto e alongado de longo prazo destinado unicamente à construção de infraestrutura pesada, como novos silos graneleiros e armazéns termometrados.",
      "C": "Linha de crédito de curtíssimo/curto prazo destinada a irrigar o caixa da fazenda para bancar as despesas correntes do ciclo produtivo em andamento (compra de sementes, ração, adubos, defensivos e quitação da mão de obra de colheita).",
      "D": "Trata-se de um empréstimo do tipo pessoal com juros abusivos ofertado para o fazendeiro poder trocar seus veículos de luxo e caminhonetes de passeio.",
      "E": "Consiste em recurso financeiro doado a fundo perdido (sem cobrança de devolução) por Organizações Não Governamentais (ONGs) europeias focadas em reflorestamento da Amazônia Legal."
    },
    "correct": "C"
  },
  {
    "id": 43,
    "question": "Na negociação de uma Cédula de Produto Rural (CPR), o banco ou a trading exige o 'Aval'. Qual o peso jurídico dessa garantia?",
    "options": {
      "A": "É tão somente a avaliação técnica prévia expedida por agrônomos do Ministério da Agricultura que garante e classifica a qualidade exportação do grão negociado.",
      "B": "Consiste em uma singela assinatura despachada pelo prefeito municipal do município de origem das cargas, chancelando e liberando o trânsito da frota graneleira nas rodovias estaduais.",
      "C": "Refere-se diretamente ao selo oficial carimbado de inspeção federal (SIF) obrigatoriamente colado na embalagem da carne nos frigoríficos exportadores parceiros.",
      "D": "Garantia cambial e pessoal na qual uma terceira pessoa física ou jurídica (avalista) se responsabiliza de forma integral e solidária pelo cumprimento da obrigação de entregar a safra ou de pagar o valor devido, caso o produtor rural emissor da cédula venha a falhar.",
      "E": "É simplesmente a vistoria técnica trimestral feita pessoalmente por voo de drone pelo engenheiro agrônomo do banco na extensa área verde que foi plantada sob penhor da dívida."
    },
    "correct": "D"
  },
  {
    "id": 44,
    "question": "Quando um produtor realiza o desmatamento raso sem autorização ou em Área de Preservação Permanente (APP), o IBAMA pode impor um 'Embargo Ambiental' à propriedade. Na prática comercial e de compliance do agronegócio, o que isso acarreta?",
    "options": {
      "A": "Proíbe de forma genérica o Brasil de importar e repassar tratores estrangeiros sofisticados destinados às frotas das fazendas localizadas no entorno geográfico do embargo.",
      "B": "Aplica-se uma severa sanção cautelar administrativa que interdita e paralisa totalmente a exploração econômica e a comercialização de produtos originários do polígono embargado, bloqueando ainda acesso daquela área e do proprietário ao crédito rural dos bancos para impedir a continuação do dano.",
      "C": "Decreta imediata greve operacional e suspensão nacional das equipes de fiscais de campo do Ibama na tentativa de pressionar a aprovação orçamentária do ministério.",
      "D": "Resulta no travamento aduaneiro severo e na retenção prolongada dos gigantescos navios conteineiros repletos de soja oriundos do Brasil estacionados nos ancoradouros dos portos da China justificada por alegados problemas ou barreiras sanitárias fitozoossanitárias.",
      "E": "Determina administrativamente o confisco integral dos saldos de todas as contas correntes bancárias e aplicações vinculadas atreladas ao produtor rural apenas nos casos em que ele estiver inadimplente ou estiver devendo pesada pensão alimentícia judicial em litígio familiar."
    },
    "correct": "B"
  },
  {
    "id": 45,
    "question": "A política de crédito no Brasil divide o agro em pequenos, médios e grandes produtores. O PRONAF é a grande mola propulsora de uma dessas categorias. Qual?",
    "options": {
      "A": "Trata-se de um gigantesco programa governamental sigiloso liderado pelas forças armadas voltado estritamente à militarização, monitoramento radar e defesa extrema das vulneráveis fronteiras e linhas agrícolas continentais brasileiras.",
      "B": "Oferece um fundo ilimitado de financiamento internacional altamente alavancado que é desenhado e focado por lei exclusivamente para o socorro tático em favor das enormes multinacionais transnacionais de biotecnologia e exportação de commodities que operam no agronegócio.",
      "C": "Trata-se apenas de uma abreviação criada no jargão do mercado livre para se referir à recente proposta que instituiu um novo e muito pesado imposto de incidência escalonada recaindo sobre os volumosos estoques e galões não utilizados de defensivos químicos agrotóxicos estocados nas cooperativas.",
      "D": "Nome dado ao complexo, tecnológico e extremamente custoso sistema digital orbitário de agrupamento de satélites meteorológicos acoplado e usado unicamente com o intuito de alertar os bombeiros em tempo real tentando mapear os imensos focos isolados de focos de queimadas intencionais nas matas.",
      "E": "É o pilar do crédito: Programa de financiamento rural do governo federal provido com linhas de taxas de juros acentuadamente baixas (fortemente subsidiadas) e regras flexibilizadas de exigência de garantias, destinado de forma focada e específica a incentivar, gerar renda, estabilidade e custear a agricultura e pecuária de caráter familiar."
    },
    "correct": "E"
  },
  {
    "id": 46,
    "question": "A agenda ESG nas fazendas passou a premiar produtores conservacionistas com linhas de crédito verdes como o 'Plano ABC'. Uma das práticas mais exigidas para obter essas taxas melhores é o Sistema de Plantio Direto (SPD). O que é?",
    "options": {
      "A": "Técnica altamente eficiente de manejo conservacionista sustentável onde a semente é colocada num sulco estreito e raso diretamente sob a cobertura vegetal seca mantendo intacta e sobre o solo a palhada remanescente da cultura colhida no ano anterior (protege contra as chuvas torrenciais causadoras da erosão acelerada, preserva os minerais microscópicos, além de reter e guardar a úmida valiosa).",
      "B": "Modelo moderno simplificado e ultrarrápido focado em desburocratizar a massiva venda e escoamento rodoviário da safra ensacada recém-saída da máquina ocorrendo de maneira direta partindo do galpão produtor diretamente em linha reta na caçamba sendo direcionada para o consumidor caseiro final ou na pequena feira local da cidade mais próxima varrendo e erradicando qualquer participação lucrativa dos agentes comerciais atravessadores intermediários tradicionais.",
      "C": "Programa estadual emergencial de cultivo forçado e plantio compulsório escalonado de pequenas mudas experimentais de milho híbrido ou grãos de soja convencionais sendo plantadas exclusivamente nos longos estreitos e apertados canteiros centrais divisórios que ladeiam toda a pavimentação esburacada das movimentadas rodovias e estradas estaduais secundárias visando paisagismo e controle.",
      "D": "Uma operação futurística militarizada, cara e emergencial aplicada em fazendas alagadas da região pantaneira de lançar sementes encapsuladas blindadas usando tecnologia com lançamento aéreo via bombas despachadas dos modernos helicópteros e aviões agrícolas num ritmo desesperado na esperança de reflorestar grandes áreas longínquas devassadas pelo fogo.",
      "E": "É a popular denominação informal folclórica adotada por um famoso e longínquo programa local matinal de televisão e transmissão de rádio AM da década de noventa voltado, através de ligação telefônica diária de ouvinte, inteiramente e exclusivamente na entrega diuturna gratuita e popular de dicas básicas de jardinagem avançada aliada com amadoras recomendações de dicas rústicas e noções leigas básicas de agronomia e veterinária focadas em donas de casa nas capitais."
    },
    "correct": "A"
  },
  {
    "id": 47,
    "question": "O produtor pessoa física que decide vender soja para uma grande 'Trading' exportadora ou abater seus bois em um 'Frigorífico S.A.' se depara com a regra de Retenção Sub-rogada do Funrural. O que isso quer dizer para a burocracia do contador?",
    "options": {
      "A": "Significa de forma objetiva na lei vigente que, aconteça o que acontecer o dono da boiada (o produtor físico local) é e será de todas as formas sempre perante a Receita o único responsável exclusivo de gerar a sua guia DARF individualmente pelo portal, pagando solitário e isolado o seu próprio imposto sobre todo o lote pesado de uma vez ao banco num prazo fechado e curto de quinze horas do dia do fechamento.",
      "B": "Nessa hipótese o recolhimento integral exigido de cada nota vira uma obrigação indireta pesada calculada percentualmente ao final dos 30 dias que deve por força da legislação trabalhista e regramento ser duramente e severamente descontado todo mês fixado cortando em dez por cento o pequeno valor líquido real constante como o magro salário base assinado dentro do holerite oficial da CTPS da carteira do experiente maquinista condutor tratorista.",
      "C": "Essa engenharia tributária legal desobriga o agricultor físico: quando o modesto produtor CPF negocia, abate ou vende com sucesso a produção oriunda de seu suor agrícola repassando-a para ser absorvida por uma pujante empresa comercial ou industrial adquirente da cadeia superior (como o robusto frigorífico S.A. listado em bolsa ou uma poderosa cooperativa forte local), a impiedosa e ágil lei tributária altera as normas gerais e de forma taxativa obriga fortemente que seja somente e de forma integral essa rica empresa adquirente gigante e robusta de mercado responsável obrigada em nome próprio no ato exato de pagar pelas pesadas carcaças a segurar a verba reter com força na fonte o montante apurado calculado na guia descontando em boleto repassando esse imposto rural devidamente preenchido recolhendo-o transferindo aos lentos cofres públicos em sistema de sub-rogação imediata em nome da fazenda em substituição exata isentando a pressão no fazendeiro de papeladas extras.",
      "D": "Garante taxativamente à aduana brasileira de que todos os produtos exportados em contêiner ou fardos sob lona essa obrigação tributária sub-rogada jamais se aplica a nenhum caso se ocorrer o repasse da venda do insumo atrelado aos negócios pautados e pesados envolvendo a bilionária e volumosa exportação marítima focada focada e blindada dos brancos e leves fardos embalados ensacados classificados da branca e refinada produção e do macio algodão bruto enlaçado e transportado em pesada volumosa maciça pluma para o oriente distante e frio.",
      "E": "É simplesmente uma manobra anistia legal do Congresso Nacional chancelando aprovação de tese onde esse rigoroso e pesado percentual que destrói as margens líquidas imposto é automaticamente perdoado e ignorado se e somente se no processo todo produtor fiscalizado tiver o audacioso e dispendioso privilégio de atestar portando pesados carimbos verdes chancelados documentados internacionais auditados de que absolutamente noventa por cento limpa orgânica chancelada fazenda totalmente puramente orgânica comprovada sem sequer um resquício de utilização de pó ou herbicida toxico."
    },
    "correct": "C"
  },
  {
    "id": 48,
    "question": "A logística movimenta as colheitas do campo até os portos sob rigorosa fiscalização rodoviária nos postos estaduais. Qual é o arquivo XML eletrônico cuja ausência trava os bitrens na balança rodoviária?",
    "options": {
      "A": "CTER - Cadastro Tecnológico Obrigatório Federal e Profissionalizante para credenciamento do cadastro do Exame unificado de todos os Jovens Eletricistas especializados na região interiorana e Zona Rural Brasileira sob risco de autuação grave do Ministério.",
      "B": "CTE-Tr - Comprovado o pesado extenso minucioso e rigoroso relatórios caros focado detalhadamente e estritamente no complexo e validado monitoramento da fiscalização que gera na sua ponta final de uso o certificado atestado verde governamental garantido do Certificado de Transgênico Emitido pelo governo para autorizar safras exportadas modificadas.",
      "C": "CTE - Curso Técnico profissionalizante em exigência estadual homologado pelo SENAR com duração obrigatória em vídeo de Treinamento avançado de seiscentas horas chanceladas sobre Operação Segura preventiva e teórica de Escavadeiras Pesadas Hidráulicas Amarelas e Moto niveladoras pesadas chanceladas pelo Detran regional.",
      "D": "CT-e - O Conhecimento de Transporte Eletrônico, sendo este o vital documento digital fiscal acoplado à NF-e, emitido unicamente pelas transportadoras terceirizadas e emitido via SEFAZ com chave de autenticidade no formato XML, que atesta, aponta a carga com exatidão apurada tributária e acoberta e chancela totalmente de forma imaculada e totalmente legal a complexa e pesada operação faturada e paga de prestação finalística do frete de longa viagem ou curto percurso do serviço de transporte daquelas sacas ensacadas com safra ou boiadas soltas caminhando pelas poeirentas e castigadas rodovias do país até o porto terminal escoadouro.",
      "E": "CT-Ele - Medição do Controle Eletrônico diário constante em rigoroso termostato via nuvem e chip de sensor da Temperatura Elevada medido obrigatoriamente e acompanhado da umidade em todos os imensos e repletos silos horizontais e imponentes verticais herméticos instalados nas propriedades focando a preservação total impedindo na via e impedindo totalmente a fermentação fúngica, proliferação e explosão gasosa dos frágeis grãos orgânicos ou refinados na secadora gigante térmica."
    },
    "correct": "D"
  },
  {
    "id": 49,
    "question": "O agronegócio de excelência busca eliminar multas trabalhistas e garantir auditorias limpas para acesso aos Fiagros. Esse movimento está ancorado em uma política robusta. Do que se trata?",
    "options": {
      "A": "Significa de forma literal elaborar um pesado livro burocrático de manual normativo estático estipulando e publicando uma restritiva multa sindical interna para proibir severamente fiscalizando de forma punitiva que o pobre humilde trabalhador manual rural chegue a encostar ou sequer usar seu celular para olhar as horas durante qualquer hora no período da jornada matutina em campo sob pena sumária forte de dispensa em todo o grupo e multa na fazenda inteira.",
      "B": "Refere-se a estruturar um Compliance Trabalhista e de Due Diligence real, ou seja, adoção auditada de práticas preventivas e controles operacionais muito rigorosos em plena e estreita conformidade para cumprir sistematicamente no relógio o detalhe ínfimo exigido da complexa e difusa legislação pesada protetiva brasileira (focando pontualmente nas duras exigências vitais da NR-31, respeito inflexível a limite do relógio de ponto e escalas em jornadas longas, excelência, ventilação e asseio rigoroso máximo nos vestiários refeitórios e galpões distantes dos trabalhadores dos alojamentos e acampamentos e da fazenda). Essa organização pesada que exige dinheiro serve visando fundamentalmente não somente gerar ambiente salubre, mitigar e blindar completamente a terra bloqueando o surgimento judicial contra fortíssimos e pesados bloqueios de conta corrente e passivos judiciais cíveis ou criminais surpresa na trabalhista, além de abrir alas para garantir acesso e score favorável livre, de juro reduzido ao crédito verde limpo e captação farta bancária sofisticada nos painéis bancários dos credores e investidores do capital e mercado financeiro.",
      "C": "É simplesmente uma metáfora usada no campo da inteligência digital aplicada significando a compra online via download de um complexo e moderno software americano baseado em assinatura um robô programado usando motor de poderosa caixa preta da inteligência artificial embarcada generativa que com três cliques lê as sentenças judiciais antigas e com facilidade extrema atua nas comarcas rurais interpostas substituindo demitindo na hora o caro antiquado advogado causídico sênior humano e processa diretamente sem custo toda a contestação patronal enfrentando na tela sozinho e no protocolo via eletrônico todo o sindicato operário forte da região em disputas salariais de horas da convenção coletiva.",
      "D": "Programa estadual extremista limitador com fins demográficos em exigência que foca e força que absolutmente todos sem exceção em qualquer vaga mesmo na área básica os humildes e distantes funcionários que capinam e colhem café na lavoura distante no calor exijam em currículo impresso e entregue tenham obrigatoriamente diploma concluído em dezenas de cursos técnicos avançados exigidos ou curso de nível superior chancelado universitário de quatro anos completo entregando os laudos e documentos sob risco de embargo municipal com pena de interdição total nos portões da chácara de soja do proprietário negligente para o plantio e lavoura do trigo duro.",
      "E": "É simplesmente um jargão liberal focado nos lobistas em que a simples palavra significa no painel diário legislativo e político que tenta ser a desejada permissão legal ampla a liberação geral total de qualquer de normas regulatórias amarradas a anulação e revogação permanente do horário do relógio para assim legalizar com o aval a vontade crua total permitir no suor na raça a adoção ampla total em tese para forçar e esticar ao máximo extrair o limiar da força braçal objetivando dobrar aumentar a fórceps em 100% a meta de peso para espremer e a produtividade no exaustivo e longo corte árduo com facão longo rústico e afiado com lâmina perigosa da verde espinhosa cana escura plantada em valas em troca estritamente de pagamentos ínfimos e centavos baseados rigidamente pela medida na ponta da tonelada final diária e fatiada no calor da fornalha da usina geradora sucroalcooleira do estado paulista quente seco e úmido no norte."
    },
    "correct": "B"
  },
  {
    "id": 50,
    "question": "Grandes produtores, na tentativa de reter grãos (como café ou milho) nos armazéns à espera de melhores preços sem ficar sem fluxo de caixa imediato, utilizam um complexo mecanismo atrelado ao depósito. Trata-se da operação usando CRA e também do título conhecido como:",
    "options": {
      "A": "Um perigoso complexo mandado digital eletrônico judicial restritivo lavrado, assinado, carimbado pelo STJ autorizando a Polícia realizar incursão na madrugada focado para a imediata severa de forma agressiva de busca sem piedade rápida captura da frota do maquinário rural pesado focado em busca e confisco liminar forçado para efetivar e bater a imediata e apreensão dolorosa coercitiva surpresa e imprevista nos pátios das máquinas pesadas paradas no pátio, tratores vermelhos sujos financiados importados da Europa que foram comprovadamente notificados e denunciados anonimamente furtados levados nas surdinas em roubados no escuro das fronteiras das divisas do pantanal estadual por milícia com arma de fogo na fazenda lindeira para leilão das seguradoras bancárias estaduais.",
      "B": "É simplesmente a famosa marca popular vendida na casa agropecuária que designa e patenteou recentemente a droga farmacêutica injetável aplicada um potente remédio doloroso focado químico forte agressivo vermelho e denso de fórmula gringa utilizado misturado de acordo com o peso via seringa e pistola focado no corpo animal e na musculatura de eqüinos para neutralizar erradicar combater abater no pelo limpo e curar inflamação nos ossos e na pele a peste de moscas mosquitos hematófagos do banhado e no bando sujo para matar erradicar os difíceis duros venenosos e doloridos e grudentos carrapatos minúsculos parasitas grudados sangrando encontrados freqüentemente habitando ocultos grudados em cavalos de prova em cavalos na virilha suada de quarto de milha de competição na doma do rebanho mestiço na grande feira.",
      "C": "O apelido alarmante focado agronegócio pantaneiro no nome técnico dado à da mutante severa resistente nova fungo mutante praga minúscula asiática nociva esverdeada microscópica de rápido alcance recém introduzida voando clandestinamente atravessando a alfândega oculta dentro de caixa vindo pelo vento via Paraguai fronteira chuvosa que em semanas de proliferação agride mancha mata fura amarela apodrece corrompe queima atinge em cheio as verdes longas folhas estriadas largas e compridas fragiliza e seca a fina haste fina longa destruindo a robusta valiosa dourada da lucrativa verde a forte lavoura do rico de safra de espiga de safrinha no ciclo no seco do longo valioso pé espigado seco esticado do precioso híbrido cobiçado amarelo milho em grão de sequeiro nas secas do Brasil central em dias frios.",
      "D": "É pura técnica fiscal do programa da receita uma senha exclusiva encriptada sigilosa forte de controle e do banco de chaves numérica alfanumérica única aleatória contendo rigidamente padronizada os exatos obrigatórios os quarenta longos quarenta e quatro numéricos pequenos os dígitos vitais precisos gravados do painel e do impresso digital na margem fina na margem que é na emissão online de segurança na sefaz validadora a exata criptografada segura e protegida longa na sua via eletrônica inquebrável oficial exigida a grande a chave digital gerada impressa do validador e chave liberadora online única restritiva exclusiva eletrônica da ponta de do controle de acesso online exigida impressa preta da moderna pesada digital certificada oficial grande da nova moderna nota verde azul grossa da comprida validada da atual e exigida nota com código em barras e a digital validada da nota fiscal da fazenda em formato da nota fiscal e sua digital exigida da eletrônica modelo validado avulsa do sefaz em formato Danfe com a grande chave digital e sua base criptografada alfanumérica na validada modelo em PDF modelo estadual moderna obrigatória atual modelo moderno nota do sefaz da grande da nota e eletrônica válida emitida moderna.",
      "E": "Warrant Agropecuário: Titulo cambial de crédito formal regulamentado, umbilicalmente atrelado e sempre circulando ou emitido de forma endossável unido fortemente ao valioso Conhecimento de Depósito emitido pela armazém certificador. Esse sofisticado papel confere juridicamente aos bancos de imediato na assinatura da fiança o robusto forte desejado direito garantidor jurídico pignoratício real de penhor, averbado diretamente como lastro bloqueando recaindo de forma exata focado repousando imaculado e travando sobre as milhares de saca grãos ou lotes toneladas exatas depositadas estocadas guardadas limpas da valiosa de forma física com segurança plena qualidade certificada e monitorada com garantia em galpão de em um terceiro em armazém geral da câmara termometrado fiel de certificador independente terceirizado ou depositário parceiro certificado, alavancando assim muito e facilitando a atração abrindo as portas do caixa da fazenda destravar limites milionários com liberação maciça a ágil captação financeira juros atrativos liberação de caixa e de robustos grandes garantidos vultosos financiamentos no crédito do capital dos empréstimos baratos dos agentes bancos privados sem necessitar liquidar fisicamente desfazer perder e vender vender as sacas físicas a preço descontado na colheita."
    },
    "correct": "E"
  }
];
