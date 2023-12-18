// import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

const App = () => {
  return (
    <div className="bg-dark text-light vh-100 d-flex align-items-center justify-content-center">
      <main className="d-flex flex-column align-items-center">
        <ImageComponent src="https://picsum.photos/200/300" alt="random image" />
        <ButtonComponent
          buttonText="Clicca"
          buttonClass="bg-transparent text-success border border-success rounded-3 my-3"
        />

        <ImageComponent src="https://picsum.photos/id/237/200/300" alt="dog" />

        <ButtonComponent
          buttonText="Bottone 2"
          buttonClass="bg-transparent text-warning border border-warning rounded-3 my-3"
        />
      </main>
    </div>
  );
};

export default App;
