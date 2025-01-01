import React, { useState } from 'react';
import './Dorixona.css'; 

// LocalStorage'dan UserData'ni olish
const UserData = JSON.parse(localStorage.getItem("UserData")) || '';

// Agar UserData ob'ekt bo'lsa, uni to'g'ri formatga o'girib oling
const userName = typeof UserData === 'string' ? UserData : UserData?.name || '';

// Dastlabki data massivini yarating
const data = [
    { name: userName || 'John Doe', code: 'ID001', date: 'Jan 15, 2025 at 02:30 pm' },
    { name: 'Jane Smith', code: 'ID002', date: 'Feb 20, 2025 at 11:45 am' },
    { name: 'Alice Johnson', code: 'ID003', date: 'Mar 12, 2025 at 01:00 pm' },
    { name: 'Bob Brown', code: 'ID004', date: 'Apr 08, 2025 at 03:15 pm' },
    { name: 'Emily Davis', code: 'ID005', date: 'May 23, 2025 at 09:30 am' },
    { name: 'Michael Wilson', code: 'ID006', date: 'Jun 19, 2025 at 04:00 pm' },
    { name: 'Sarah Lee', code: 'ID007', date: 'Jul 14, 2025 at 10:30 am' },
    { name: 'David Clark', code: 'ID008', date: 'Aug 26, 2025 at 02:45 pm' },
    { name: 'Olivia Martinez', code: 'ID009', date: 'Sep 30, 2025 at 12:00 pm' },
    { name: 'Daniel Walker', code: 'ID010', date: 'Oct 17, 2025 at 03:00 pm' },
    { name: 'Sophia Lewis', code: 'ID011', date: 'Nov 04, 2025 at 01:15 pm' },
    { name: 'James White', code: 'ID012', date: 'Dec 22, 2025 at 11:00 am' },
    { name: 'Natalie Turner', code: 'ID013', date: 'Dec 29, 2025 at 04:30 pm' },
    { name: 'Chris Evans', code: 'ID014', date: 'Nov 11, 2025 at 09:45 am' },
    { name: 'Isabella King', code: 'ID015', date: 'Oct 03, 2025 at 02:15 pm' }
];

if (userName) {
    data.unshift({ name: userName, code: 'ID000', date: new Date().toLocaleString() });
}

function KorikkaYozilaganlar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
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
            <th>Xodimlar</th>
            <th>Vazifasi</th>
            <th>Qoshilgan sana</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.code}>
              <td>{item.name}</td>
              <td>{item.code}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default KorikkaYozilaganlar;
