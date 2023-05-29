import React, { useState } from "react";
import axios from "axios";
import { InputField } from "../../pages/Login/input-field";
import { Button } from "../../pages/Login/button";
import "./Modal.css";

interface FormValues {
  image: File | null;
  heading: string;
  content: string;
}

const ModalForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    image: null,
    heading: "",
    content: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFormValues((prevValues) => ({ ...prevValues, image: selectedFile }));
    }
  };

  const url = "http://localhost:5000/auth/register";

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, formValues);
      console.log(response);
      alert("Form submitted");
      e.target.reset();
    } catch (error) {
      console.error(error);
      // Handle error if needed
    }
  };

  return (
    <div className="modalFormWrapper">
      <form onSubmit={handleFormSubmit} className="modalForm">
        <InputField
          type="file"
          onChange={handleImageChange}
          name="image"
          required
          value={undefined}
          placeHolder={""}
          className={""}
          disabled={false}
        />
        <InputField
          type="text"
          onChange={handleInputChange}
          placeHolder="Title goes here"
          name="heading"
          required
          value={undefined}
          className={""}
          disabled={false}
        />
        <textarea
          name="content"
          cols={30}
          rows={10}
          placeholder="Description"
          required
        ></textarea>
        <Button
          btnText="Submit"
          type="submit"
          onClick={() => {}}
          className={""}
        />
      </form>
    </div>
  );
};

export default ModalForm;
