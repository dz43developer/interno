import React from "react";

const Contact = () => {
  return (
    <section className="contact mt-[80px] xl:mt-[150px] relative z-20  xl:mx-[11%]">
      <div className="contact__container container mx-auto bg-primary rounded-[70px]">
        <div className="contact__text max-w-[640px] mx-auto text-center py-[80px]">
          <h2 className="h2 text-white mb-4">Do you want to join Interno?</h2>
          <p className="text-white mb-8 max-w-sm xl:max-w-none mx-auto">
            It is a long established fact will be distracted.
          </p>
          <button className="btn btn-accent mx-auto">
            Contact with us <i className="ri-arrow-right-line text-primary"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
