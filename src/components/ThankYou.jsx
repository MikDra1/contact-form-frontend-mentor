/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./ThankYou.module.css";

function ThankYou({ isFinished }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(function () {
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  }, []);

  return (
    <section
      className={`${isVisible ? styles.thankYouVisible : styles.thankYouHidden}  fixed top-8 z-10 rounded-lg bg-Grey-900-darker p-6 text-white duration-1000`}
    >
      <div className="mb-2 flex items-center gap-2">
        <img src="./images/icon-success-check.svg" alt="" />
        <h2 className="font-semibold">Message Sent!</h2>
      </div>
      <p className="text-Grey-500-medium">
        Thanks for completing the form. We&lsquo;ll be in touch soon!
      </p>
    </section>
  );
}

export default ThankYou;
