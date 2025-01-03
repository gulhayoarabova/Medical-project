import React, { useEffect, useState } from 'react';
import '../App.css';
import imgDoctor from "../assets/PersonalDoctor.png";
import { Card, CardHeader, Input, Typography, Avatar, Button } from "@material-tailwind/react";
import { Search as SearchIcon } from 'lucide-react';

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-yellow-700">
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PersonalDoctor() {
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState({ dName: "", sphere: "" });
  const [editDoctor, setEditDoctor] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);  // Simulate admin role

  const staticImages = [
    imgDoctor,
    "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
    "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
  ];

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://localhost:3333/doc");
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  const handleAddDoctor = async () => {
    try {
      const response = await fetch("http://localhost:3333/doc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDoctor),
      });

      if (response.ok) {
        const addedDoctor = await response.json();
        setDoctors((prevDoctors) => [...prevDoctors, addedDoctor]);
        setNewDoctor({ dName: "", sphere: "" });
      }
    } catch (error) {
      console.error("Error adding doctor:", error);
    }
  };

  const handleUpdateDoctor = async (id) => {
    try {
      const response = await fetch(`http://localhost:3333/doc/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editDoctor),
      });

      if (response.ok) {
        const updatedDoctor = await response.json();
        setDoctors((prevDoctors) =>
          prevDoctors.map((doctor) => (doctor._id === id ? updatedDoctor : doctor))
        );
        setEditDoctor(null);
      }
    } catch (error) {
      console.error("Error updating doctor:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3333/doc/${id}`, {
        method: "DELETE",
      });
      setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor._id !== id));
    } catch (error) {
      console.error("Error deleting doctor:", error);
    }
  };

  return (
    <div className="flex flex-col ml-[5rem] gap-6 pt-9">
      {/* Add Doctor Form */}
      {isAdmin && (
        <div className="flex gap-4">
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Doctor Name"
              value={newDoctor.dName}
              onChange={(e) => setNewDoctor({ ...newDoctor, dName: e.target.value })}
              className="placeholder-gray-700 bg-white border-none outline-none focus:outline-none focus:ring-0 focus:border-none"
            />
            <Input
              type="text"
              placeholder="Sphere"
              value={newDoctor.sphere}
              onChange={(e) => setNewDoctor({ ...newDoctor, sphere: e.target.value })}
              className="placeholder-gray-700 bg-white border-none outline-none focus:outline-none focus:ring-0 focus:border-none"
            />
          </div>
          <Button onClick={handleAddDoctor}>Add Doctor</Button>
        </div>
      )}

      {/* Doctors List */}
      <div className="flex flex-wrap gap-3">
        {doctors.map((doctor, index) => (
          <Card
            key={doctor._id}
            color="transparent"
            shadow={false}
            className="w-full hover:shadow-lg duration-500 max-w-[28rem] border border-gray-300 bg-white p-5"
          >
            <CardHeader color="transparent" floated={false} shadow={false} className="mx-0 flex items-center gap-4 pt-0 pb-8">
              <Avatar
                size="lg"
                variant="circular"
                src={staticImages[index % staticImages.length]}
                alt={`Doctor ${doctor.dName}`}
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  {editDoctor?.id === doctor._id && isAdmin ? (
                    <div className="flex flex-col gap-2">
                      <Input
                        value={editDoctor.dName}
                        onChange={(e) => setEditDoctor({ ...editDoctor, dName: e.target.value })}
                        className="placeholder-gray-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                      />
                      <Input
                        value={editDoctor.sphere}
                        onChange={(e) => setEditDoctor({ ...editDoctor, sphere: e.target.value })}
                        className="placeholder-gray-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                      />
                      <Button onClick={() => handleUpdateDoctor(doctor._id)}>Save</Button>
                    </div>
                  ) : (
                    <>
                      <Typography variant="h5" color="blue-gray">{doctor.dName}</Typography>
                      <Typography>{doctor.sphere}</Typography>
                    </>
                  )}
                </div>
              </div>
            </CardHeader>
            {isAdmin && (
              <div className="flex gap-2 mt-2">
                <Button
                  onClick={() => setEditDoctor({ id: doctor._id, dName: doctor.dName, sphere: doctor.sphere })}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(doctor._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                >
                  Delete
                </Button>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PersonalDoctor;
