"use client";
import React, { useState } from "react";
import Header from "../../../components/Header";
import TemplateList from "../../../components/TemplateList";
import TemplateDetail from "../../../components/TemplateDetail";
import { Template } from "../../../types/Template";

const templatesData: Template[] = [
  {
    name: "Managing Account Data",
    description:
      "This contract serves as a foundational template for developers looking to manage data stored on the Solana blockchain effectively. It provides essential functionalities to initialize, update, and read data from a custom account.",
    imageUrl: "https://id.pinterest.com/pin/42432421479775953/",
  },
  {
    name: "Investment Contract",
    description: "Perfect for managing collective investments and portfolios.",
    imageUrl: "/images/investment-dao.png",
  },
];

const DashboardPage: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      {/* <Spline scene="https://prod.spline.design/6KjtWRtNsiKVUIG7/scene.splinecode" /> */}
      <Header />
      <TemplateList templates={templatesData} />
      {selectedTemplate && (
        <TemplateDetail
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
        />
      )}
      <div className="p-6 text-center mt-[8rem]">
        <button className="bg-neon text-black px-6 py-3 rounded-lg font-bold hover:bg-neon-dark">
          Create Your Own Contract From Scratch
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
