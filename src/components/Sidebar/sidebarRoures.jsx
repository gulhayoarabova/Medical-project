import React from 'react';
import {
  NotepadText,
  NotebookPen,
  CreditCard,
  MessageSquarePlus,
  Syringe,
  ChartPie,
  HandHeart,
  Bot,
  LogOut,
  UserRoundPlus,
  UserRoundSearch,
} from 'lucide-react';

export const baza = [
    {
        id: "1",
        icon: <NotepadText className="h-5 w-5" />,
        title: "Ko’rikka yozilish",
        navigate: "/korik",
        role: ["bemor"],
      },
      {
        id: "2",
        icon:    <NotebookPen className="h-5 w-5" />,
        title: "Retsept",
        navigate: "/retsept",
        role: ["bemor"],

      },
      {
        id: "3",
        icon: <CreditCard className="h-5 w-5" />,
        title: "Aboniment",
        navigate: "/aboniment",
        role: ["bemor"],

      },
      {
        id: "4",
        icon: <MessageSquarePlus className="h-5 w-5" />,
        title: "Personal Doctor",
        navigate: "/personal",
        role: ["bemor","admin"],

      },
      {
        id: "5",
        icon: <Syringe className="h-5 w-5" />,
        title: "Dorixona",
        navigate: "/dorixona",
        role: ["bemor"],


      },
      {
        id: "6",
        icon:<ChartPie className="h-5 w-5" />,
        title: "Analiz",
        navigate: "/analiz",
        role: ["bemor"],

        
      },
      {
        id: "7",
        icon: <HandHeart className="h-5 w-5" />,
        title: "Donor bo’lish",
        navigate: "/donor",
        role: ["bemor"],

      },
      {
        id: "8",
        icon: <Bot className="h-5 w-5" />,
        title: "Chat AI",
        navigate: "/doctorai",
        role: ["bemor"],

      },
      {
        id: "9",
        icon: <UserRoundPlus className="h-5 w-5" />,
        title: "AddPersonal",
        navigate: "/addpersonal",
        role: ["admin"],
      },
      {
        id: "10",
        icon: <NotebookPen className="h-5 w-5" />,
        title: "Retsept Yozish",
        navigate: "/retseptcrt",
        role: ["doctor"],
      },
      {
        id: "11",
        icon: <NotepadText className="h-5 w-5" />,
        title: "Ko’rikka yozilganlar",
        navigate: "/korikkayozilganlar",
        role: ["admin","doctor"],
      },
      {
        id: "12",
        icon: <UserRoundSearch className="h-5 w-5" />,
        title: "Users",
        navigate: "/users",
        role: ["admin","doctor"],
      },
     
     
     
     
      {
        id: "14",
        icon: <LogOut className="h-5 w-5" />,
        title: "Akauntdan chiqish",
        navigate: "/register",
        role: ["bemor","doctor", "admin"],

      },
]