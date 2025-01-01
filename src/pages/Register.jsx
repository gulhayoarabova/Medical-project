import React, { useEffect } from "react";
import imgLogo from "../assets/image-removebg-preview.png";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const fetchToken = async () => {
    try {
      const username = "Muhammadiso";
      const response = await axios.post(
        "https://telegram-api-1-ska9.onrender.com/login",
        { username }
      );
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      toast.error("Token olishda hatolik yuz berdi!");
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  const onSubmit = async (data) => {
    const { username, tel } = data;
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token topilmadi.");
      }

      const response = await axios.post(
        "https://telegram-api-1-ska9.onrender.com/users",
        { ...data },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      const user = response.data.data;
      if (user) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", user.role);
        localStorage.setItem("id", user._id);
        toast.success("Ro'yxatdan o'tish muvaffaqiyatli!");
        navigate("/");
      } else {
        toast.error("Неверное имя пользователя или телефон!");
      }
    } catch (error) {
      toast.error("Ro'yxatdan o'tishda xatolik yuz berdi!");
    }
  };

  return (
    <div className="site w-[100vw] h-[100vh] justify-center flex register">
      <Card
        color="transparent"
        shadow={false}
        className="flex justify-center items-center w-[100vw]"
      >
        <div className="max-w-[20rem]">
          <a
            href="#"
            className="logo md:gap-x-10 gap-x-2 flex items-center justify-center mb-[-25px]"
          >
            <img src={imgLogo} alt="Medical Center" />
            <h2 className="md:text-[40px] text-[30px] bg-left-bottom font-medium text-black">
              Medical <br /> Center
            </h2>
          </a>
        </div>
        <form
          className="mt-8 mb-2 tablet:w-[20rem] w-[15rem]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Username
            </Typography>
            <Input
              size="lg"
              placeholder="Username"
              {...register("username", { required: "Username kerak" })}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Telefon raqam
            </Typography>
            <Input
              size="lg"
              placeholder="Telefon"
              {...register("tel", { required: "Telefon kerak" })}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.tel && (
              <span className="text-red-500">{errors.tel.message}</span>
            )}
          </div>

          <Button className="mt-6 bg-[#00AFD5]" type="submit" fullWidth>
            Kirish
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Register;