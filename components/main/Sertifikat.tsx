import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Sertifikat = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="sertifikat"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My certificate
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/sr1.png"
          title="K3 Certificate"
          description="I got a certificate by completing modules and implementing K3 in the school environment"
        />
        <ProjectCard
          src="/sr2.png"
          title="career as software development Certificate"
          description="I got this certificate by completing the module to pursue a career as a software developer"
        />
        <ProjectCard
          src="/sr3.png"
          title="basic javascript programming"
          description="I got this certificate by completing the basic JavaScript programming module"
        />
      </div>
    </div>
  );
};

export default Sertifikat;