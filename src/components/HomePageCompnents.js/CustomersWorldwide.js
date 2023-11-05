/** @format */

import React from "react";
import CustomerTitle from "../layouts/CustomerTitle";

const CustomersWorldwide = () => {
  return (
    <section className="w-full py-10 items-center bg-[#000225]">
      <CustomerTitle />
      <div className="w-full h-[100vh] md:h-[100vh] lg:h-[100vh] p-4 md:p-6 lg:p-10 mt-5 bg-center bg-cover bg-customerWorldWide">
        {/* Content Goes Here */}
      </div>
    </section>
  );
};

export default CustomersWorldwide;
