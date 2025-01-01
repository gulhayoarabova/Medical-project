import React from 'react';
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

const doctors = [
  { name: "Dr.John", specialty: "Tish shifokori", image: imgDoctor },
  { name: "Dr.Tania", specialty: "Pediator shifokori", image: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg" },
  { name: "Dr.Wert", specialty: "Ginekolog shifokori", image: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg" },
  { name: "Dr.Gran", specialty: "Nevrolog shifokori", image: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg" },
  { name: "Dr.Levu", specialty: "Psixiator shifokori", image: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg" },
  { name: "Dr.Walker", specialty: "Psixiator shifokori", image: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg" },
];

function PersonalDoctor() {
  return (
    <div className="flex ml-[5rem] flex-wrap gap-3 pt-9">
      {doctors.map((doctor, index) => (
        <Card key={index} color="transparent" shadow={false} className="w-full hover:shadow-lg duration-500 max-w-[21rem] border border-gray-300 bg-white p-5">
          <CardHeader color="transparent" floated={false} shadow={false} className="mx-0 flex items-center gap-4 pt-0 pb-8">
            <Avatar size="lg" variant="circular" src={doctor.image} alt={`Doctor ${doctor.name}`} />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">{doctor.name}</Typography>
                <div className="flex items-center gap-0">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
              </div>
            </div>
          </CardHeader>
          <div className="p-0 flex items-center justify-between">
            <Typography>{doctor.specialty}</Typography>
            <Button>Ko'proq</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default PersonalDoctor;
