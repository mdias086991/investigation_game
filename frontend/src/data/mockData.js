export const mockCases = [
  {
    id: "1",
    title: "O Mistério da Mansão Blackwood",
    description: "Uma família rica é encontrada morta em sua mansão isolada. Não há sinais de arrombamento, mas várias pistas estranhas foram deixadas para trás.",
    difficulty: "Médio",
    rating: "4.5",
    estimatedTime: "45 min",
    solved: "1.2k",
    story: `Na madrugada de 15 de outubro, a família Blackwood foi encontrada morta em sua mansão isolada nos arredores da cidade. 

    Os corpos de Richard Blackwood (52), sua esposa Margaret (48) e seu filho Thomas (19) foram descobertos pela governanta, Sra. Elena Vasquez, quando ela chegou para trabalhar na manhã seguinte.

    A polícia foi chamada às 8:30h e a cena foi isolada imediatamente. Não há sinais de arrombamento ou roubo - joias caras e dinheiro permaneceram intocados.

    Você foi designado como o detetive principal deste caso. Examine as evidências cuidadosamente e descubra o que realmente aconteceu naquela noite fatídica.`,
    evidence: [
      {
        id: "1",
        type: "conversation",
        title: "Mensagens entre Richard e Sócio",
        content: "Conversa do WhatsApp revelando tensões financeiras na empresa familiar",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
        details: "Richard: Precisamos conversar sobre os números da empresa\nSócio: Não posso mais cobrir os prejuízos\nRichard: Você sabe o que isso significa para minha família?"
      },
      {
        id: "2",
        type: "document",
        title: "Relatório de Autopsia Preliminar",
        content: "Envenenamento por substância não identificada encontrada em todos os corpos",
        imageUrl: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?w=500&h=300&fit=crop",
        details: "Causa da morte: Insuficiência respiratória aguda causada por toxina desconhecida. Estimativa: morte entre 23:00 e 01:00."
      },
      {
        id: "3",
        type: "conversation",
        title: "Última chamada de Thomas",
        content: "Gravação da última ligação feita por Thomas Blackwood",
        imageUrl: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=300&fit=crop",
        details: "Thomas: Pai, tem algo estranho acontecendo aqui... Elena está agindo de forma estranha. Ela trouxe o jantar e... [linha cortada]"
      }
    ],
    suspects: [
      {
        name: "Elena Vasquez",
        role: "Governanta",
        motive: "Descobriu que seria demitida sem aviso prévio",
        alibi: "Diz ter saído às 18h como sempre"
      },
      {
        name: "Marcus Blackwood",
        role: "Irmão de Richard",
        motive: "Herança e problemas financeiros pessoais",
        alibi: "Estava em casa assistindo TV"
      },
      {
        name: "Dr. Harrison",
        role: "Médico da família",
        motive: "Richard descobriu prescrições ilegais",
        alibi: "Plantão no hospital até às 22h"
      }
    ],
    questions: [
      {
        id: "1",
        question: "Quem você acredita que é o principal suspeito?",
        options: ["Elena Vasquez", "Marcus Blackwood", "Dr. Harrison", "Outra pessoa"],
        correctAnswer: 0
      },
      {
        id: "2", 
        question: "Qual foi o método utilizado no crime?",
        options: ["Veneno na comida", "Veneno na bebida", "Gás tóxico", "Injeção"],
        correctAnswer: 0
      },
      {
        id: "3",
        question: "Qual foi o principal motivo do crime?",
        options: ["Dinheiro/Herança", "Vingança pessoal", "Chantagem", "Acidente"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "2",
    title: "Assalto ao Banco Central",
    description: "Um elaborado roubo ao banco central deixou os investigadores confusos. O sistema de segurança foi desabilitado de dentro para fora.",
    difficulty: "Difícil",
    rating: "4.8",
    estimatedTime: "60 min",
    solved: "856",
    story: `Na manhã de terça-feira, o Banco Central foi alvo do maior assalto da história da cidade. Os criminosos conseguiram burlar todos os sistemas de segurança e escapar com 5 milhões em dinheiro.

    O mais intrigante é que não houve violência - nenhum funcionário foi ferido e os assaltantes pareciam conhecer perfeitamente a rotina do banco.

    As câmeras de segurança foram desabilitadas 15 minutos antes do assalto, e o alarme nunca foi acionado. Isso sugere a participação de alguém de dentro.

    Sua missão é descobrir como o crime foi executado e identificar todos os envolvidos.`,
    evidence: [
      {
        id: "1",
        type: "document",
        title: "Relatório de Segurança",
        content: "Sistema desabilitado às 09:45h por usuário autorizado",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop",
        details: "Sistema desabilitado pelo login 'JSANTOS' - José Santos, Chefe de Segurança há 15 anos"
      },
      {
        id: "2",
        type: "conversation",
        title: "Mensagens Suspeitas",
        content: "Troca de mensagens entre funcionário e número desconhecido",
        imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
        details: "Desconhecido: Tudo pronto para amanhã?\nFuncionário: Sim, farei minha parte às 9:45 como combinado\nDesconhecido: Ótimo, não esqueça de desligar tudo"
      }
    ],
    suspects: [
      {
        name: "José Santos",
        role: "Chefe de Segurança",
        motive: "Problemas financeiros graves",
        alibi: "Estava no banco durante o assalto"
      },
      {
        name: "Maria Silva",
        role: "Gerente de Operações",
        motive: "Acesso aos códigos do cofre",
        alibi: "Chegou 30 min após o início do expediente"
      }
    ],
    questions: [
      {
        id: "1",
        question: "Quem desabilitou o sistema de segurança?",
        options: ["José Santos", "Maria Silva", "Hacker externo", "Criminoso disfarçado"],
        correctAnswer: 0
      },
      {
        id: "2",
        question: "Como os criminosos souberam a rotina exata?",
        options: ["Observação externa", "Informante interno", "Hackearam o sistema", "Coincidência"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "3",
    title: "Desaparecimento na Universidade",
    description: "Uma estudante de medicina desaparece misteriosamente do campus. Sua mochila foi encontrada no laboratório de química com sinais estranhos.",
    difficulty: "Fácil",
    rating: "4.2",
    estimatedTime: "30 min",
    solved: "2.1k",
    story: `Ana Paula, estudante de medicina de 22 anos, desapareceu na quinta-feira após sua aula noturna de química orgânica.

    Sua mochila foi encontrada no laboratório de química pela equipe de limpeza, contendo seus livros, mas com sinais de que algo químico foi derramado sobre ela.

    Os colegas relatam que Ana estava preocupada com algo nas últimas semanas, mas se recusava a falar sobre o assunto.

    Sua última mensagem no celular foi enviada às 21:30h para sua irmã: "Descobri algo importante. Te conto quando chegar em casa."

    O campus tem câmeras de segurança, mas algumas não estavam funcionando naquela noite.`,
    evidence: [
      {
        id: "1",
        type: "conversation",
        title: "Última conversa com a irmã",
        content: "Mensagens do WhatsApp revelando preocupações",
        imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
        details: "Ana: Irmã, estou descobrindo coisas estranhas aqui na faculdade\nIrmã: Que tipo de coisas?\nAna: Prefiro não falar por mensagem. Nos vemos em casa.\nAna: Descobri algo importante. Te conto quando chegar em casa."
      },
      {
        id: "2",
        type: "document",
        title: "Relatório do Laboratório",
        content: "Substâncias químicas em falta no inventário",
        imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop",
        details: "Inventário mostra falta de 200ml de ácido clorídrico e 150ml de éter dietílico. Última pessoa a acessar: Ana Paula às 21:15h"
      }
    ],
    suspects: [
      {
        name: "Prof. Maurício",
        role: "Professor de Química",
        motive: "Ana descobriu irregularidades em suas pesquisas",
        alibi: "Saiu do campus às 20h"
      },
      {
        name: "Carlos",
        role: "Colega de classe",
        motive: "Interesse romântico não correspondido",
        alibi: "Estava na biblioteca até às 22h"
      }
    ],
    questions: [
      {
        id: "1",
        question: "O que Ana descobriu?",
        options: ["Experimentos ilegais", "Roubo de equipamentos", "Falsificação de notas", "Tráfico de drogas"],
        correctAnswer: 0
      },
      {
        id: "2",
        question: "Por que as substâncias químicas estavam em falta?",
        options: ["Ana as roubou", "Foram usadas contra Ana", "Experimento mal sucedido", "Erro de inventário"],
        correctAnswer: 1
      }
    ]
  }
];