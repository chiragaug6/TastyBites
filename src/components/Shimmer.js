const CardShimmer = () => {
  return (
    <div className="w-72 h-80 pl-5 pr-5 pt-5 pb-14 border border-white">
      <div className="Image w-64 h-40 bg-slate-300"></div>
      <div className="w-40 h-4 mt-5 bg-slate-300 animate-pulse"></div>
      <div className="w-28 h-4 mt-5 bg-slate-300 animate-pulse"></div>
    </div>
  );
};

export const AboutUsShimmer = () => {
  return <h1 className="h-80 w-96 bg-slate-300"></h1>;
};

export const RestaurantMenuShimmer = () => {
  return (
    <div className="w-2/3 mx-auto h-[600px] sm:w-full sm:h-full z-2">
      <div className="h-52 flex justify-between p-6">
        <div className="flex flex-col gap-3">
          <div className="w-96 h-10 rounded-sm bg-slate-300 animate-pulse sm:w-32 sm:h-5"></div>
          <div className="w-96 h-10 rounded-sm bg-slate-300 animate-pulse sm:w-32 sm:h-5"></div>
          <div className="ww-96 h-10 rounded-sm bg-slate-300 animate-pulse sm:w-32 sm:h-5"></div>
          <div className="w-96 h-10 rounded-sm bg-slate-300 animate-pulse sm:w-32 sm:h-5"></div>
        </div>
        <div className="w-80 h-48 rounded-lg bg-slate-300 animate-pulse sm:w-56 sm:h-20"></div>
      </div>
      <div className="bg-slate-300 h-10 w-96 mt-8 mb-7 animate-pulse sm:w-48 sm:h-4"></div>
      <div className="flex justify-between p-4">
        <div className="flex flex-col gap-3">
          <div className="w-96 h-12 bg-slate-300 animate-pulse sm:w-48 sm:h-4"></div>
          <div className="w-44 h-12 bg-slate-300 animate-pulse sm:w-48 sm:h-4"></div>
        </div>
        <div className="w-28 h-28 bg-slate-300 animate-pulse sm:w-48 sm:h-4"></div>
      </div>
      <div className="flex justify-between p-4 mt-5">
        <div className="flex flex-col gap-3">
          <div className="w-96 h-12 bg-slate-300 animate-pulse sm:w-48 sm:h-4"></div>
          <div className="w-44 h-12 bg-slate-300 animate-pulse sm:w-48 sm:h-4"></div>
        </div>
        <div className="w-28 h-28 bg-slate-300 animate-pulse sm:w-48 sm:h-4"></div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-12 items-center justify-center">
      {new Array(12).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};

export default Shimmer;
