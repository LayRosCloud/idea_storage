export function useProjectQuery() {
  return [
    {
      id: "1",
      title: "VoiceTok",
      concept: "Приложение для разговора с котятами",
      description:
        "Приложение где ваш кот будет управлять вами полностью согласуя ваши задачи, к примеру... и т.д.",
      visibleStatus: "VISIBLE",
      tags: [
        {
          id: crypto.randomUUID(),
          name: "Коты",
        },
        {
          id: crypto.randomUUID(),
          name: "#Мама",
        },
      ],
    },
    {
      id: "2",
      title: "Protobin",
      concept: "Приложение для разговора с котятами",
      description:
        "Приложение где ваш кот будет управлять вами полностью согласуя ваши задачи, к примеру... и т.д.",
      visibleStatus: "VISIBLE",
      tags: [
        {
          id: crypto.randomUUID(),
          name: "ДизайнДокумент",
        },
        {
          id: crypto.randomUUID(),
          name: "Программирование",
        },
      ],
    },
    {
      id: "3",
      title: "Offender",
      concept: "Приложение для разговора с котятами",
      description:
        "Приложение где ваш кот будет управлять вами полностью согласуя ваши задачи, к примеру... и т.д.",
      visibleStatus: "VISIBLE",
      tags: [
        {
          id: crypto.randomUUID(),
          name: "Коты",
        },
        {
          id: crypto.randomUUID(),
          name: "#Мама",
        },
      ],
    },
        {
      id: "4",
      title: "ImpossibleAI",
      concept: "Приложение для разговора с котятами",
      description:
        "Приложение где ваш кот будет управлять вами полностью согласуя ваши задачи, к примеру... и т.д.",
      visibleStatus: "VISIBLE",
      tags: [
        {
          id: crypto.randomUUID(),
          name: "Коты",
        },
        {
          id: crypto.randomUUID(),
          name: "#Мама",
        },
      ],
    },
        {
      id: "5",
      title: "BubbleGum",
      concept: "Приложение для разговора с котятами",
      description:
        "Приложение где ваш кот будет управлять вами полностью согласуя ваши задачи, к примеру... и т.д.",
      visibleStatus: "VISIBLE",
      tags: [
        {
          id: crypto.randomUUID(),
          name: "Коты",
        },
        {
          id: crypto.randomUUID(),
          name: "#Мама",
        },
      ],
    },
    {
      id: "6",
      title: "TakeTime",
      concept: "Приложение для разговора с котятами",
      description:
        "Приложение где ваш кот будет управлять вами полностью согласуя ваши задачи, к примеру... и т.д.",
      visibleStatus: "VISIBLE",
      tags: [
        {
          id: crypto.randomUUID(),
          name: "Коты",
        },
        {
          id: crypto.randomUUID(),
          name: "#Мама",
        },
      ],
    },
    {
      id: "7",
      title: "CoffeeTalk",
      concept: "Приложение для разговора с котятами",
      description:
        "Приложение где ваш кот будет управлять вами полностью согласуя ваши задачи, к примеру... и т.д.",
      visibleStatus: "VISIBLE",
      tags: [
        {
          id: crypto.randomUUID(),
          name: "Коты",
        },
        {
          id: crypto.randomUUID(),
          name: "#Мама",
        },
      ],
    },
    {
      id: "8",
      title: "Maybe",
      concept: "Приложение для разговора с котятами",
      description:
        "Приложение где ваш кот будет управлять вами полностью согласуя ваши задачи, к примеру... и т.д.",
      visibleStatus: "VISIBLE",
      tags: [
        {
          id: crypto.randomUUID(),
          name: "Коты",
        },
        {
          id: crypto.randomUUID(),
          name: "#Мама",
        },
      ],
    },
    {
      id: "9",
      title: "Huilan",
      concept: "Приложение для разговора с котятами",
      description:
        "Приложение где ваш кот будет управлять вами полностью согласуя ваши задачи, к примеру... и т.д.",
      visibleStatus: "VISIBLE",
      tags: [
        {
          id: crypto.randomUUID(),
          name: "Коты",
        },
        {
          id: crypto.randomUUID(),
          name: "#Мама",
        },
      ],
    },
    {
      id: "10",
      title: "Geroin",
      concept: "Приложение для разговора с котятами",
      description:
        "Приложение где ваш кот будет управлять вами полностью согласуя ваши задачи, к примеру... и т.д.",
      visibleStatus: "VISIBLE",
      tags: [
        {
          id: crypto.randomUUID(),
          name: "Коты",
        },
        {
          id: crypto.randomUUID(),
          name: "#Мама",
        },
      ],
    }
    
  ];
}

export function useEventQuery() {
  return [
    {
      id: '1',
      createdAt: new Date('2025-11-11'),
      type: 'board',
      projectName: 'VoiceTok',
      fragmentName: null,
      description: 'В мире, где владельцы котов тратят часы на списки дел, мы создаём революционное решение. VoiceTok превращает рутинные задачи в игру с участием вашего питомца. Пользователь произносит задачу, кот мяукает в ответ (через микрофон), и AI определяет уровень «одобрения». Высокий рейтинг от кота = приоритетная задача. Низкий рейтинг = возможно, стоит пересмотреть планы.',
      user: {
        id: '1',
        name: 'betrayal96',
        role: 'Lead Dev',
        avatar: 'B9'
      }
    }
  ];
}