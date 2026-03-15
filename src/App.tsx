"use client";
import { useState } from "react";
import stp from "./assets/stp.jpg";
import merci from "./assets/merci.jpg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "non",
      "t'es sûr?",
      "et si je demande gentiment?",
      "stp :'(",
      "je t'achète du chocolat",
      "et un tiramisu?",
      "STP",
      "mais :'(",
      "je vais mourrir",
      "ok je suis morte",
      "tu parles au fantome de Lat",
      "pitié",
      ":((((",
      "STP (à genoux)",
      "je suis morte",
      "nooooooooon",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img className="h-[300px]" src={merci} />
          <div className="my-4 text-4xl font-bold">MERCI !!! rdv après manger !  (j'aurai pas de culotte)</div>
        </>
      ) : (
        <>
          <img className="h-[120px]" src={stp} />
         
          <h1 className="my-4 text-4xl">cc salim, tu peux me boost?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              oui
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "non" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
