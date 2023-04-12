import { useLoaderData } from "react-router-dom";

const CareerDetails = () => {
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>{career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo itaque
          quisquam voluptatibus quasi officiis ipsam voluptate amet consequuntur
          rerum? Consequatur consequuntur ducimus natus dolores esse incidunt
          voluptas inventore temporibus nam!
        </p>
      </div>
    </div>
  );
};

export default CareerDetails;

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/careers/${id}`);

  return res.json();
};
