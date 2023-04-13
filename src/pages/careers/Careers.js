import { Link, useLoaderData } from "react-router-dom";
import { getCareersData } from "data/careers";

const Careers = () => {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.slug} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default Careers;

export const careersLoader = async () => {
  const careers = getCareersData();

  if (careers.length === 0) {
    throw Error("Could not fetch the careers");
  }

  return careers;
};
