// pages/index.js

import SkillsComponent from "@/components/SkillsComponent";
import { title, subtitle } from "@/components/primitives";

export default function HabilidadesPage() {

  return (
    <div >
      <h1 className={title({ color: "green" })} >&lt; Skills...  / &gt;  &nbsp;</h1>
      <h1 className={subtitle()}>
        <p>Mis habilidades están en constante crecimiento y mejora diaria</p>

      </h1>

      <div data-iframe-width="100" data-iframe-height="270" data-share-badge-id="d500f85a-e985-45f4-98b3-56738179dd4c" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>

      <div data-iframe-width="100" data-iframe-height="270" data-share-badge-id="c1750357-f010-43a7-84ae-deb11af02b81" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>

      <div data-iframe-width="100" data-iframe-height="270" data-share-badge-id="d500f85a-e985-45f4-98b3-56738179dd4c" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>

      <SkillsComponent />
    </div>
  );
}
