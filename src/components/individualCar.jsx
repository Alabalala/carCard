function IndividualCar({ car, onBack }) {
  return (
    <div className="carDetails">
      <p>
        <strong>Nombre:</strong> {car.carName}
      </p>
      <p>
        <strong>Marca:</strong> {car.carHouse}
      </p>
      <p>
        <strong>Modelo:</strong> {car.carModel}
      </p>
      <p>
        <strong>Conductor:</strong> {car.carDriver}
      </p>
      <p>
        <strong>Año:</strong>
        {car.carYear}
      </p>
      <p>
        <strong>Color:</strong>
        {car.carColor}
      </p>
    </div>
  );
}

export default IndividualCar;
