import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sit ex
        deserunt laudantium repellendus ea commodi exercitationem nihil rem
        velit?
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
