import styles from "./BookingForm.module.css";

const Form = () => {
  return (
    <div className={styles.form}>
      <div className={styles.title}>
        <h2>Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <form className={styles.inputs}>
        <input type="text" placeholder="Name*" />
        <input type="email" placeholder="Email*" />
        <input type="date" placeholder="Booking date*" />
        <textarea placeholder="Comment"></textarea>
        <button className="search-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
