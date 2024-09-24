import profilePic from "../assets/pfp.jpg";

const Card = () => {
  return (
    <div className="card">
      <img src={profilePic} alt="pfp.img" className="card-image" />
      <h2 className="card-title">Eljon Pogi</h2>
      <p className="card-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam possimus
        sed voluptatibus molestias blanditiis, nam illum consequatur officia
        ipsa voluptatem.
      </p>
    </div>
  );
};

export default Card;
