import { useEffect } from "react";
import { Card, Avatar, Button } from "@material-tailwind/react";
import { useStateContext } from "../context";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, getUser } = useStateContext();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    // console.log(token);
    getUser(token);
    // console.log(user);
    return () => {};
  });
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-96 p-6">
        <div className="flex justify-center">
          <Avatar
            color="indigo"
            size="lg"
            src="https://api.dicebear.com/6.x/pixel-art/svg"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center mt-4">{user.name}</h2>
        <p className="text-gray-500 text-center mt-1">Web Developer</p>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Location:</span>
            <span>New York, USA</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Languages:</span>
            <span>
              {user.languages !== "" ? "Spanish,French" : user.languages}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Exercises Done:</span>
            <span>
              {/* {user.exercisesDone !== "" ? user.exercisesDone.length : ""} */}
            </span>
          </div>
        </div>
        <div className="mt-6 mx-auto">
          <Link to="/">
            <Button color="indigo" ripple="light" block className="text-center">
              Go to Home
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
