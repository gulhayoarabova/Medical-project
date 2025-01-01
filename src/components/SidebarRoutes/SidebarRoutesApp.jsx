import Aboniment from "../../pages/Aboniment";
import Analiz from "../../pages/Analiz";
import DonorBolish from "../../pages/DonorBo’lish";
import Dorixona from "../../pages/Dorixona";
import PersonalDoctor from "../../pages/PersonalDoctor";
import Retsept from "../../pages/Retsept";
import RetseptCrt from "../../pages/RetseptDc"
import DorixonaChcked from "../../pages/DorixonaChcked";
import RetseptDc from "../../pages/RetseptDc";
import AbonimentRegister from "../../pages/AbonimentRegister";
import AddPersonal from "../../pages/AddPersonal"
import RetseptDetail from "../../pages/RetseptDcDetail";
import KorikkaYozilish from "../../pages/KorikkaYozilish";
import KorikkaYozilaganlar from "../../pages/KorikkaYozilaganlar";
import Users from "../../pages/Users";
import ChatAi from "../../pages/ChatAi";
import NotPage from "../404Page"
export const baza1 = [
    {
        id: "1",
        element:  <KorikkaYozilish/>,
        path: "korik",
        role: ["bemor"],
      },
      {
        id: "2",
        element: <Retsept/>,
        path: "retsept",
        role: ["bemor"],

      },
      
      {
        id: "3",
        element:  <Aboniment/>,
        path: "aboniment",
        role: ["bemor"],

      },
      {
        id: "4",
        element: <PersonalDoctor/>,
        path:  "personal",
        role: ["bemor","doctor"],

      },
      {
        id: "5",
        element: <Dorixona/>,
        path: "dorixona",
        role: ["bemor"],


      },
      {
        id: "6",
        element:  <Analiz/>,
        path:  "analiz",
        role: ["bemor"],

        
      },
      {
        id: "7",
        element: <DonorBolish/>,
        path:  "donor",
        role: ["bemor"],

      },
      {
        id: "8",
        element:<ChatAi/>,
        path: "doctorai",
        role: ["bemor"],

      },
      {
        id: "9",
        element:  <DorixonaChcked/>,
        path: "dorixonachcked",
        role: ["bemor"],

      },
     {
        id: "10",
        element: <RetseptCrt/>,
        path: "retseptcrt",
        role: ["doctor"],

      },
      {
        id: "11",
        element:  <AbonimentRegister/>,
        path: "abonimentregister",
        role: ["bemor"],
        
      },
      {
        id: "12",
        element: <RetseptDc/>,
        path: "retsept",
        role: ["doctor"],

      },
      {
        id: "13",
        element: <AddPersonal/>,
        path: "addpersonal",
        role: ["admin"],

      },
      {
        id: "14",
        element: <RetseptDetail/>,
        path: "retseptdetail/:id",
        role: ["doctor"],

      },
      {
        id: "15",
        element:  <KorikkaYozilaganlar/>,
        path: "korikkayozilganlar",
        role: ["admin","doctor"],
      },
      {
        id: "16",
        element:  <Users/>,
        path: "users",
        role: ["admin","doctor"],
      },
      {
        id: "17",
        element:  <NotPage/>,
        path: "*",
        role: ["admin","doctor","bemor"],
      },
     
]