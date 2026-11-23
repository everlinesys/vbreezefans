import React from "react";

export const Products: React.FC = () => {
  const productList = [
    {
      title: "VBREEZE Designer HVLS Fans",
      use: "Churches & Auditoriums", // Shortened for better sticky headline impact
      img: "/products/designerfan.png",
      href: "DesignerProductDetails",
      desc: "High-airflow premium HVLS fans built for large gathering spaces, ensuring silent, efficient cooling. Their modern aesthetic is designed to blend seamlessly into high-end architectural environments.",
    },
    {
      title: "VBREEZE Basic HVLS Fans",
      use: "Factories & Industrial Spaces",
      img: "/products/industrialfan.png",
      href: "BasicProductDetails",
      desc: "Robust, durable HVLS fans engineered for warehouses, factories, and large production units. They offer high CFM ratings and are built to withstand demanding industrial conditions.",
    },
    {
      title: "VBREEZE Interior HVLS Fans",
      use: "Homes & Premium Interiors",
      img: "/products/interiorfan.png",
      href: "InteriorProductDetails",
      desc: "Elegant, quiet, and energy-efficient fans crafted for modern homes and lifestyle spaces. Experience superior air movement without sacrificing interior design elegance.",
    },
  ];

  return (
    // Section needs substantial height (pb-96) to allow content to scroll under the sticky title
    <section
      id="products"
      className="py-24 pb-96 bg-slate-50 text-slate-900 overflow-x-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <h2
          className="text-4xl font-semibold text-center mb-4 text-sky-500"
          data-aos="fade-down"
        >
          Our Products
        </h2>
        <p
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Engineered for performance. Designed for reliability. Built for every
          environment.
        </p>

        {/* 🚀 PRODUCT LIST WITH STICKY HEADERS */}
        <div className="space-y-24 ">
          {productList.map((p, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-start relative`} // Added relative for sticky container
            >
              {/* 🛑 STICKY PRODUCT HEADER (New Element) */}
              <div
                className="col-span-2 md:col-span-1 md:sticky md:top-20 z-10 w-full mb-4 md:mb-0" // Sticky on medium screens
                data-aos="fade-right"
              >
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                  {p.use}
                </h3>
                <p className="text-sky-600 font-semibold text-xl mt-2">
                  {p.title}
                </p>
              </div>

              {/* DETAILS AND IMAGE (Scrollable Content) */}
              <div
                className={`md:col-span-1 space-y-4 md:pt-4${
                  index % 2 === 1 ? "md:order-first" : "" // Reverse image/text order
                }`}
                data-aos="fade-left"
                data-aos-delay="200"
              >
                {/* Image */}
                <div>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full max-h-80 object-cover rounded-2xl shadow-xl border-4 border-white"
                  />
                </div>

                {/* Description and Button */}
                <p className="text-gray-700 leading-relaxed text-lg pt-4">
                  {p.desc}
                </p>

                <a
                  className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md inline-block"
                  href={p.href}
                >
                  Explore {p.use} Solutions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
