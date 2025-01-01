import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

import {
  Card,

} from "@material-tailwind/react";

import {
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

function CheckIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-3 w-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
  }

function Aboniment() {
    const navigate = useNavigate()

  return (
    <>
    <div className="div flex flex-wrap gap-y-3 justify-center">
      <Card color="gray" variant="gradient" className="w-full mr-3 max-w-[20rem] p-5 overflow-hidden duration-500 overflow-x-hidden hover:scale-95   bg-gradient-to-tr from-[#ff1b6b] to-[#ffc8c8]">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            standard
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-5 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>100{""}
            <span className="self-end text-4xl">/ oylik</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">12 ta doktor korigi</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">5 ta muolaja</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">status: Standart</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">amal qilish muddati 1 oy</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                real vaqtda xizmat ko'rsatish
              </Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0" onClick={navigate('/abonimentregister')}>
          <Button
            size="lg"
            color="white"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
            
          >
            Sotib olish
          </Button>
        </CardFooter>
      </Card>
      <Card color="gray" variant="gradient" className="w-full mr-3 max-w-[20rem] p-5 overflow-auto duration-500 overflow-x-hidden hover:scale-95  bg-gradient-to-tr from-[#9e5d1c] to-[#dac5a5]">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            Premium
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-5 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>400{""}
            <span className="self-end text-4xl">/3 oy</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">50 ta doktor korigi</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">16 ta muolaja</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">status: premium</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">amal qilish muddati 3 oy</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Premium xizmatlar
              </Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0"  onClick={navigate('/abonimentregister')}>
          <Button
            size="lg"
            color="white"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
           

          >
            Sotib olish
          </Button>
        </CardFooter>
      </Card>
      <Card color="gray" variant="gradient" className="w-full mr-3 max-w-[20rem] p-5 overflow-auto duration-500 overflow-x-hidden hover:scale-95 bg-gradient-to-tr from-[#ffbf00] to-[#f7e2ad]">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            VIP
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-5 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>800{""}
            <span className="self-end text-4xl">/6oy</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">80 ta doktor korigi</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">20 ta muolaja</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">status: premium</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">amal qilish muddati 6 oy</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
              VIP xizmatlar
              </Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0" onClick={navigate('/abonimentregister')}>
          <Button
            size="lg"
            color="white"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
           

          >
            Sotib olish
          </Button>
        </CardFooter>
      </Card>
    </div>
    </>
  );
}

export default Aboniment;
