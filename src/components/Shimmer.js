const CardShimmer = () => {
  return (
    <div className="w-60 p-2 bg-slate-200 h-64">
      <img className="" />
      <div className="">
        <h2 className=""></h2>
        <p className=""></p>
        <p className=""></p>
        <p className=""></p>
      </div>
    </div>
  );
};

export const AboutUsShimmer = () => {
  return <h1 className="h-80 w-96 bg-slate-300 "></h1>;
};

export const RestaurantMenuShimmer = () => {
  return (
    <div className="h-80 w-64 bg-slate-300 flex items-center justify-center"></div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-12 items-center justify-center m-6">
      {new Array(10).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};

export default Shimmer;
