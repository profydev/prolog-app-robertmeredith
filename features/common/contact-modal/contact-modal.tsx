import styles from "./contact-modal.module.scss";
import { Button, ButtonColor, ButtonSize } from "@features/ui";

type ContactModalProps = {
  closeModal: () => void;
  openEmail: () => void;
};

export const ContactModal = ({ closeModal, openEmail }: ContactModalProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.content}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/mail.svg" alt="email icon" className={styles.icon} />
          <div className={styles.textContainer}>
            <h2>Contact Us Via Email</h2>
            <div className={styles.supporting}>
              Any questions? Send us an email at prolog@profy.dev. We usually
              answer within 24 hours.
            </div>
          </div>
        </div>
        {/* ACTIONS */}
        <div className={styles.actions}>
          <Button
            size={ButtonSize.lg}
            color={ButtonColor.gray}
            className={styles.button}
            onClick={closeModal}
          >
            Cancel
          </Button>

          <Button
            size={ButtonSize.lg}
            color={ButtonColor.primary}
            className={styles.button}
            onClick={openEmail}
          >
            Open Email App
          </Button>
        </div>
      </div>
    </div>
  );
};
