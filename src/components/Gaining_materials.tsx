import React from "react";
import Link from "next/link";

const GainingMaterials = () => {
  return (
    <div className="steps__step text-center">
      <div className="mb-4">
        <i className="ri-magic-line text-5xl text-accent"></i>
      </div>
      <h3 className="h3 mb-5">Gaining Materials</h3>
      <p className="mb-5 max-w-md mx-auto">
        There are many variations of the passages of lorem Ipsum from available,
        majority.
      </p>
      <Link href="#" className="font-medium flex justify-center gap-2">
        Read More <i className="ri-arrow-right-line text-accent"></i>
      </Link>
    </div>
  );
};

export default GainingMaterials;
