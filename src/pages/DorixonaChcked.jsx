import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import { CircleArrowLeft } from "lucide-react";
import { useState } from "react";
import { Input, Typography, Button } from "@material-tailwind/react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DorixonaChcked() {
  const navigate = useNavigate();
  const location = useLocation();
  const { checkedCount, checkedNames } = location.state || {
    checkedCount: 0,
    checkedNames: [],
  };

  const [dialogOpen, setDialogOpen] = useState(false);
  // history.back()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (checkedCount === 0) {
      toast.error("Iltimos birorta dori tanlang !");
      setTimeout(()=>{
        navigate("/dorixona")
        
      },3000)
    } else {
      toast.success("Sizning dorilaringiz tez orada sizda boladi 😊!");
      reset()
      console.log(data)
      setTimeout(()=>{
        window.location.reload()
      },3000)
    }
  };

  return (
    <>
      <div
        className="absolute rounded-full cursor-pointer top-[6rem]"
        onClick={() => navigate(-1)}
      >
        <CircleArrowLeft size={40} className="text-[--rang]" />
      </div>
      <form
        className="flex tablet:flex-row w-full flex-col justify-center gap-x-[5rem] checkboxes items-center h-[80vh] p-20 overflow-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="left flex flex-col gap-y-5 w-[50%]">
          <div className="gap-y-3 flex flex-col">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Shahringizni tanlang
            </Typography>
            <select
              className="p-2 bg-transparent border-[1px] border-gray-400 rounded-lg"
              {...register("city", { required: "Shaharni tanlang" })}
            >
              <option selected disabled>Shaharni tanlang</option>
              <option>Toshkent sh</option>
              <option>Toshkent v</option>
              <option>Andijon</option>
              <option>Namangan</option>
              <option>Fargona</option>
              <option>Sirdaryo</option>
              <option>Jizzax</option>
              <option>Samarqand</option>
              <option>Navoiy</option>
              <option>Xorazm</option>
              <option>Buhoro</option>
              <option>Qashqadaryo</option>
              <option>Surhandaryo</option>
              <option>Qoraqalpakistan</option>
            </select>
            {errors.city && (
              <span className="text-red-500">{errors.city.message}</span>
            )}
          </div>
          <div className="gap-y-3 flex flex-col">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              To'lov usulini tanlang
            </Typography>
            <select
              className="p-2 bg-transparent border-[1px] border-gray-400 rounded-lg"
              {...register("paymentMethod", {
                required: "To'lov usulini tanlang",
              })}
            >
              <option selected disabled>To'lov usulini tanlang</option>
              <option>Naqt (UZS)</option>
              <option>Mastercard</option>
              <option>Humo</option>
              <option>Uzcard</option>
              <option>Visa</option>
              <option>PayMe</option>
              <option>Click</option>
              <option>UzumBank</option>
            </select>
            {errors.paymentMethod && (
              <span className="text-red-500">
                {errors.paymentMethod.message}
              </span>
            )}
          </div>
          <div className="gap-y-3 flex flex-col">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Telefon raqami
            </Typography>
            <InputMask
              mask="+\9\9\8 99 999 99 99"
              {...register("tel", { required: "Telefon raqam kerak" })}
            >
              {(inputProps) => (
                <Input
                  {...inputProps} 
                  size="lg"
                  placeholder="Telefon raqam"
                  autoComplete="current-tel"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              )}
            </InputMask>

            {errors.tel && (
              <span className="text-red-500">{errors.tel.message}</span>
            )}
          </div>
        </div>
        <div className="right flex flex-col gap-y-5 justify-center h-[100%] font-medium">
          <Typography className="font-medium">
            <span className="font-bold text-xl">Jami dorilar soni:</span>{" "}
            {checkedCount}
          </Typography>
          <Typography className="font-medium">
            <span className="font-bold text-xl">Dorilar nomi:</span>{" "}
            {checkedNames.join(", ")}
          </Typography>
          <div className="flex flex-col gap-y-3">
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Yetkazish turi
            </Typography>
            <select
              className="p-2 bg-transparent border-[1px] border-gray-400 rounded-lg "
              {...register("deliveryMethod")}
            >
              <option value="Yetkazish turini tanlang" selected disabled>Yetkazish turini tanlang</option>

              <option value="Yandex Go">Yandex Go</option>
              <option value="Uzum yetkazish">Uzum Tezkor</option>
            </select>
          </div>
          <button
            className="bg-[#00AFD5] h-[40px] duration-300 hover:scale-95 text-white rounded-2xl"
            type="submit"
          >
            Buyurtma berish
          </button>
        </div>
        <ToastContainer />

      </form>

     
    </>
  );
}

export default DorixonaChcked;
``;
