import About from "./about";


const Description = () => {
  return (
    <>

      <section>
        <div className="p-5">
          <h3 className="text-3xl py-1">About me</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
            Since I started to work in{" "}
            <span className="text-teal-500">Digikala</span> as a Frontend
            Developer, I started a Project that we called it{" "}
            <span className="text-teal-500 text-bold">HRIS</span> which is a
            Platform for HR Department that is Developed by React, SharePoint,
            .Net, TypeScript,... .
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
            After 2 years of Developing HRIS, we started to expand our team and
            create a Buisiness Line in Digikala for HR platforms and that wwas a
            Super application for HR called{" "}
            <span className="text-teal-500">HereIn</span>
          </p>
        </div>
        <About/>
      </section>
    </>
  );
};
export default Description;
