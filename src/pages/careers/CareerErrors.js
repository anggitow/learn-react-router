import { useRouteError } from "react-router-dom";

const CareerErrors = () => {
  const error = useRouteError();

  return (
    <div className="career-errors">
      <h2>Error</h2>
      <p>{error.message}</p>
    </div>
  );
};

export default CareerErrors;
