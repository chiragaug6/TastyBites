const CardShimmer = () => {
  return (
    <div className="card shimmer-card stroke animate">
      <img className="card-image shimmer-img stroke animate" />
      <div className="card-content shimmer-content stroke animate">
        <h2 className="card-title shimmer-title stroke animate"></h2>
        <p className="hashtags shimmer-tags stroke animate"></p>
        <p className="card-description shimmer-details stroke animate"></p>
        <p className="card-price stroke animate"></p>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {new Array(10).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};

export default Shimmer;
