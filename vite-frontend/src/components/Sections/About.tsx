const About: React.FC = () => {
  return (
    <div
      id="about"
      className="py-32 w-full bg-gradient-to-b from-gray-800 to-gray-200 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div>
          <p className="text-xl mt-20">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            nihil maiores aut sunt quae quibusdam, error officiis sequi,
            repellat, sint optio. Ea vitae esse architecto non fugit itaque eius
            molestias possimus numquam hic natus alias quia corrupti, in
            expedita veritatis quis voluptates quibusdam ratione quas saepe
            officiis corporis earum. Placeat.
          </p>

          <br />

          <p className="text-xl ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae, officiis excepturi? Labore voluptates delectus ullam
            odio quibusdam illum esse, officiis, commodi quod exercitationem
            quidem dolores dignissimos, unde tempora cumque! Unde tempora maxime
            provident expedita est ducimus velit saepe odio consectetur corporis
            recusandae placeat, atque dicta laudantium quod eum at. Quod!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
