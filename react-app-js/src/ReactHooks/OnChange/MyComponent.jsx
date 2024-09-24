// The onChange handler in React is an event handler that gets triggered whenever the value of an input element changes. This is particularly useful for handling user input in real-time.
// form elemnts: <input>, <textarea>, <select>, <radio>

//onChange triggers a function everytime you input a value

const MyComponent = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [deliveryMethod, setdDeliveryMethod] = useState("");

  //Handling Input Changes: This function, inputName, is called whenever the input field changes. It takes an event object as an argument and updates inputValue with the current value of the input field (event.target.value).
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };

  //TEXTAREA
  const handleComment = (event) => {
    setComment(event.target.value);
  };

  //SELECT
  const handlePayment = (event) => {
    setPayment(event.target.value);
  };

  //RADIO
  const handleDelivery = (event) => {
    setdDeliveryMethod(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleName} />
      <p>Name: {name}</p>
      <input type="number" value={quantity} onChange={handleQuantity} />
      <p>Quantity: {quantity}</p>
      <textarea
        value={comment}
        onChange={handleComment}
        placeholder="Leave Instructions"
        rows="6"
        cols="50"
      ></textarea>
      <p>
        {name} commented: {comment}
      </p>
      <select name="Payment" id="" value={payment} onChange={handlePayment}>
        <option value="">Select an option</option>
        <option value="Maya">Maya</option>
        <option value="Gcash">Gcash</option>
        <option value="COD">COD</option>
      </select>
      <p>Payment Method: {payment}</p>
      {/* My method, it works pero di sa useState */}
      {/* <form action="" alue={deliveryMethod} onChange={handleDelivery}>
        <input type="radio" value="PickUp" name="deliveryMethod" />{" "}
        <label htmlFor="">PickUp</label>
        <input type="radio" value="Deliverry" name="deliveryMethod" />
        <label htmlFor="">Delivery</label>
      </form> */}
      <label htmlFor="">
        <input
          type="radio"
          value="Pick Up"
          checked={deliveryMethod === "Pick Up"}
          onChange={handleDelivery}
        />
        Pick Up
      </label>
      <label htmlFor="">
        <input
          type="radio"
          value="Delivery"
          name="deliveryMethod"
          checked={deliveryMethod === "Delivery"}
          onChange={handleDelivery}
        />
        Delivery
      </label>
      <p>Delivery Method: {deliveryMethod}</p>
    </div>
  );
};

export default MyComponent;
