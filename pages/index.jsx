import styles from "./index.module.scss";
import { LandingNavigation } from "@features/layout";
import { useState } from "react";
import { ContactModal } from "@features/common";

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);

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
