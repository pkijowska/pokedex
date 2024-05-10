import style from "./Loader.module.css";

const Loader = () => (
  <div className={style.wrapper}>
    <p>Loading... Gotta Load 'Em All...Hang tight! </p>
    <img src={`${process.env.PUBLIC_URL}/pika.gif`} alt="Loading" />
  </div>
);
export default Loader;
