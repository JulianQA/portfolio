import React from "react";
import { FormContact } from "../../components/FormContact/FormContact";
import "./_contactsScreen.scss";

const ContactScreen = () => {
  return (
    <div className="ContactScreen screen">
      <h2 className="ContactScreen__title">Contact me!</h2>
      <FormContact />
    </div>
  );
};

export { ContactScreen };
