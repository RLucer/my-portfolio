"use client";

import React from 'react';
import QRCode from 'qrcode.react';
import { title, subtitle } from "@/components/primitives";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log("Formulario enviado");
  };

  return (
    <div className="">





      <div className="grid grid-cols-1  text-center gap-4 p-4 lg:grid-cols-2 lg:w-4/4 lg:ml-2 mt-2 lg:mt-0">
        <div className="bg-dark-300 p-4 w-full lg:w-1/7">
          <h1 className={title({ color: "green" })} >Mis datos...&nbsp;</h1>
          <div className="">
            <br /><br />
            <div className="space-y-4 ">
              <p className="text-lg">
                <strong>Nombre:</strong> Ricardo Lucero Sanhueza

              </p>
              <h1 className={subtitle()}>
                <p className="text-lg">
                  <strong>Email:</strong> lucero.ricardo@gmail.com
                </p>
              </h1>

              <p className="text-lg0">
                <strong>Teléfono:</strong> +56 9 998838278
              </p>
              <p className="text-lg ">
                <br />
              </p>
            </div>
            <div className="flex justify-center mt-">
              <QRCode value="https://tu-web.com/contacto" size={128} className="shadow-md" />
            </div>
          </div>
        </div>

        <div className="bg-dark-300 p-4 w-full lg:w-1/7">
          <h1 className={title({ color: "green" })} >Contáctame...&nbsp;</h1>
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium ">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Tu Nombre"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="tu.email@ejemplo.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Escribe tu mensaje aquí..."
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>





    </div>
  );
};

export default ContactPage;
