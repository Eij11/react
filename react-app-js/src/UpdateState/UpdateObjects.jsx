import React, { useState } from "react";

const UpdateObjects = () => {
  const [car, setCar] = useState({ year: 2024, brand: "Tesla", model: "Abx2" });

  const handleCarBrand = (event) => {
    //spread operator: ...car{year: 2024, brand: "Tesla", model: "Abx2", brand: event.target.value})

    //ilalagay niya yung mas recent kaya napapalitan
    //make as an updater function
    setCar((prevCar) => ({ ...prevCar, brand: event.target.value }));
  };

  const handleCarModel = (event) => {
    //updater function
    setCar((prevCar) => ({ ...prevCar, model: event.target.value }));
  };

  const handleCarYear = (event) => {
    setCar((prevCar) => ({ ...prevCar, year: event.target.value }));
  };
  return (
    <div>
      <p>
        Your Car: {car.brand} {car.model} {car.year}
      </p>
      <input type="text" value={car.brand} onChange={handleCarBrand} /> <br />
      <input type="text" value={car.model} onChange={handleCarModel} /> <br />
      <input type="number" value={car.year} onChange={handleCarYear} /> <br />
    </div>
  );
};

export default UpdateObjects;
