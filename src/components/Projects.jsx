import Button from "./Button";
import Section from "./Section";
import Heading from "./Heading";
import Tagline from "./Tagline";
import { projects } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Projects";

const Projects = () => (
    <Section crosses className="overflow-hidden" id="projects">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What I'm working on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {projects.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15 flex justify-center">
                    <img
                      className="w-20%"
                      src={item.imageUrl}
                      width={150}
                      height={150}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 mb-[1.5rem] text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="#hero">Back To Top</Button>
      </div>
    </div>
  </Section>
);

export default Projects;
