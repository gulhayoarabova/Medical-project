import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import InputMask from "react-input-mask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";

function DonorBolish() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      toast.success("Sizga tez orada xodimlarimiz bog'lanishadi 😊!");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    };

  return (
    <div className="div flex justify-center items-center tablet:p-20 p-3">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center"
      >
        <div className="p-[18px] flex tablet:flex-row flex-col gap-x-[10px] rounded-lg bg-white w-full max-w-[30rem] tablet:max-w-[60rem]">
          <div className="left flex flex-col gap-[10px] w-full tablet:w-[30rem]">
            <label htmlFor="fullName">Ism Familiya</label>
            <Input
              {...register("fullName", { required: "Ism Familiya majburiy" })}
              label="F.I.SH"
              error={!!errors.fullName}
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                {errors.fullName.message}
              </span>
            )}

            <label htmlFor="organ">Donor uchun organ</label>
            <select
              {...register("organ", { required: "Organ tanlash majburiy" })}
              label="Donor uchun organ tanlang"
              error={!!errors.organ}
              className="p-2 bg-transparent border-[1px] border-gray-400 rounded-lg"
              defaultValue="" // Setting default value to empty ensures the field clears
            >
              <option disabled value="">
                Azo yoki o'rgan tanlang
              </option>
              <option value="qon">Qon</option>
              <option value="jigar">Jigar</option>
              <option value="ko'z">Ko'z</option>
              <option value="yurak">Yurak</option>
              <option value="teri">Teri</option>
              <option value="yog'">Yog'</option>
              <option value="ilik">Ilik</option>
            </select>
            {errors.organ && (
              <span className="text-red-500 text-sm">
                {errors.organ.message}
              </span>
            )}

            <label htmlFor="phone">Telefon raqam</label>
            <InputMask
              mask="+\9\9\8 99 999 99 99"
              {...register("phone", {
                required: "Telefon raqam majburiy",
                pattern: {
                  value: /^\+998 \d{2} \d{3} \d{2} \d{2}$/,
                  message: "Telefon raqam noto'g'ri",
                },
              })}
            >
              {(inputProps) => (
                <Input
                  {...inputProps}
                  size="lg"
                  placeholder="Telefon raqam"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              )}
            </InputMask>
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>

          <div className="right flex flex-col gap-[10px] w-full tablet:w-[30rem]">
            <label htmlFor="passport">Pasport Raqami</label>
            <InputMask
              mask="AD9999999"
              maskChar=" "
              alwaysShowMask
              {...register("passport", {
                required: "Pasport raqami majburiy",
              })}
            >
              {(inputProps) => <Input {...inputProps} label="AD_______" />}
            </InputMask>
            {errors.passport && (
              <span className="text-red-500 text-sm">
                {errors.passport.message}
              </span>
            )}

            <label htmlFor="email">Elektron pochta</label>
            <Input
              {...register("email", {
                required: "Elektron pochta majburiy",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Elektron pochta noto'g'ri",
                },
              })}
              placeholder="_______@___.com"
              error={!!errors.email}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}

            <div className="flex items-end justify-end pt-2 gap-y-2 tablet:pt-9 tablet:flex-row flex-col">
              <Checkbox
                {...register("terms", {
                  required: "Shartlarni qabul qilish majburiy",
                })}
                color="blue"
                className="self-start"
                label={
                  <Typography
                    color="blue-gray"
                    className="flex malumot font-medium text-xs tablet:text-sm"
                  >
                    Hamma shartlar bilan tanishib chiqdim.
                  </Typography>
                }
              />
              {errors.terms && (
                <span className="text-red-500 text-sm">
                  {errors.terms.message}
                </span>
              )}
              <Button
                type="submit"
                color="blue"
                className="w-full tablet:w-[8rem] self-end"
              >
                Jo'natish
              </Button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default DonorBolish;
