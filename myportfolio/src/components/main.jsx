import React from "react";
import { Nav } from "../extra/navbar";
import { Footer } from "../extra/footer";
import { SimpleCard } from "../extra/Card";
import { Contact } from "../extra/Contact";
import { Intro } from "../extra/IntroCard";
import { About } from "../extra/About";

export const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        <Nav />
      </div>
      <div className="flex flex-col m-8">
        <div className=" flex-grow-0">
          <div className=" text-white">
            <Intro />
          </div>
          <div className=" flex justify-center item-center">
            <About />
          </div>
          <div className="border text-white">Skills</div>
        </div>
        <div className=" flex-grow">
          <div className="">
            <div className="border-4 p-4 bg-slate-300">
              <div className="flex items-center justify-center p-4">
                <div className="text-center mb-8 font-semibold text-4xl shadow-md ">
                  Projects
                </div>
              </div>

              <div>
                <div className=" grid grid-cols-4 gap-3">
                  <SimpleCard />
                  <SimpleCard />
                  <SimpleCard />
                  <SimpleCard />
                  <SimpleCard />
                  <SimpleCard />
                </div>
              </div>
            </div>
            <Contact />
          </div>
        </div>
      </div>
      <div className="border mt-auto">
        <Footer />
      </div>
    </div>
  );
};
