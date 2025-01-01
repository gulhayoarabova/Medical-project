import React, { useState, useEffect } from "react";
import TypingEffect from "react-typing-effect";

function ChatAi() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (answer) {
      setTyping(true);
      // Typing effekti tugagandan keyin typing holatini o'chiring
      const timer = setTimeout(() => {
        setTyping(false);
      }, answer.length * 30); // Bu yerda 30 ms tezlik bilan hisoblanadi, siz uni sozlashingiz mumkin
      return () => clearTimeout(timer); // Effekt tozalanishi
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() === "") {
      setAnswer("Iltimos, savol kiriting.");
    } 
    else if(question.toLowerCase().includes("bel")){
      setAnswer("Bel og'rig'ini kamaytirish uchun to'g'ri o'rindiqda o'tirish, har kuni yengil mashqlar qilish, uzoq vaqt bir pozitsiyada bo'lmaslik va qulay yostiq hamda poyabzal tanlash tavsiya etiladi. Agar sizda kuchli og'rig' bo'lsa malakali doktorga boring 😊");
    }
    else if(question.toLowerCase().includes("bosh")){
      setAnswer("Bosh og'rig'ini kamaytirish uchun yaxshi dam olish, ko'p suyuqlik ichish va stressni kamaytirish kerak. Shuningdek, to'g'ri ovqatlanish va shifokor tavsiyasiga amal qilish ham foydali bo'lishi mumkin. Agar sizda kuchli og'rig' bo'lsa malakali doktorga boring 😊");
    }
    else {
      setAnswer("Savolingizni biroz tushinmadim 😊");
    }
  };

  return (
    <div className="h-[85vh] p-3 flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg shadow-lg bg-white py-6 px-4 transition-all duration-500 transform hover:scale-105"
      >
        <h1 className="text-4xl font-bold text-blue-500 mb-4 animate-bounce">
          Doctor AI
        </h1>

        <textarea
          className="border border-gray-300 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
          placeholder="Savol yozing"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Javob olish
        </button>
      </form>
      <div className=" max-w-[400px] p-4 text-center rounded-lg bg-white my-4 shadow-lg transition-all duration-500 transform hover:scale-105">
        {typing ? (
          <TypingEffect
            text={answer}
            speed={50} 
            onTypingEnd={() => setTyping(false)}
            className="p-4"
          />
        ) : (
          <div className="p-4">{answer}</div>
        )}
      </div>
    </div>
  );
}

export default ChatAi;
