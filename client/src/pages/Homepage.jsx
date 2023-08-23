// import React from "react";
import { useEffect } from "react";
import { FeaturedCard } from "../components/FeaturedCard";
import Footer from "../components/Footer";
import Loader from "../components/loader";
import { useStateContext } from "../context";

const Homepage = () => {
  const { languageList, getLanguages } = useStateContext();
  useEffect(() => {
    getLanguages();

    return () => {};
  });
  return (
    <div className="">
      {/* Hero Section */}
      <section className="max-w-screen-2xl mx-auto rounded-xl shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Learn a New Language</h2>
          <p className="text-lg mb-8 font-medium">
            Interactive lessons, games and quizzes. Find the right language for
            you!
          </p>
          <button className="bg-white text-indigo-600 py-3 px-6 rounded-full text-lg hover:bg-blue-gray-800 hover:text-white transition duration-300">
            Get Started
          </button>
        </div>
      </section>
      {/* Top Languages */}
      {/* Featured Languages */}
      <section className="container mx-auto">
        <h2 className="text-2xl font-medium mt-8">Featured Languages</h2>

        <div className=" mx-4 grid grid-cols-3 gap-4 relative">
          {languageList.length > 0 ? (
            languageList.map((language) => {
              return (
                <FeaturedCard
                  key={language._id}
                  languageTitle={language.name}
                  body={language.description}
                  link={language.exercises[0]}
                />
              );
            })
          ) : (
            <div className="absolute left-1/2">
              <Loader />
            </div>
          )}
        </div>
      </section>
      {/* Featured Lessons */}
      <section className="container mx-auto">
        <h2 className="text-2xl font-medium mt-8">Featured Lessons</h2>

        <div className="mx-4 grid grid-cols-3 gap-4">
          <FeaturedCard
            languageTitle={"Spanish Greetings"}
            link={"64e62ade28f78d69e3ea5a38"}
          />
          <FeaturedCard
            languageTitle={"French Numbers"}
            link={"64e62b3428f78d69e3ea7f7d"}
          />
          <FeaturedCard
            languageTitle={"Chinese Activities"}
            link={"64e62b7a28f78d69e3ea9f94"}
          />
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto rounded-xl shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8 my-11 ">
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold mb-4">
            Start your language learning journey today!
          </h2>
          <button className="bg-white text-indigo-600 py-3 px-6 rounded-full text-lg hover:bg-indigo-800 hover:text-white transition duration-300">
            Get Started
          </button>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
