import React, { useState } from "react";

const UpdateArrOfObjects = () => {
  const [cars, setCars] = useState([]);

  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setCarModel] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const handleRemoveCar = () => {
    setCars((prevCars) =>
      prevCars.filter(
        (car) =>
          car.year.toString() !== searchTerm &&
          car.brand.toLowerCase() !== searchTerm.toLowerCase() &&
          car.model.toLowerCase() !== searchTerm.toLowerCase()
      )
    );
    setSearchTerm("");
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddCar = () => {
    //listOfCars
    //si newCar taga create siya ng object na nanggaling sa onChange or input elements
    const newCar = { year: carYear, brand: carBrand, model: carModel };

    //then ginamit yung useState here to change the previous value sa newCar
    //using the updater function
    setCars((prevCars) => [...prevCars, newCar]);

    //reset values
    setCarYear(new Date().getFullYear());
    setCarBrand("");
    setCarModel("");
  };
  //   const handleRemoveCar = (index) => {
  //     setCars(cars.filter((_, i) => i !== index));
  //   };

  const handleYearChange = (event) => {
    setCarYear(event.target.value);
  };
  const handleBrandChange = (event) => {
    setCarBrand(event.target.value);
  };
  const handleModelChange = (event) => {
    setCarModel(event.target.value);
  };

  const listOfCars = cars.map((car, index) => (
    <li key={index}>
      {car.brand} {car.model} {car.year}
    </li>
  ));

  return (
    <div>
      <h2>Your Cars</h2>
      <ul>{listOfCars}</ul>
      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={carBrand}
        onChange={handleBrandChange}
        placeholder="Input Car Brand"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Input Car Model"
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
      <br />
      <br />
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Search by Year, Brand, or Model"
      />{" "}
      <br />
      <button onClick={handleRemoveCar}>Remove Car</button>
    </div>
  );
};

export default UpdateArrOfObjects;
