const quizData = [
  {
    "id": 1,
    "question": "No contexto do Big Data Financeiro, qual 'V' garante que o dado não é um 'ruído' e pode ser usado para auditoria?",
    "options": {
      "A": "Volume",
      "B": "Velocidade",
      "C": "Variedade",
      "D": "Veracidade",
      "E": "Valor"
    },
    "correct": "D"
  },
  {
    "id": 2,
    "question": "Qual a principal característica de um Data Lake?",
    "options": {
      "A": "Armazena apenas dados já limpos e prontos para o gráfico.",
      "B": "É um repositório de dados brutos em seu formato original.",
      "C": "Serve apenas para armazenar backups de e-mails.",
      "D": "Substitui o uso de bancos de dados relacionais.",
      "E": "É exclusivo para o uso de planilhas Excel."
    },
    "correct": "B"
  },
  {
    "id": 3,
    "question": "O Data Warehouse (DWH) é preferível ao ERP para análises de BI porque:",
    "options": {
      "A": "É gratuito e o ERP é pago.",
      "B": "O ERP apaga os dados todo mês.",
      "C": "O DWH é otimizado para consultas complexas e protege a performance do sistema operacional.",
      "D": "O DWH não permite o acesso de múltiplos usuários.",
      "E": "O ERP só funciona com dados de texto."
    },
    "correct": "C"
  },
  {
    "id": 4,
    "question": "O conceito de 'Veracidade' impacta diretamente:",
    "options": {
      "A": "A velocidade de carregamento do painel.",
      "B": "A quantidade de GB que o banco de dados ocupa.",
      "C": "A confiança do gestor na tomada de decisão estratégica.",
      "D": "A cor dos gráficos no Power BI.",
      "E": "O número de colunas de uma tabela fato."
    },
    "correct": "C"
  },
  {
    "id": 5,
    "question": "Qual a diferença entre Dado e Informação na Pirâmide DIKW?",
    "options": {
      "A": "Não há diferença.",
      "B": "O dado é a informação analisada.",
      "C": "A informação é o dado processado e contextualizado.",
      "D": "O dado é o topo da pirâmide.",
      "E": "A informação é sempre numérica e o dado é sempre texto."
    },
    "correct": "C"
  },
  {
    "id": 6,
    "question": "No modelo Star Schema, a Tabela Fato é caracterizada por ser:",
    "options": {
      "A": "Curta e larga.",
      "B": "Composta apenas por nomes de clientes.",
      "C": "Longa e estreita, contendo métricas quantitativas.",
      "D": "Desconectada das outras tabelas.",
      "E": "Onde ficam os endereços dos fornecedores."
    },
    "correct": "C"
  },
  {
    "id": 7,
    "question": "O que define uma Tabela Dimensão?",
    "options": {
      "A": "Contém os eventos que ocorreram (vendas, empenhos).",
      "B": "Contém as características descritivas (quem, onde, quando).",
      "C": "É sempre a maior tabela do modelo.",
      "D": "Não possui chaves primárias.",
      "E": "É usada para cálculos de soma e média."
    },
    "correct": "B"
  },
  {
    "id": 8,
    "question": "Qual a função da Chave Primária (PK)?",
    "options": {
      "A": "Identificar de forma única um registro em uma tabela dimensão.",
      "B": "Ligar duas tabelas fato entre si.",
      "C": "Permitir que um nome de cliente se repita na dimensão.",
      "D": "Aumentar o tamanho do arquivo do Power BI.",
      "E": "Atuar como uma senha de acesso ao banco de dados."
    },
    "correct": "A"
  },
  {
    "id": 9,
    "question": "A Chave Estrangeira (FK) na Tabela Fato:",
    "options": {
      "A": "Nunca pode se repetir.",
      "B": "É o link que aponta para a PK da Tabela Dimensão.",
      "C": "Deve ser sempre um texto longo.",
      "D": "Só existe se o banco de dados for externo.",
      "E": "Serve para deletar dados automaticamente."
    },
    "correct": "B"
  },
  {
    "id": 10,
    "question": "O relacionamento ideal entre uma Dimensão e uma Fato é:",
    "options": {
      "A": "Muitos para Muitos (N:M).",
      "B": "Um para Um (1:1).",
      "C": "Um para Muitos (1:N).",
      "D": "Muitos para Um (N:1), mas apenas se as tabelas forem fatos.",
      "E": "Nenhum, as tabelas devem ser isoladas."
    },
    "correct": "C"
  },
  {
    "id": 11,
    "question": "O que ocorre no Power BI ao criar um relacionamento N:M (Muitos para Muitos) acidentalmente?",
    "options": {
      "A": "O programa fecha imediatamente.",
      "B": "Os valores podem ser duplicados, gerando análises erradas.",
      "C": "A performance melhora drasticamente.",
      "D": "As cores do gráfico mudam para vermelho.",
      "E": "O sistema impede a criação de novas medidas."
    },
    "correct": "B"
  },
  {
    "id": 12,
    "question": "Por que a Tabela Dim_Calendário é indispensável?",
    "options": {
      "A": "Para mostrar o signo do gestor.",
      "B": "Para garantir a continuidade do tempo e análises de inteligência temporal.",
      "C": "Porque o Power BI não tem relógio interno.",
      "D": "Para limitar a análise a apenas um mês por ano.",
      "E": "Para substituir o calendário do Windows."
    },
    "correct": "B"
  },
  {
    "id": 13,
    "question": "No Star Schema, a Fato fica no centro e as Dimensões ao redor. Isso facilita:",
    "options": {
      "A": "A digitação de dados manuais.",
      "B": "A performance das consultas e a clareza do modelo.",
      "C": "A impressão dos relatórios em papel.",
      "D": "O compartilhamento de senhas.",
      "E": "A exclusão de dados antigos."
    },
    "correct": "B"
  },
  {
    "id": 14,
    "question": "Uma tabela que contém a lista de Secretarias Municipais é uma:",
    "options": {
      "A": "Tabela Fato.",
      "B": "Tabela Dimensão.",
      "C": "Tabela de Medidas.",
      "D": "Tabela de Log.",
      "E": "Tabela Temporária."
    },
    "correct": "B"
  },
  {
    "id": 15,
    "question": "Uma tabela que registra cada pagamento efetuado pela prefeitura é uma:",
    "options": {
      "A": "Tabela Fato.",
      "B": "Tabela Dimensão.",
      "C": "Tabela de Endereços.",
      "D": "Tabela de Auditoria.",
      "E": "Tabela de Metadados."
    },
    "correct": "A"
  },
  {
    "id": 16,
    "question": "Qual a vantagem de usar uma 'Medida' em vez de uma 'Coluna Calculada'?",
    "options": {
      "A": "A medida é gravada fisicamente no disco.",
      "B": "A medida é calculada apenas no momento da visualização, economizando memória.",
      "C": "A coluna calculada é mais rápida para grandes volumes.",
      "D": "Medidas não aceitam a função SUM.",
      "E": "Colunas calculadas são exclusivas para o setor público."
    },
    "correct": "B"
  },
  {
    "id": 17,
    "question": "O DAX é uma linguagem de:",
    "options": {
      "A": "Programação de hardware.",
      "B": "Expressões para análise de dados.",
      "C": "Design de interfaces.",
      "D": "Gerenciamento de servidores de e-mail.",
      "E": "Criação de sites."
    },
    "correct": "B"
  },
  {
    "id": 18,
    "question": "Se você precisa somar o faturamento total, a melhor prática é criar uma:",
    "options": {
      "A": "Coluna Calculada com a soma.",
      "B": "Medida com a função SUM.",
      "C": "Tabela nova para cada soma.",
      "D": "Planilha de Excel vinculada.",
      "E": "Variável de ambiente."
    },
    "correct": "B"
  },
  {
    "id": 19,
    "question": "Colunas calculadas aumentam o tamanho do arquivo porque:",
    "options": {
      "A": "São invisíveis.",
      "B": "São processadas linha a linha e armazenadas no modelo.",
      "C": "Exigem conexão constante com a internet.",
      "D": "Só funcionam em arquivos .zip.",
      "E": "Duplicam todas as outras colunas."
    },
    "correct": "B"
  },
  {
    "id": 20,
    "question": "O Power BI Desktop é uma ferramenta de:",
    "options": {
      "A": "ETL, Modelagem e Visualização.",
      "B": "Apenas edição de imagens.",
      "C": "Apenas digitação de textos.",
      "D": "Sistema operacional.",
      "E": "Antivírus."
    },
    "correct": "A"
  },
  {
    "id": 21,
    "question": "O que significa a sigla ETL?",
    "options": {
      "A": "Edit, Transfer, Load.",
      "B": "Extract, Transform, Load.",
      "C": "Energy, Time, Logic.",
      "D": "Entry, Total, List.",
      "E": "Excluir, Tratar, Limpar."
    },
    "correct": "B"
  },
  {
    "id": 22,
    "question": "A técnica de Web Scraping é usada para:",
    "options": {
      "A": "Limpar o cache do navegador.",
      "B": "Extrair dados de sites onde não há uma API disponível.",
      "C": "Proteger o site contra hackers.",
      "D": "Aumentar a velocidade da internet.",
      "E": "Deletar sites da concorrência."
    },
    "correct": "B"
  },
  {
    "id": 23,
    "question": "O processo de 'Data Cleansing' foca em:",
    "options": {
      "A": "Mudar a cor do logo da empresa.",
      "B": "Corrigir erros, duplicatas e inconsistências nos dados.",
      "C": "Comprar novos computadores.",
      "D": "Aumentar a quantidade de dados coletados.",
      "E": "Esconder os dados dos auditores."
    },
    "correct": "B"
  },
  {
    "id": 24,
    "question": "O que fazer com 'Missing Values' (dados faltantes) em colunas financeiras?",
    "options": {
      "A": "Excluir as linhas para o relatório ficar bonito.",
      "B": "Imputar valores (como 'Não Informado') para manter a integridade do total.",
      "C": "Chutar um valor qualquer.",
      "D": "Ignorar o problema.",
      "E": "Desligar o servidor."
    },
    "correct": "B"
  },
  {
    "id": 25,
    "question": "A 'Deduplicação' baseada em CPF/CNPJ evita:",
    "options": {
      "A": "Que o sistema fique lento.",
      "B": "Pagamentos em duplicidade e erros de contagem de clientes.",
      "C": "A necessidade de usar Power BI.",
      "D": "Que os funcionários usem redes sociais.",
      "E": "O ajuste pela inflação."
    },
    "correct": "B"
  },
  {
    "id": 26,
    "question": "'Garbage In, Garbage Out' (GIGO) significa que:",
    "options": {
      "A": "O lixo deve ser reciclado na empresa.",
      "B": "Se os dados de entrada forem ruins, a análise final será ruim.",
      "C": "O sistema apaga dados antigos automaticamente.",
      "D": "Dados de BI são descartáveis.",
      "E": "O lixo eletrônico deve ser evitado."
    },
    "correct": "B"
  },
  {
    "id": 27,
    "question": "Dados Secundários são aqueles:",
    "options": {
      "A": "Coletados internamente pela empresa.",
      "B": "Coletados de fontes externas (IBGE, Banco Central, etc).",
      "C": "Que não têm importância para o negócio.",
      "D": "Que são digitados pela segunda vez.",
      "E": "Que ficam guardados em pen drives."
    },
    "correct": "B"
  },
  {
    "id": 28,
    "question": "O cruzamento de dados primários com secundários permite:",
    "options": {
      "A": "Ver apenas o passado da empresa.",
      "B": "Contextualizar o desempenho interno com o mercado ou economia.",
      "C": "Reduzir o salário dos analistas.",
      "D": "Gastar menos energia elétrica.",
      "E": "Usar o Excel em vez do Power BI."
    },
    "correct": "B"
  },
  {
    "id": 29,
    "question": "Na etapa de Transformação (do ETL), o analista:",
    "options": {
      "A": "Apenas copia os dados.",
      "B": "Padroniza formatos, trata erros e cria novas lógicas.",
      "C": "Compra licenças de software.",
      "D": "Envia e-mails para os clientes.",
      "E": "Formata o computador."
    },
    "correct": "B"
  },
  {
    "id": 30,
    "question": "Um erro comum no tratamento de dados é:",
    "options": {
      "A": "Usar nomes claros para as colunas.",
      "B": "Deletar dados sem entender o impacto no volume financeiro total.",
      "C": "Criar documentação do processo.",
      "D": "Testar os dados antes de publicar.",
      "E": "Fazer backup."
    },
    "correct": "B"
  },
  {
    "id": 31,
    "question": "A Normalização Financeira pelo IPCA serve para:",
    "options": {
      "A": "Aumentar os lucros artificialmente.",
      "B": "Comparar valores de épocas diferentes de forma justa (valor real).",
      "C": "Pagar menos impostos.",
      "D": "Facilitar a digitação de notas fiscais.",
      "E": "Calcular a velocidade do estoque."
    },
    "correct": "B"
  },
  {
    "id": 32,
    "question": "O que é um 'Outlier' na análise de dados?",
    "options": {
      "A": "Um valor que está dentro da média esperada.",
      "B": "Um valor atípico que se afasta drasticamente do padrão (ex: fraude).",
      "C": "O nome do robô do TCU.",
      "D": "Uma tabela que não tem chaves.",
      "E": "O botão de sair do sistema."
    },
    "correct": "B"
  },
  {
    "id": 33,
    "question": "O robô 'Alice' do TCU utiliza análise de Outliers para:",
    "options": {
      "A": "Dar boas-vindas aos novos servidores.",
      "B": "Identificar indícios de sobrepreço em licitações.",
      "C": "Organizar as férias dos ministros.",
      "D": "Automatizar o envio de café.",
      "E": "Formatar as planilhas de RH."
    },
    "correct": "B"
  },
  {
    "id": 34,
    "question": "Na Análise de Variância (Orçado x Realizado), uma variação negativa no custo significa:",
    "options": {
      "A": "Que a empresa gastou mais do que o planejado.",
      "B": "Que a empresa economizou dinheiro.",
      "C": "Que as vendas aumentaram.",
      "D": "Que o BI está com erro.",
      "E": "Que a inflação caiu."
    },
    "correct": "A"
  },
  {
    "id": 35,
    "question": "Sazonalidade é um fenômeno que:",
    "options": {
      "A": "Acontece apenas uma vez na história.",
      "B": "Se repete em intervalos cíclicos e previsíveis (ex: Natal).",
      "C": "Indica a direção de longo prazo da empresa.",
      "D": "É impossível de prever.",
      "E": "Só existe no setor agrícola."
    },
    "correct": "B"
  },
  {
    "id": 36,
    "question": "A 'Tendência' em uma série temporal mostra:",
    "options": {
      "A": "O que aconteceu ontem.",
      "B": "A direção estrutural de crescimento ou queda no longo prazo.",
      "C": "As flutuações de feriados.",
      "D": "O nome do fornecedor mais caro.",
      "E": "A cor mais usada no dashboard."
    },
    "correct": "B"
  },
  {
    "id": 37,
    "question": "Por que desconsiderar a inflação em análises de 10 anos é um erro?",
    "options": {
      "A": "Porque o papel moeda muda de cor.",
      "B": "Porque o poder de compra muda, distorcendo o crescimento real.",
      "C": "Porque o Power BI não aceita números grandes.",
      "D": "Porque os impostos são fixos.",
      "E": "Porque os dados secundários são proibidos."
    },
    "correct": "B"
  },
  {
    "id": 38,
    "question": "Uma variância de 12% acima do orçamento de custos é lida no BI moderno como:",
    "options": {
      "A": "Um sucesso, pois gastar é bom.",
      "B": "Uma ineficiência de gestão ou falta de aderência ao plano (OBZ).",
      "C": "Um erro de digitação do contador.",
      "D": "Algo que o BI não consegue medir.",
      "E": "Motivo de premiação para o diretor."
    },
    "correct": "B"
  },
  {
    "id": 39,
    "question": "O Orçamento Base Zero (OBZ) exige que:",
    "options": {
      "A": "O orçamento do ano que vem seja igual ao deste ano.",
      "B": "Cada despesa seja justificada do zero, sem heranças automáticas.",
      "C": "O saldo bancário seja sempre zero.",
      "D": "Não existam funcionários na empresa.",
      "E": "Todos os dados sejam deletados todo dia."
    },
    "correct": "B"
  },
  {
    "id": 40,
    "question": "Séries temporais são úteis para:",
    "options": {
      "A": "Escolher a foto do perfil.",
      "B": "Visualizar o histórico e tentar prever comportamentos futuros.",
      "C": "Organizar a fila do refeitório.",
      "D": "Limpar o banco de dados.",
      "E": "Trocar as senhas dos usuários."
    },
    "correct": "B"
  },
  {
    "id": 41,
    "question": "A Lei de Acesso à Informação (LAI) foca em:",
    "options": {
      "A": "Esconder os gastos do governo.",
      "B": "Garantir a transparência e o acesso do cidadão aos dados públicos.",
      "C": "Proibir o uso de internet em órgãos públicos.",
      "D": "Criar impostos sobre a informação.",
      "E": "Proteger apenas os dados dos políticos."
    },
    "correct": "B"
  },
  {
    "id": 42,
    "question": "A Lei Geral de Proteção de Dados (LGPD) protege:",
    "options": {
      "A": "Os computadores contra poeira.",
      "B": "A privacidade e os dados sensíveis das pessoas físicas.",
      "C": "O sigilo dos gastos com publicidade.",
      "D": "Apenas empresas estrangeiras.",
      "E": "Os segredos de estado."
    },
    "correct": "B"
  },
  {
    "id": 43,
    "question": "O que é 'Data Literacy' (Letramento de Dados)?",
    "options": {
      "A": "A capacidade de digitar rápido.",
      "B": "A habilidade de ler, interpretar e argumentar com dados.",
      "C": "Ter um diploma em engenharia de software.",
      "D": "Saber consertar impressoras.",
      "E": "Decorar o nome de todas as tabelas."
    },
    "correct": "B"
  },
  {
    "id": 44,
    "question": "'Silos de Dados' ocorrem quando:",
    "options": {
      "A": "Os dados estão guardados em fazendas.",
      "B": "Departamentos não compartilham informações, isolando os dados.",
      "C": "O backup é feito em servidores de alta segurança.",
      "D": "A prefeitura usa apenas um sistema para tudo.",
      "E": "Os dados são públicos demais."
    },
    "correct": "B"
  },
  {
    "id": 45,
    "question": "APIs ajudam a acabar com os silos porque:",
    "options": {
      "A": "Elas deletam os sistemas antigos.",
      "B": "Permitem a comunicação e troca de dados automática entre diferentes sistemas.",
      "C": "São mais baratas que o Excel.",
      "D": "Substituem o trabalho dos servidores.",
      "E": "Funcionam sem internet."
    },
    "correct": "B"
  },
  {
    "id": 46,
    "question": "Na Governança de Dados, a 'Responsabilização Nominal' significa:",
    "options": {
      "A": "Que o erro é sempre do computador.",
      "B": "Que é possível identificar qual servidor inseriu ou alterou um dado.",
      "C": "Que as tabelas devem ter nomes de pessoas.",
      "D": "Que ninguém é responsável pelos dados.",
      "E": "Que as senhas devem ser públicas."
    },
    "correct": "B"
  },
  {
    "id": 47,
    "question": "No estágio 'Inteligência' da pirâmide DIKW, o gestor:",
    "options": {
      "A": "Apenas olha para o número bruto.",
      "B": "Toma uma decisão estratégica baseada no conhecimento extraído dos dados.",
      "C": "Ignora os relatórios do BI.",
      "D": "Formata o banco de dados.",
      "E": "Pede uma nova coleta de dados."
    },
    "correct": "B"
  },
  {
    "id": 48,
    "question": "A resistência cultural à modernização sistêmica é causada por:",
    "options": {
      "A": "Falta de energia elétrica.",
      "B": "Medo da tecnologia ou de perder o controle/cargo.",
      "C": "Excesso de conhecimento dos servidores.",
      "D": "Computadores muito modernos.",
      "E": "Uso excessivo de APIs."
    },
    "correct": "B"
  },
  {
    "id": 49,
    "question": "Um sistema de BI só é eficiente se houver:",
    "options": {
      "A": "Apenas tecnologia de ponta.",
      "B": "Tecnologia aliada a processos claros e pessoas capacitadas.",
      "C": " Muitos dados, mesmo que sejam ruins.",
      "D": "Proibição do uso de planilhas.",
      "E": "Um único usuário com acesso a tudo."
    },
    "correct": "B"
  },
  {
    "id": 50,
    "question": "O papel do Profissional de BI na Gestão Pública é:",
    "options": {
      "A": "Esconder os problemas da prefeitura.",
      "B": "Transformar dados em transparência e eficiência para o cidadão.",
      "C": "Digitar todas as notas fiscais manualmente.",
      "D": "Impedir o acesso dos auditores.",
      "E": "Criar gráficos que ninguém entende."
    },
    "correct": "B"
  }
];
