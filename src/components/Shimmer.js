const CardShimmer = () => {
  return (
    <div className="w-72 h-80 pl-5 pr-5 pt-5 pb-14 border border-white">
      <div className="Image w-64 h-40 bg-slate-100"></div>
      <div className="w-40 h-4 mt-5 bg-slate-100"></div>
      <div className="w-28 h-4 mt-5 bg-slate-100"></div>
    </div>
  );
};

export const AboutUsShimmer = () => {
  return <h1 className="h-80 w-96 bg-slate-300 "></h1>;
};

export const RestaurantMenuShimmer = () => {
  return (
    <div className="w-72 h-80 pl-5 pr-5 pt-5 pb-14 border border-white">
      <div className="Image w-64 h-40 bg-slate-100"></div>
      <div className="w-40 h-4 mt-5 bg-slate-100"></div>
      <div className="w-28 h-4 mt-5 bg-slate-100"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-12 items-center justify-center">
      {new Array(4).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};

export default Shimmer;
