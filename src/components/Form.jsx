/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./Form.module.css";

function Form({ setIsFinished }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    query: "",
    message: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const [errors, setErrors] = useState({
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    queryError: false,
    messageError: false,
    checkboxError: false,
  });

  useEffect(
    function () {
      setErrors({
        firstNameError:
          !/^[a-zA-Z]+$/.test(formData.firstName) && formData.firstName !== "",
        lastNameError:
          !/^[a-zA-Z]+$/.test(formData.lastName) && formData.lastName !== "",
        emailError:
          !/^(?!.*@.*@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
            formData.email,
          ) && formData.email !== "",
        queryError: false,
        messageError: false,
        checkboxError: false,
      });
    },
    [
      formData.email,
      formData.firstName,
      formData.lastName,
      formData.query,
      formData.message,
      isChecked,
    ],
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const newErrors = {
      firstNameError: !/^[a-zA-Z]+$/.test(formData.firstName),
      lastNameError: !/^[a-zA-Z]+$/.test(formData.lastName),
      emailError:
        !/^(?!.*@.*@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          formData.email,
        ),
      queryError: formData.query === "" ? true : false,
      messageError: formData.message.length === 0,
      checkboxError: !isChecked,
    };

    setErrors(newErrors);
    console.log(Object.values(errors));
    if (
      Object.values(formData).every((v) => v !== "") &&
      Object.values(errors).every((v) => v === false) &&
      isChecked
    ) {
      setIsFinished(true);
      setTimeout(() => {
        setIsFinished(false);
      }, 5000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-[90%] max-w-3xl rounded-xl bg-white p-4 sm:p-12"
    >
      <h1 className="mb-6 text-3xl font-semibold leading-none sm:mb-8">
        Contact Us
      </h1>

      <div
        className={`sm:mb-3 sm:flex sm:items-center sm:gap-4 ${errors.firstNameError ? "!mb-6" : ""}`}
      >
        <div
          className={`relative grid flex-grow ${errors.firstNameError ? "!mb-6" : ""}`}
        >
          <label htmlFor="firstName" className="mb-2">
            First Name<sup>*</sup>
          </label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange(e)}
            type="text"
            id="firstName"
            className="input cursor-pointer border duration-300 hover:border-Green-600-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
          />
          {errors.firstNameError && (
            <label
              htmlFor="firstName"
              className="absolute bottom-[-.75rem] text-red-600"
            >
              Enter a valid first name
            </label>
          )}
        </div>

        <div className="relative grid flex-grow self-start">
          <label htmlFor="lastName" className="mb-2">
            Last Name<sup>*</sup>
          </label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange(e)}
            type="text"
            id="lastName"
            className="input cursor-pointer border duration-300 hover:border-Green-600-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
          />

          {errors.lastNameError && (
            <label
              htmlFor="firstName"
              className="absolute bottom-[-.75rem] text-red-600"
            >
              Enter a valid last name
            </label>
          )}
        </div>
      </div>

      <div
        className={`relative grid sm:mb-4 ${errors.emailError ? "!mb-8" : ""}`}
      >
        <label htmlFor="email" className="mb-2">
          Email Address<sup>*</sup>
        </label>
        <input
          name="email"
          value={formData.email}
          onChange={(e) => handleInputChange(e)}
          type="text"
          id="email"
          className="input cursor-pointer border duration-300 hover:border-Green-600-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
        />

        {errors.emailError && (
          <label
            htmlFor="firstName"
            className="absolute bottom-[-.75rem] text-red-600"
          >
            Please enter a valid email address
          </label>
        )}
      </div>

      <div
        className={`relative mb-5 grid gap-2 ${errors.queryError ? "!mb-8" : ""}`}
      >
        <p>
          Query Type <sup>*</sup>
        </p>
        <div className="sm:flex sm:gap-4">
          <div className={`${styles.option} flex-grow`}>
            <input
              name="query"
              value="enquiry"
              onChange={(e) => handleInputChange(e)}
              type="radio"
              id="general"
              className="cursor-pointer border duration-300 hover:border-Green-600-medium focus:outline-none focus:ring-2 focus:ring-offset-8"
            />
            <label htmlFor="general" className="mb-2">
              General Enquiry
            </label>
          </div>

          <div className={`${styles.option} flex-grow`}>
            <input
              name="query"
              value="request"
              onChange={(e) => handleInputChange(e)}
              type="radio"
              id="support"
              className="cursor-pointer border duration-300 hover:border-Green-600-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
            />
            <label htmlFor="support" className="mb-2">
              Support Request
            </label>
          </div>
        </div>

        {errors.queryError && (
          <label
            htmlFor="firstName"
            className="absolute bottom-[-1.25rem] text-red-600"
          >
            Please select a query type
          </label>
        )}
      </div>

      <div
        className={`relative mt-3 grid ${errors.messageError ? "!mb-14" : ""}`}
      >
        <label htmlFor="message" className="mb-2">
          Message <sup>*</sup>
        </label>
        <textarea
          id="message"
          className="cursor-pointer rounded-lg border border-Grey-500-medium duration-300 hover:border-Green-600-medium focus:outline-none focus:ring-2 focus:ring-offset-2 pl-2"
          rows="5"
          name="message"
          value={formData.message}
          onChange={(e) => handleInputChange(e)}
        ></textarea>

        {errors.messageError && (
          <label
            htmlFor="firstName"
            className="absolute bottom-[-2rem] text-red-600"
          >
            Enter a valid message
          </label>
        )}
      </div>

      <div
        className={`${errors.checkboxError ? "mb-8" : ""} relative mt-6 flex items-center gap-4`}
      >
        <input
          name="checkbox"
          onChange={() => setIsChecked((prev) => !prev)}
          checked={isChecked}
          type="checkbox"
          id="consent"
          className="hover:none cursor-pointer"
        />
        <label
          htmlFor="consent"
          className="cursor-pointer duration-300 hover:text-Green-600-medium"
        >
          I consent to being contacted by the team <sup>*</sup>
        </label>

        {errors.checkboxError && (
          <label
            htmlFor="firstName"
            className={`absolute text-red-600 sm:bottom-[-2rem] ${errors.checkboxError ? "bottom-[-3.5rem]" : ""}`}
          >
            To submit this form, please consent to being contacted
          </label>
        )}
      </div>

      <button
        type="submit"
        className="mt-10 w-full rounded-xl bg-Green-600-medium py-4 text-lg font-semibold text-white hover:bg-[#063F36] duration-300"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
