
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { GithubIcon } from "@/components/icons";
import ButonGit from "@/components/ButonGit";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import './card.css';
export default function CardProyect() {
  return (
    <div className="max-w-[900px] gap-6 mt-12 grid grid-cols-12 grid-rows-2 px-8">
      <Card isFooterBlurred className="card w-full h-[300px] col-span-12 sm:col-span-4 mb-6">
        <CardHeader className="absolute z-10 top-1 flex-col items-center">
        </CardHeader>
        <Image
          removeWrapper
          alt=" app background"
          className="z-0 w-full h-full object-cover"
          src="https://raw.githubusercontent.com/RLucer/apiConsumo/main/img/home_3.png"
        />
        <CardFooter className="absolute bg-black/50 bottom-0 z-10 border-t-1 border-default-400 dark:border-default-100">
          <div className="flex flex-grow gap-4 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60"> </p>
              <p className="text-tiny text-white/80 uppercase font-bold">Dashboard</p>
              <p className="text-tiny text-white/90">Consumo de api</p>
            </div>
          </div>
          <ButonGit url="https://github.com/RLucer/apiConsumo" />
        </CardFooter>
      </Card>
  
      <Card isFooterBlurred className="card w-full h-[300px] col-span-12 sm:col-span-4 mb-6">
        <CardHeader className="absolute z-10 top-1 flex-col items-center">
        </CardHeader>
        <Image
          removeWrapper
          alt=" app background"
          className="z-0 w-full h-full object-cover"
          src="https://raw.githubusercontent.com/RLucer/appRestaurant/master/public/screenshot.png"
        />
        <CardFooter className="absolute bg-black/50 bottom-0 z-10 border-t-1 border-default-400 dark:border-default-100">
          <div className="flex flex-grow gap-4 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60"> </p>
              <p className="text-tiny text-white/80 uppercase font-bold">App Restaurant</p>
              <p className="text-tiny text-white/90">Agendamiento de reservas</p>
            </div>
          </div>
          <ButonGit url="https://github.com/RLucer/appRestaurant" />
        </CardFooter>
      </Card>
  
      <Card isFooterBlurred className="card w-full h-[300px] col-span-12 sm:col-span-4 mb-6">
        <CardHeader className="absolute z-10 top-1 flex-col items-center">
        </CardHeader>
        <Image
          removeWrapper
          alt=" app background"
          className="z-0 w-full h-full object-cover"
          src="https://raw.githubusercontent.com/RLucer/tienda-ecommerce-5/main/public/screenshot.png"
        />
        <CardFooter className="absolute bg-black/50 bottom-0 z-10 border-t-1 border-default-400 dark:border-default-100">
          <div className="flex flex-grow gap-4 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60"> </p>
              <p className="text-tiny text-white/80 uppercase font-bold">App tienda Ecommerce</p>
              <p className="text-tiny text-white/90">Incluye pasarela de pago</p>
            </div>
          </div>
          <ButonGit url="https://github.com/RLucer/tienda-ecommerce-5" />
        </CardFooter>
      </Card>
    </div>
  );
  
}
