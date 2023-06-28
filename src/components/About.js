const About = () => {
  return (
    <div className="w-full h-auto mt-5 p-14 text-black mb-[100vh] font-Poppins">
      {/* <h1>About Page</h1>
      <h2>Lazy Loading or OnDemand Loading Implemented on This Route</h2> */}
      <ul className="flex flex-col gap-6 text-base">
        <li className="font-bold text-2xl">😎 Key Features</li>
        <li>📌 Shimmer UI</li>
        <li>📌 Search Feature </li>
        <li>📌 Cart Feature </li>
        <li>📌 Checking network connection</li>
        <li>📌 Lazy Loading or OnDemand Loading</li>
      </ul>
      <ul className="flex flex-col gap-6 text-base mt-10">
        <li className="font-bold text-2xl">⚙️ Tech Stack used</li>
        <li>➡️ React JS for UI </li>
        <li>➡️ Parcel for Bundling </li>
        <li>➡️ Redux for state management</li>
        <li>➡️ Tailwind CSS for Styling</li>
      </ul>
    </div>
  );
};

export default About;
