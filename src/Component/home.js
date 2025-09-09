import Form from "./Form";
import Nav from "./Navbar";

function Home() {
  return (
    <>
      <Nav title="React app"/>
      <div className="my-5">
        <Form />
      </div>
    </>
  );
}
export default Home;
