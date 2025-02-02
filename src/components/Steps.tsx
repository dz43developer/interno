"use client";

import React from "react";
import ProjectPlanning from "./Project_planning";
import GainingMaterials from "./Gaining_materials";
import ProjectExecution from "./Project_execution";

const Steps = () => {
  return (
    <section className="steps mt-[80px] xl:mt-[200px] relative z-20 xl:mx-[10%]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3 xl:mx-auto">
          <ProjectPlanning />
          <GainingMaterials />
          <ProjectExecution />
        </div>
      </div>
    </section>
  );
};

export default Steps;
