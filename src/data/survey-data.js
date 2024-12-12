export const type_answers_enum={
  single:0,
  multi:1
}


export const SURVEYDATA = {
  title: "Ankieta - Pozytywne aspekty sztucznej inteligencji",
  data: [
    {
      id: 0,
      title:
        "Jakie są Twoje ogólne odczucia dotyczące sztucznej inteligencji (AI)?",
        type:type_answers_enum.single,
      answers: [
        {
          key: 1,
          answer: "Bardzo pozytywne",
        },
        {
          key: 2,
          answer: "Raczej pozytywne",
        },
        {
          key: 3,
          answer: "Neutralne",
        },
        {
          key: 4,
          answer: "Raczej negatywne",
        },
        {
          key: 5,
          answer: "Bardzo negatywne",
        },
      ],
    },
    {
      id: 1,
      title:
        "Czy uważasz, że sztuczna inteligencja ma potencjał do poprawy jakości życia?",
        type:type_answers_enum.single,
      answers: [
        {
          key: 1,
          answer: "Tak, w wielu aspektach",
        },
        {
          key: 2,
          answer: "Tak, ale tylko w niektórych dziedzinach",
        },
        {
          key: 3,
          answer: "Nie jestem pewny/a",
        },
        {
          key: 4,
          answer: "Nie, nie wierzę w pozytywne efekty AI",
        },
        {
          key: 5,
          answer: "Zdecydowanie nie",
        },
      ],
    },
    {
      id: 2,
      title:
        "W jakich dziedzinach sztuczna inteligencja powinna być wykorzystywana? (Można wybrać więcej niż jedną opcję)",
        type:type_answers_enum.multi,
      answers: [
        {
          key: 1,
          answer: "Medycyna",
        },
        {
          key: 2,
          answer: "Edukacja",
        },
        {
          key: 3,
          answer: "Ochrona środowiska",
        },
        {
          key: 4,
          answer: "Przemysł i produkcja",
        },
        {
          key: 5,
          answer: "Sztuka i kultura",
        },
        {
          key: 6,
          answer: "Finanse",
        },
        {
          key: 7,
          answer: "Inne",
        },
      ],
    },
    {
      id: 3,
      title: "Czy masz obawy związane z rozwojem sztucznej inteligencji?",
      type:type_answers_enum.single,
      answers: [
        {
          key: 1,
          answer: "Tak, mam duże obawy",
        },
        {
          key: 2,
          answer: "Tak, mam pewne obawy",
        },
        {
          key: 3,
          answer: "Nie, nie mam obaw",
        },
        {
          key: 4,
          answer: "Nie, AI mnie nie martwi wcale",
        },
      ],
    },
    {
      id: 4,
      title:
        "W jaki sposób chciałbyś/abyś być informowany/a o pozytywnych aspektach sztucznej inteligencji?",
        type:type_answers_enum.multi,
      answers: [
        {
          key: 1,
          answer: "Artykuły i blogi",
        },
        {
          key: 2,
          answer: "Wideo i podcasty",
        },
        {
          key: 3,
          answer: "Infografiki i prezentacje",
        },
        {
          key: 4,
          answer: "Webinaria i wydarzenia online",
        },
        {
          key: 5,
          answer: "Inne",
        },
      ],
    },
    {
      id: 5,
      title:
        "Jakie zmiany w postrzeganiu sztucznej inteligencji są Twoim zdaniem najważniejsze?",
        type:type_answers_enum.multi,
      answers: [
        {
          key: 1,
          answer: "Zwiększenie świadomości na temat korzyści z AI",
        },
        {
          key: 2,
          answer: "Redukcja obaw związanych z jej rozwojem",
        },
        {
          key: 3,
          answer: "Zrozumienie zastosowań AI w życiu codziennym",
        },
        {
          key: 4,
          answer: "Zwiększenie transparentności działań AI w różnych branżach",
        },
        {
          key: 5,
          answer: "Inne",
        },
      ],
    },
    {
      id: 6,
      title:
        "Czy chciałbyś/abyś dowiedzieć się więcej na temat filozoficznych koncepcji związanych z AI, np. Punktu Omega Pierre’a Teilharda de Chardin?",
        type:type_answers_enum.single,
      answers: [
        {
          key: 1,
          answer: "Tak, jestem zainteresowany/a",
        },
        {
          key: 2,
          answer:
            "Może, jeśli będzie to związane z praktycznymi zastosowaniami",
        },
        {
          key: 3,
          answer: "Nie, nie interesuje mnie to",
        },
      ],
    },
  ],
};
