import React from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

function KorikkaYozilish() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({});

  const onSubmit = (data) => {
    const jsonData = JSON.stringify(data)
    sessionStorage.setItem('datas',jsonData)

    toast.success("Siz korikka muvaffaqiyatli yozildingiz 😊!");
    setTimeout(()=>{
      window.location.reload()
    },3000)
  }

  const doctors = [
    "Doktorni tanlang","Dermatolog", "Xirurg", "Urolog", "Ginekolog", "Stomatolog", "Pediatr",
    "Terapevt", "Psychiatrist", "Endocrinologist", "Oncolog", "Oftalmolog",
    "Cardiolog", "Pulmanolog", "Laborant", "Plastic Jarroh", "Ortoped",
    "Dantist", "Genetica Doctori", "Ortalingolog", "Nevrolog", "Anasteziolog"
  ];

  const cities = [
    "Shaharni tanlang","Toshkent sh", "Toshkent v", "Andijon", "Namangan", "Fargona", "Sirdaryo",
    "Jizzax", "Samarqand", "Navoiy", "Xorazm", "Buhoro", "Qashqadaryo",
    "Surhandaryo", "Qoraqalpakistan"
  ];

  return (
    <>
      <div className="flex justify-center items-center">
        <Card color="transparent" shadow={false} className="w-full flex justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-[20rem] tablet:w-[30rem] mb-2 z-[1] bg-white/30 backdrop-blur-md border border-white/20 p-5 tablet:p-10 pb-5 pt-5 rounded-2xl hover:transition duration-700 hover:duration-700 hover:ease-in-out hover:shadow-2xl hover:shadow-gray-300">
            <div className="mb-4 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Ism Familiya
              </Typography>
              <Input
                size="lg"
                {...register("ism", { required: "Ism Familiya maydoni kerak" })}
                placeholder="Sobitxonov Muhammadiso"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.ism && <span className="text-red-500">{errors.ism.message}</span>}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Doktorni tanlang
              </Typography>
              <select className='p-2 bg-transparent border-[1px] border-gray-400 rounded-lg' size="lg" {...register("doktor", { required: "Doktor tanlanish kerak" })}>
                {doctors.map((doctor, index) => (
                  <option key={doctor} value={doctor} disabled={index === 0}>
                    {doctor}
                  </option>
                ))}
              </select>
              {errors.doktor && <span className="text-red-500">{errors.doktor.message}</span>}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Yashash joyi
              </Typography>
              <select className='p-2 bg-transparent border-[1px] border-gray-400 rounded-lg' {...register("shahar", { required: "Shahar tanlanish kerak" })}>
                {cities.map((city, index) => (
                  <option key={city} value={city} disabled={index === 0}>
                    {city}
                  </option>
                ))}
              </select>
              {errors.shahar && <span className="text-red-500">{errors.shahar.message}</span>}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Telefon raqami
              </Typography>
              <div className="relative flex">
                <InputMask
                  mask="+\9\9\8 99 999 99 99"
                  {...register("tel", { required: "Telefon raqami kerak" })}
                >
                  {(inputProps) => (
                    <Input
                      {...inputProps}
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
              </div>
              {errors.tel && <span className="text-red-500">{errors.tel.message}</span>}
            </div>
            <Button className="mt-6 bg-[#00AFD5] rounded-3xl" type="submit" fullWidth>
              Yozilish
            </Button>

          </form>
        </Card>
            <ToastContainer />
      </div>
    </>
  );
}

export default KorikkaYozilish;
