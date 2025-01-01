import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dorixona.css";

function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios
      .get("https://cadd15f6870a5ba5fca4.free.beeceptor.com/api/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    (item.name || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Korikka yozilganlar Royxati</h1>
      <input
        type="text"
        placeholder="Qidirish..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <table className="pharmacy-table">
        <thead>
          <tr>
            <th>Ism Familiya</th>
            <th>Vazifalari</th>
            <th className="tablet:block hidden">Telefon raqam</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              {" "}
              <td>{item.name || "N/A"}</td>
              <td>{item.role || "N/A"}</td>
              <td className="tablet:block hidden">{item.tel || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
