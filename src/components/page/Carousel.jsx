import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Dados dos projetos (substitua com os seus)
const projects = [
  {
    id: 1,
    title: "ManageFinance",
    link: "https://managefinance.vercel.app/",
    description:
      "Sistema criado para ajudar usuários a monitorar e organizar seus gastos, utilizando gráficos interativos com Chart.js.",
    color: "bg-red-800/40",
  },
  {
    id: 2,
    title: "Dark FPS Game",
    link: "https://dev-joao-paulo-santos.github.io/FPS_Game_With_ThreeJS/",
    description:
      "Jogo em primeira pessoa com ambientação sombria, onde o inimigo evolui a cada derrota. Criado com foco em mecânicas e física básicas de jogos.",
    color: "bg-green-800/40",
  },
  {
    id: 3,
    title: "Endereço por CEP",
    link: "https://dev-joao-paulo-santos.github.io/First_AppJS_with_API_Integration/",
    description:
      "Página web que consulta uma API e retorna o endereço correspondente a qualquer CEP informado",
    color: "bg-fuchsia-800/40",
  },
  {
    id: 4,
    title: "TPS Game",
    link: "https://dev-joao-paulo-santos.github.io/Third_Person_Game_in_Spline/",
    description:
      "Jogo simples em terceira pessoa criado na plataforma Spline para explorar animações, física e comportamento de objetos 3D.",
    color: "bg-blue-800/40",
  },
  {
    id: 5,
    title: "Epic Sky Fighter",
    link: "https://epicskyfighter.vercel.app/",
    description:
      "Mini-game 3D de aeronaves construído com React Three Fiber, trabalhando conceitos de movimentação e controles em terceira pessoa.",
    color: "bg-yellow-800/40",
  },

  {
    id: 6,
    title: "Sistema de loja virtual",
    link: "https://github.com/dev-joao-paulo-santos/Sistema-de-Loja-Virtual-com-Autentica-ao-com-PHP-e-MySQL",
    description:
      "Projeto acadêmico focado em autenticação, CRUD, boas práticas de login e integração entre front-end, back-end e banco de dados.",
    color: "bg-emerald-800/40",
  },
  {
    id: 7,
    title: "To-do App com React Native",
    link: "https://github.com/dev-joao-paulo-santos/To-Do-App-with-React-Native-and-Expo",
    description:
      "Aplicativo simples criado com Expo CLI, permitindo ao usuário adicionar tarefas e marcá-las como concluídas. Focado em usabilidade e organização de estados no React Native.",
    color: "bg-teal-800/40",
  },
  {
    id: 8,
    title: "Telecosmos",
    link: "https://dev-joao-paulo-santos.github.io/Telecosmos_2022/",
    description:
      "Projeto de conclusão do curso técnico em Desenvolvimento de Sistemas, desenvolvido em equipe, recebendo o 1° lugar na apresentação final",
    color: "bg-violet-800/40",
  },
];

const Carousel = () => {
  return (
    <div className="w-full h-[40%] flex mt-32 justify-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        spaceBetween={50}
        slidesPerView={1.5}
        navigation
        pagination={false}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        centeredSlides={true}
        loop={true}
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            className="flex w-100vw h-full justify-center backdrop-blur-sm rounded-lg"
          >
            <div
              className={`w-full h-full 
                flex flex-col items-center 
                rounded-lg
                text-white font-bold text-2xl ${project.color}`}
            >
              <div className=" w-4/6  h-4/6 my-auto">
                <h2
                  onClick={() => window.open(project.link)}
                  className="z-10 text-2xl my-4 text-center text cursor-pointer transition hover:scale-105 hover:text-blue-300"
                >
                  {project.title}
                </h2>
                <p className="text-lg mt-5 font-[Raleway]">
                  {project.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
