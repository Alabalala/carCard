import { useState } from "react";
import "../styles/cars.css";

function Cars({ onCarSelect }) {
  const [cars, setCars] = useState([]);
  const [isAddCarButtonVisible, setIsAddCarButtonVisible] = useState(true);
  const [newCar, setNewCar] = useState({
    carName: "",
    carHouse: "",
    carDriver: "",
    carModel: "",
    carYear: "",
    carColor: "",
  });

  const AddMoreCars = (e) => {
    e.preventDefault();
    console.log(newCar);
    setCars([...cars, { ...newCar, id: cars.length + 1 }]);
    setNewCar({
      carName: "",
      carHouse: "",
      carDriver: "",
      carModel: "",
      carYear: "",
      carColor: "",
    });
    console.log(cars);

    setIsFormVisible(false);
    setIsAddCarButtonVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name + " " + value);
    setNewCar({ ...newCar, [name]: value });
  };

  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <div className="cars">
      <h1>Tus coches</h1>

      {isFormVisible ? (
        <form className="newCarForm" onSubmit={AddMoreCars}>
          <label htmlFor="carName">Nombre del coche</label>
          <input
            name="carName"
            onChange={handleInputChange}
            type="text"
            className="carName"
            value={newCar.carName}
          />
          <label htmlFor="carHouse">Marca</label>
          <input
            name="carHouse"
            onChange={handleInputChange}
            type="text"
            className="carHouse"
            value={newCar.carHouse}
          />
          <label htmlFor="carModel">Modelo</label>
          <input
            name="carModel"
            onChange={handleInputChange}
            type="text"
            className="carModel"
            value={newCar.carModel}
          />
          <label htmlFor="carDriver">Conductor principal</label>
          <input
            name="carDriver"
            onChange={handleInputChange}
            type="text"
            className="carDriver"
            value={newCar.carDriver}
          />
          <label htmlFor="carYear">Año de fabricación</label>
          <input
            name="carYear"
            onChange={handleInputChange}
            type="text"
            className="carYear"
            value={newCar.carYear}
          />
          <label htmlFor="carColor">Color del coche</label>
          <select
            onChange={handleInputChange}
            value={newCar.carColor}
            name="carColor"
          >
            <option value="">Elige un color</option>
            <option value="black">Negro</option>
            <option value="white">Blanco</option>
            <option value="red">Rojo</option>
            <option value="green">Verde</option>
            <option value="yellow">Amarillo</option>
            <option value="purple">Morado</option>
            <option value="blue">Azul</option>
            <option value="brown">Marrón</option>
            <option value="gray">Gris</option>
            <option value="orange">Naranja</option>
            <option value="pink">Rosa</option>
          </select>
          <input type="submit" value="Añadir coche" />
        </form>
      ) : (
        <>
          {cars.length === 0 ? (
            <>
              <p className="noCar">No hay ningún coche</p>
              {isAddCarButtonVisible && (
                <button
                  className="addNewCar"
                  onClick={() => {
                    setIsFormVisible(true);
                    setIsAddCarButtonVisible(false);
                  }}
                >
                  Nuevo coche
                </button>
              )}
            </>
          ) : (
            <div className="carList">
              {cars.map((car) => (
                <button
                  key={car.id}
                  className="carButton"
                  style={{ backgroundColor: car.carColor }}
                  onClick={() => onCarSelect(car)}
                >
                  {car.carName}
                </button>
              ))}
              {isAddCarButtonVisible && (
                <button
                  className="addNewCar"
                  onClick={() => {
                    setIsFormVisible(true);
                    setIsAddCarButtonVisible(false);
                  }}
                >
                  Nuevo coche
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cars;
