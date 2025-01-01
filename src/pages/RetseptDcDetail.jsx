import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RetseprDcDetail() {
  const { register, handleSubmit, reset } = useForm();
  const [value, setValue] = useState(null);
  const [doctorName, setDoctorName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {

    const doctorId = localStorage.getItem("id");


    axios
      .get("https://cadd15f6870a5ba5fca4.free.beeceptor.com/api/users")
      .then((res) => {
        const users = res.data;
       
        const doctor = users.find(user => user.id === doctorId && user.role === 'doctor');
        if (doctor) {
          setDoctorName(doctor.name); 
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
 
    axios
      .get(`https://cadd15f6870a5ba5fca4.free.beeceptor.com/api/users/${id}`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const onSubmit = async (data) => {
    if (!data.drug || !data.drugAdv || !data.date) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    try {
      
      const updatedData = {
        ...value,
        drug: data.drug,
        drugAdv: data.drugAdv,
        date: data.date,
        doctor: doctorName, 
      };

      await axios.patch(`https://cadd15f6870a5ba5fca4.free.beeceptor.com/api/users/${id}`, updatedData);

      toast.success("Sizning retseptingiz muvaffaqiyatli yangilandi 😊!");
      reset();

      setTimeout(() => {
        navigate("/retseptcrt");
      }, 3000);
    } catch (error) {
      toast.error("Retseptni yangilashda xatolik yuz berdi!");
      console.error("Xatolik:", error);
    }
  };

  const formFields = [
    {
      label: 'Dori nomi',
      placeholder: 'Dorining nomini kiriting',
      type: 'text',
      name: 'drug',
    },
    {
      label: 'Tavsifi',
      placeholder: 'Dorining tavsifini kiriting',
      type: 'text',
      name: 'drugAdv',
    },
    {
      label: 'Yozilgan sana',
      placeholder: 'YYYY-MM-DD formatida sana kiriting',
      type: 'date',
      name: 'date',
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen tablet:p-10">
      <h1 className="text-2xl font-bold mb-8">Retsept Yozish</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold">Pacient</h2>
                <p className="text-gray-600">{value?.name}</p>
                <p className="text-sm text-gray-500">Sana: {value?.date}</p>
                <p className="text-sm text-gray-500">ID: {value?.id}</p>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              {formFields.map((field, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    defaultValue={value ? value[field.name] : ''} 
                    {...register(field.name, { required: true })}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>
              ))}
              <div className="flex justify-end">
                <button type="submit" className="bg-cyan-500 text-white px-4 py-2 rounded-md shadow hover:bg-cyan-600">
                  Qo'shish
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RetseprDcDetail;
