import { Image } from "@nextui-org/image";
import { title, subtitle } from "@/components/primitives";

export default function PageAbout() {
  return (
    <>


      <div className="grid grid-cols-1  text-justify gap-4 p-4 lg:grid-cols-3 lg:w-4/4 lg:ml-2 mt-2 lg:mt-0">
        <div className="relative w-80 h-80 rounded-[80%] overflow-hidden">
          <Image
            isZoomed

            width={300}
            height={300}

            alt=""
            src="yo_port_4.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 rounded-[80%]"></div>

        </div>




        <div className="bg-dark-200 p-4 w-full lg:w-1/7">
          <h1 className={title({ color: "green" })} >&lt; Hola...  / &gt;  &nbsp;</h1>
          <h1 className={subtitle()}> 
          </h1>
          <p>desarrollador de software con una pasión por crear soluciones innovadoras y eficientes que resuelvan problemas reales. Con más de 4 años de experiencia en el desarrollo de aplicaciones web y móviles, me especializo en transformar ideas complejas en productos digitales funcionales y atractivos. Mi enfoque se centra en combinar la lógica del backend con una interfaz de usuario intuitiva y agradable.</p>
          <br />
          <p>A lo largo de mi carrera, he trabajado con una amplia gama de tecnologías y herramientas, incluyendo JavaScript, Java , PHP, React, Node.js, Mysql, Mongo DB, Express.js, Next.js, entre otras. Estoy constantemente aprendiendo y adaptándome a nuevas tendencias y avances en el campo del desarrollo de software, lo que me permite ofrecer soluciones modernas y eficientes.</p>

        </div>
        <div className="bg-dark-300 p-4 w-full lg:w-1/7">
          <p>Mi pasión por el desarrollo de software se manifiesta en mi dedicación a la resolución de problemas y en mi deseo de mejorar la vida de las personas a través de la tecnología. Me encanta enfrentar desafíos técnicos y encontrar formas creativas de superarlos. Disfruto del proceso de diseño y desarrollo, desde la conceptualización hasta la implementación y el mantenimiento.
          </p>
          <p>
            Además, valoro mucho el trabajo en equipo y la colaboración. He tenido la oportunidad de trabajar en diversos proyectos con equipos multidisciplinarios, donde he aprendido la importancia de la comunicación efectiva y la cooperación para alcanzar objetivos comunes. También tengo experiencia en la gestión de proyectos, lo cual me ha permitido desarrollar habilidades de liderazgo y gestión.
          </p>
          <p>
            En mi tiempo libre, estoy siempre buscando nuevas oportunidades para aprender y crecer, tanto a nivel profesional como personal.
          </p>
          <p>Si estás buscando a alguien que pueda llevar tus ideas al siguiente nivel y crear soluciones de software robustas y escalables, ¡me encantaría que nos pongamos en contacto!
          </p>
        </div>
      </div>
    </>
  );
}
