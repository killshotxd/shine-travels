import React from "react";
import styles from "./Booking.module.css";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@chakra-ui/react";
import { HiMail, HiPhone } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
const Booking = () => {
  const [state, handleSubmit] = useForm("xleverav");
  if (state.succeeded) {
    return (
      <>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "x-large",
            color: "palevioletred",
            fontWeight: "bold",
          }}
        >
          You will receive a callback Soon!
        </p>

        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "x-large",
            color: "palevioletred",
            fontWeight: "bold",
          }}
        >
          Or Reach to us from Below links 👇
        </p>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.email}>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className={styles.phone}>
          <label htmlFor="tel">Phone Number</label>
          <input id="phone" type="tel" name="phone" />
          <ValidationError
            prefix=" Phone Number"
            field="number"
            errors={state.errors}
          />
        </div>

        <textarea
          id="message"
          name="message"
          placeholder="Enter Your Message/Queries"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <select id="select" name="Cars">
          <option value="default">Select Car</option>
          <option value="Audi A6">Audi A6</option>
          <option value="BMW">BMW</option>
          <option value="Swift Dzire">Swift Dzire</option>
          <option value="Amaze">Amaze</option>
          <option value="Honda City">Honda City</option>
          <option value="Fortuner">Fortuner</option>
        </select>
        <Button
          variant="solid"
          colorScheme="red"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Booking;
