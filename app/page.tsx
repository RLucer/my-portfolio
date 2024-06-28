import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import { Image } from "@nextui-org/image";


import React from "react";
import ContactoPage from "./contacto/page";

//import {Image} from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

       <div>
        <Image
          isZoomed
          isBlurred
          width={250}
          height={250}
          radius="full"
          alt=""
          src="https://uc5db1c7ac3d849317b88d710de9.previews.dropboxusercontent.com/p/thumb/ACW9Wnre_PNzZbiRNGmjPgc1NSkCx41O8ZBqRwnA_mU1E4ZPCmjioAJt57x2mc-dPidnxTJmbtN1qpdPwuh7nNJhk7G_p7_zZhbGm1BOJCFJbEaC0cCRtQdxW0gdskIqNRz7eHp4XFb1LS_X5u4BWZIbqDxvQ4eiVkgWeijJUpTbCpSedj_4P1uVZ3TT5N-c0ipTA_149BBIx-nygWa18gxPu8jJK6BNpDr3Lr5DW1lUW4bLOLQczkgouQ_9UnQUDzCnJ41Ou1trG8nR1JpWQJzGdFTRvdek9oED_alzxx2JMLTZoOlqf7pVKkp67VVflVUM5Rd8ViZuHcIQMeclMZYkFe7QdYv5b44dOGuZuS7VwEAi1vJX0p4B6GEFdTMS9sY/p.png?is_prewarmed=true"
          className="mt-6"
        />

      </div>

      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>&lt; ¡Hola! soy</h1>
        <h1 className={title({ color: "green" })}> Ricardo / &gt;  &nbsp;</h1>
        <br />
        <h1 className={subtitle()}>
          Me motiva la oportunidad de resolver problemas y mejorar la vida de las personas a través del software.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Conoce mis habilidades y proyectos...
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
        
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href='/contacto'
        >
          Contactame!
        </Link>



        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
