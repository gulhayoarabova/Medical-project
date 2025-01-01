import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import {
  Input,
  Select,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import InputMask from 'react-input-mask';

function AbonimentRegister() {
  const { register, handleSubmit, control,reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const MyDatas = JSON.stringify(data)
    sessionStorage.setItem('datas',MyDatas)
    toast.success("Sizning so'rovingiz qabul qilindi 😊!");
    setTimeout(()=>{
      window.location.reload()
    },3000)
  };

  const optionsData = {
    paymentTypes: ["Karta", "Elektron Hamyon"],
    accounts: ["Abdullayev Abdulloh"],
    abonementTypes: ["10$/kun", "40$/oy", "80$/6oy"],
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='tablet:pb-0 tablet:pt-0 flex items-center w-full p-[1rem] h-[85vh] meniki justify-center'>
        <div className='tablet:p-[18px] p-[10px] tablet:flex-nowrap flex-wrap flex gap-x-[10px] rounded-lg bg-white'>
          <div className="left tablet:w-[25rem] w-full flex flex-col gap-[10px] ">
            <label htmlFor="name">Ism Familiya</label>
            <Input 
              label="F.I.SH" 
              {...register('name', { required: "Ism Familiya majburiy" })} 
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}

            <label htmlFor="paymentType">To'lov turi</label>
            <div className="w-full">
              <select 
                {...register('paymentType', { required: "To'lov turi majburiy" })} 
                className='p-2 bg-transparent border-[1px] border-gray-400 rounded-lg w-full'
              >
                <option  defaultChecked >To'lov turini tanlang</option>
                {optionsData.paymentTypes.map((payment, index) => (
                  
                  <option key={index} value={payment}>{payment}</option>
                ))}
              </select>
              {errors.paymentType && <span className="text-red-500">{errors.paymentType.message}</span>}
            </div>

            <label htmlFor="cardNumber">Karta / Virtual hamyon</label>
            <Controller
              name="cardNumber"
              control={control}
              render={({ field }) => (
                <InputMask
                  mask="9999 9999 9999 9999"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                >
                  {(inputProps) => (
                    <Input
                      {...inputProps}
                      placeholder='____ ____ ____ ____'
                      type='text'
                      label='Karta raqamni kiriting'
                      className='number'
                      autoComplete="off"
                    />
                  )}
                </InputMask>
              )}
              rules={{ required: "Karta raqam majburiy" }}
            />
            {errors.cardNumber && <span className="text-red-500">{errors.cardNumber.message}</span>}
          </div>

          <div className="right tablet:w-[25rem] w-full flex flex-col gap-[10px]">
            <label htmlFor="account">Depozit akkaunt</label>
            <div className="w-full">
              <select 
                {...register('account', { required: "Akkaunt majburiy" })} 
                className='p-2 bg-transparent border-[1px] border-gray-400 rounded-lg w-full'
              >
                <option defaultChecked >Depozit akkauntni tanlang</option>
                {optionsData.accounts.map((account, index) => (
                  <option key={index} value={account}>{account}</option>
                ))}
              </select>
              {errors.account && <span className="text-red-500">{errors.account.message}</span>}
            </div>

            <label htmlFor="abonementType">Aboniment turi</label>
            <div className="w-full">
              <select 
                {...register('abonementType', { required: "Aboniment turi majburiy" })} 
                className='p-2 bg-transparent border-[1px] border-gray-400 rounded-lg w-full'
              >
                <option defaultChecked >Aboniment turini tanlang </option>
                {optionsData.abonementTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
              {errors.abonementType && <span className="text-red-500">{errors.abonementType.message}</span>}
            </div>

            <label htmlFor="phone">Telefon raqam</label>
            <div className="relative flex w-full">
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <InputMask
                    mask="+\9\9\8 99 999 99 99"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
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
                )}
                rules={{ required: "Telefon raqam majburiy" }}
              />
              {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
            </div>

            <div className="flex justify-between tablet:flex-row flex-col">
              <Checkbox 
                color="blue" 
                className=''
                {...register('confirmation', { required: "Tasdiqlash majburiy" })}
                label={
                  <Typography color="blue-gray" className="flex malumot font-medium text-xs tablet:text-sm">
                    Hamma ma’lumotlarni to’g’ri kiritdim
                  </Typography>
                }
              />
              {errors.confirmation && <span className="text-red-500">{errors.confirmation.message}</span>}

              <Button color="blue" className='tablet:w-[8rem] w-full self-end' type="submit">Sotib olish</Button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AbonimentRegister;
