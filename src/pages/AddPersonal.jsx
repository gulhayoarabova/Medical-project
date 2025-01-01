import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Input, Button } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputMask from 'react-input-mask';
import { useNavigate } from "react-router-dom";

function AddPersonal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
d
  const navigate = useNavigate();

  const onSubmit = (data, event) => {
    event.preventDefault();
    
    axios
      .post("https://crudcrud.com/api/19abf36711dc444c8186c5cf8d9fc5be/users", data)
      .then((res) => {
        console.log(res);
        toast.success("Akkaunt muvaffaqiyatli yaratildi 😊!");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Xatolik yuz berdi. Qayta urinib ko'ring.");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center py-[10rem] tablet:p-3 w-full h-[100vh] tablet:h-[85vh] justify-center">
      <div className="tablet:p-[18px] p-2 tablet:flex-nowrap flex-wrap flex gap-x-[10px] rounded-lg bg-white">
        <div className="left w-full tablet:w-[30rem] flex flex-col gap-[10px]">
          <label htmlFor="name">Ism</label>
          <Input
            id="name"
            {...register("name", { required: "Ism maydonini to'ldiring" })}
            label="Zarina"
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}

          <label htmlFor="surname">Familiya</label>
          <Input
            id="surname"
            {...register("surname", { required: "Familiya maydonini to'ldiring" })}
            label="Ravshanova"
          />
          {errors.surname && <span className="text-red-500">{errors.surname.message}</span>}

          <label htmlFor="city">Tug'ilgan Shahar</label>
          <select
            id="city"
            className="p-2 bg-transparent border-[1px] border-gray-400 rounded-lg"
            {...register("city", { required: "Shahar tanlanish kerak" })}
          >
            <option value="" disabled>Tug'ilgan Shahar</option>
            {["Toshkent sh", "Toshkent v", "Andijon", "Namangan", "Fargona", "Sirdaryo", "Jizzax", "Samarqand", "Navoiy", "Xorazm", "Buxoro", "Qashqadaryo", "Surxondaryo", "Qoraqalpog'iston"].map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
          {errors.city && <span className="text-red-500">{errors.city.message}</span>}
        </div>

        <div className="right w-full flex flex-col gap-[10px]">
          <label htmlFor="role">Vazifasi</label>
          <select
            id="role"
            className="p-2 bg-transparent border-[1px] border-gray-400 rounded-lg"
            {...register("role", { required: "Vazifa tanlanish kerak" })}
          >
            <option value="" disabled>Akkauntni tanlang</option>
            <option value="Admin">Admin</option>
            <option value="Bemor">Bemor</option>
            <option value="Doctor">Doctor</option>
          </select>
          {errors.role && <span className="text-red-500">{errors.role.message}</span>}

          <label htmlFor="password">Parol</label>
          <Input
            id="password"
            {...register("password", { required: "Parol maydonini to'ldiring" })}
            label="********"
            type="password"
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}

          <label htmlFor="phone">Telefon raqam</label>
          <InputMask
            mask="+\9\9\8 99 999 99 99"
            {...register("phone", { required: "Telefon raqami kerak" })}
          >
            {(inputProps) => (
              <Input
                {...inputProps}
                id="phone"
                type="tel"
                placeholder="Telefon raqami"
                className="rounded-2xl !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                containerProps={{
                  className: "min-w-0",
                }}
              />
            )}
          </InputMask>
          {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
          
          <Button color="blue" className="tablet:w-[8rem] w-full self-end" type="submit">
            Qo'shish
          </Button>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
}

export default AddPersonal;