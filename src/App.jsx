import "./App.css";
import Cars from "./components/cars";
import IndividualCar from "./components/individualCar";
import { useState } from "react";

function App() {
  const [isIndividual, setIsIndividual] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleChosenCar = (car) => {
    setSelectedCar(car);
    setIsIndividual(true);
  };

  const handleBackToCarsList = () => {
    setIsIndividual(false);
    setSelectedCar(null);
  };

  return (
    <>
      {!isIndividual ? (
        <Cars onCarSelect={handleChosenCar} />
      ) : (
        <IndividualCar car={selectedCar} onBack={handleBackToCarsList} />
      )}
    </>
  );
}

export default App;
