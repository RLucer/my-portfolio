// pages/index.js

import SkillsComponent from "@/components/SkillsComponent";
import { title, subtitle } from "@/components/primitives";

export default function HabilidadesPage() {

  return (
    <div >
      <h1 className={title({ color: "green" })} >&lt; Skills...  /&gt;  &nbsp;</h1>
      <h1 className={subtitle()}>
        <p>Mis habilidades están en constante crecimiento y mejora diaria</p>
      </h1>

      <br />
      <SkillsComponent />
    </div>
  );
}
