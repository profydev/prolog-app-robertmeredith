import styles from "./index.module.scss";
import { LandingNavigation } from "@features/layout";
import { useState, useEffect } from "react";
import { ContactModal } from "@features/common";
import { Hero, Social, Testimonials } from "../features/landing";

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  return (
    <div>
      <LandingNavigation />
      {showModal && (
        <ContactModal
          closeModal={() => setShowModal(false)}
          openEmail={() =>
            (window.location.href = "mailto:prolog@profy.dev.?subject=Enquiry:")
          }
        />
      )}
      <Hero />
      <Social />
      <Testimonials />
      <button
        className={styles.contactButton}
        onClick={() => setShowModal(!showModal)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
    </div>
  );
};

export default LandingPage;
