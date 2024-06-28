
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { GithubIcon } from "@/components/icons";
import ButonGit from "@/components/ButonGit";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";

export default function CardProyect() {
  return (
    <div className="max-w-[900px] gap-2 mt-12 grid grid-cols-12 grid-rows-2 px-8">

      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-4 mb-6">
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
            {/* <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/breathing-app-icon.jpeg"
            /> */}
            <div className="flex flex-col">
              <p className="text-tiny text-white/60"> </p>
              <p className="text-tiny text-white/80 uppercase font-bold">Dashboard</p>
              <p className="text-tiny text-white/90">Consumo de api</p>
              {/* <h4 className="text-white/90 font-medium text-xl"></h4> */}
            </div>
          </div>
          <ButonGit url="https://github.com/RLucer/apiConsumo" />
        </CardFooter>
      </Card>

      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-4 mb-6">
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
            {/* <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/breathing-app-icon.jpeg"
            /> */}
            <div className="flex flex-col">
              <p className="text-tiny text-white/60"> </p>
              <p className="text-tiny text-white/80 uppercase font-bold">App Restaurant</p>
              <p className="text-tiny text-white/90">Agendamiento de reservas</p>
              {/* <h4 className="text-white/90 font-medium text-xl"></h4> */}
            </div>
          </div>
          <ButonGit url="https://github.com/RLucer/appRestaurant" />
        </CardFooter>
      </Card>


      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-4 mb-6">
        <CardHeader className="absolute z-10 top-1 flex-col items-center">

        </CardHeader>
        <Image
          removeWrapper
          alt=" app background"
          className="z-0 w-full h-full object-cover"
          src="https://ucaeaede223ea0455af49bbdef21.previews.dropboxusercontent.com/p/thumb/ACVZR5qO8akMP68pY79RvR74cfosGTgp5oR43E_VIraZDX4byxUvqiO9C1Ih9au3bUbJ1EbUMHRsTkBxTOP_UKu6D28T7Tl2qZNK1oidvV0pmHL4rTciAzrIhwd_okGKIAdySf2ew2KqJT_PqL0Ic8t_T4FuDWSeOnF-2oJwits-1z60hXzGdd75R1CfrO1czvctO_N0OYzWwW0sN4VWXPTMlPukRkMsCwdkMx8rNnMxwGCX7s-TSgHI0PVoQirjSkE5xsrqPoMGMJ2qIWwEcw-hXSD7FPVCawJznEfOMp3p1KXrXEM10-xqrmV6eZXA9Gz7muvFdEe0uEDVkZ0gw7t8LaORxKs4TwYZo7ty6wFt8zNhtfbWnenyb-n8FW097G4/p.png?is_prewarmed=true"
        />
        <CardFooter className="absolute bg-black/50 bottom-0 z-10 border-t-1 border-default-400 dark:border-default-100">
          <div className="flex flex-grow gap-4 items-center">
            {/* <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/breathing-app-icon.jpeg"
            /> */}
            <div className="flex flex-col">
              <p className="text-tiny text-white/60"> </p>
              <p className="text-tiny text-white/80 uppercase font-bold">App tienda Ecommerce</p>
              <p className="text-tiny text-white/90">Incluye pasarela de pago</p>
              {/* <h4 className="text-white/90 font-medium text-xl"></h4> */}
            </div>
          </div>
          <ButonGit url="https://github.com/RLucer/tienda-ecommerce-5" />
        </CardFooter>
      </Card>
    </div>
  );
}
