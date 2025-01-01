import React, { useEffect, useState } from 'react';
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function RetseptDc() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("https://cadd15f6870a5ba5fca4.free.beeceptor.com/api/users/")
      .then(res => {
        const filteredPatients = res.data.filter(user => user.role === 'bemor');
        setPatients(filteredPatients);
      })
      .catch(err => console.log(err)); 
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r p-2 tablet:p-10">
      <h1 className="text-2xl font-bold mb-8 -mr-3.5">Retsept</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {patients.map((patient, index) => (
          <Link
            key={index}
            to={`/retseptdetail/${patient.id}`}
            className="bg-white gap-y-3 w-full rounded-lg shadow-lg tablet:flex-row flex-col p-3 tablet:p-10 flex items-start tablet:items-center"
          >
            <img
              src={patient.image || 'default-image-path'} // Default image path in case image is missing
              alt={patient.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">{patient.name}</h2>
              <p className="text-gray-600">{patient.diagnosis}</p>
              <p className="text-sm text-gray-500">Date: {patient.date}</p>
            </div>
            <div className="tablet:ml-auto font-arial">
              <Button className='bg-[--rang]'>Retsept yozish</Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RetseptDc;
