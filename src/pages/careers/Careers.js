import { Link, useLoaderData } from "react-router-dom";
import { getCareersData } from "data/careers";

const Careers = () => {
  const careers = useLoaderData();

  // const careers = getCareersData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default Careers;

export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");

  if (!res.ok) {
    throw Error("Could not fetch the careers");
  }

  return res.json();
};
