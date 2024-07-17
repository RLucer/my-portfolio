// pages/index.js
"use client";
import CardProyect from "@/components/CardProyect";
import { title, subtitle } from "@/components/primitives";


export default function ProyectosPage() {

  return (
    <div >
      <h1 className={title({ color: "green" })} >  &lt; Proyectos...  /&gt;  &nbsp;</h1>
      <h1 className={subtitle()}>
        <p>Algunos de mis proyectos realizados puedes acceder al repositorio en github</p>

      </h1>
      <CardProyect />
    </div>
  );
}
