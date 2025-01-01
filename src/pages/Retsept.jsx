import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Spinner from "../components/Spinner";

function Recepts() {
  const [dorilar, setDorilar] = useState([]);
  const [filteredDori, setFilteredDori] = useState([]);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const fetchData = () => {
    axios
      .get("https://telegram-api-1-ska9.onrender.com/users", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDorilar(res.data || []);
        const filtered = res.data.filter(
          item => String(item._id) === String(id)
        );
        setFilteredDori(filtered);
      })
      .catch((error) => {
        console.error("Xato yuz berdi:", error.response || error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   if (dorilar.length > 0) {
  //     const filtered = dorilar.filter((item) => String(item._id) === String(id));
  //     setFilteredDori(filtered);
  //     console.log("Filtered Dori:", filtered);
  //   }
  // }, [dorilar]);

  // useEffect(() => {
  //   console.log("Filtered Dori o'zgardi:", filteredDori);
  // }, [filteredDori]);
  return (
    <div className="p-3">
      <h1 className="mb-6 text-4xl font-semibold">Retseptlar</h1>
      <div className="flex justify-start flex-wrap items-start gap-5">
        {filteredDori.map((prescription) => (
          <div
            key={prescription._id}
            className="Card bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl w-full sm:w-[290px] md:w-[290px]"
          >
            <ul className="space-y-2">
              <h1 className="text-3xl font-bold">
                {"Dr " + prescription.doctor}
              </h1>
              <li className="list-inside ml-4">
                <Menu>
                  <MenuHandler>
                    <h2 className="mb-3 text-xl flex flex-col capitalize font-['Poppins']">
                      {prescription.drug
                        ? prescription.drug.split(",").map((word, index) => (
                            <span key={index} className="mr-1">
                              {word}
                            </span>
                          ))
                        : "Dori nomi mavjud emas"}
                    </h2>
                  </MenuHandler>
                  <MenuList className="Menu p-2 bg-white shadow-lg rounded-lg">
                    <MenuItem className="font-semibold">Tavsif:</MenuItem>
                    <MenuItem>
                      {prescription.drugAdv || "Tavsif mavjud emas"}
                    </MenuItem>
                    <MenuItem className="font-semibold">
                      Yozilgan Sana:
                    </MenuItem>
                    <MenuItem>
                      {prescription.date || "Sana mavjud emas"}
                    </MenuItem>
                  </MenuList>
                </Menu>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recepts;