"use client";

import { sendEmail } from "@/lib/sendEmail";
import React, { useState, ChangeEvent, FormEvent, useRef } from "react";

interface FormState {
  [key: string]: {
    value: string;
    isValid: boolean;
  };
}

const formFields = [
  { id: "name", label: "Jméno *", type: "text" },
  { id: "email", label: "E-mail *", type: "text" },
  { id: "phone-number", label: "Tel. číslo *", type: "text" },
  { id: "company", label: "Název firmy", type: "text" },
];

const ContactMe = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [formState, setFormState] = useState<FormState>({
    name: { value: "", isValid: true },
    company: { value: "", isValid: true },
    email: { value: "", isValid: true },
    "phone-number": { value: "", isValid: true },
    message: { value: "", isValid: true },
  });

  const handleInputChange = (id: string, value: string) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [id]: {
          ...prevState[id],
          value: value,
        },
      };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    let isFormValid = true;

    const updatedFormState = { ...formState };

    // Validate all fields except "company" and "message"
    for (const field of formFields) {
      if (field.id !== "company" && field.id !== "message") {
        const value = formState[field.id].value.trim();

        // Check for empty values
        if (value === "") {
          isFormValid = false;
          updatedFormState[field.id].isValid = false;
        } else {
          updatedFormState[field.id].isValid = true;
        }

        // Validate email field
        if (field.id === "email") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            isFormValid = false;
            updatedFormState[field.id].isValid = false;
          }
        }
      }
    }

    setFormState(updatedFormState);

    if (isFormValid) {
      setIsSubmited(true);
      sendEmail(formState)
    } else {
      if (buttonRef.current) {
        buttonRef.current.classList.add("errorShake");

        // Remove the errorShake class after the animation duration (adjust the timeout as needed)
        setTimeout(() => {
          if (buttonRef.current) {
            buttonRef.current.classList.remove("errorShake");
          }
        }, 400);
      }
    }
  };

  return (
    <div
      id="kontaktovat"
      className="flex flex-col items-center justify-center gap-14 px-[150px] max-xl:px-[90px] max-lg:px-[60px] max-sm:px-[30px] pb-20 pt-[70px]"
    >
      <h2 className="text-center text-[32px] font-bold leading-[40px]">
        Neváhejte mi napsat!
      </h2>

      <form
        className="flex max-md:flex-col text-[#9F9F9F] font-light italic gap-x-[130px] max-lg:gap-x-[100px] gap-y-11 w-full max-w-[1100px]"
        onSubmit={handleSubmit}
      >
        <div className="min-w-[300px] max-lg:min-w-[250px] max-md:min-w-full w-fit text-[16px] flex flex-col gap-[44px] ">
          <div id={"inputs"} className="flex flex-col gap-8 ">
            {formFields.map((field) => (
              <div key={field.id} className="relative overflow-hidden w-full">
                <input
                  id={field.id}
                  type={field.type}
                  value={formState[field.id].value}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(field.id, e.target.value)
                  }
                  data-not-empty={
                    formState[field.id].value.trim() !== "" ? "true" : "false" 
                  }
                  data-not-valid={!formState[field.id].isValid && field.id !== 'company'}
                  disabled={isSubmited}
                ></input>
                <label htmlFor={field.id}>{field.label}</label>
                <span className="input-underline " />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full items-stretch gap-9">
          <textarea
            className={`w-full resize-none relative focus:border-black duration-[300ms] outline-none text-black z-10 bg-transparent text-[16px] font-normal placeholder:italic placeholder:font-light border border-[#A2A2A2] rounded-xl h-[400px] py-8 px-8
                        ${
                          formState.message.value !== "" ? "border-black" : ""
                        }`}
            id="message"
            placeholder="Řekněte mi něco o vašem projektu"
            value={formState.message.value}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange("message", e.target.value)
            }
            disabled={isSubmited}
          />
          <button
            ref={buttonRef}
            type="submit"
            className={`overflow-hidden relative text-[18px] border border-[#A2A2A2] hover:shadow-small duration-[300ms] font-medium w-fit max-md:w-full py-5 px-12 rounded-xl self-end flex items-center justify-center 
                        ${
                          isSubmited
                            ? "bg-black delay-[350ms]  duration-[750ms]"
                            : "bg-white"
                        }`}
            disabled={isSubmited}
          >
            <div className="w-[65px] h-[20px]"></div>
            <span
              className={`w-full absolute ${
                isSubmited
                  ? "top-[-100%] ease-in-out delay-[350ms] duration-[750ms] "
                  : "top-[5%] "
              }  left-[50%] translate-y-1/2 -translate-x-1/2 text-black `}
            >
              Odeslat
            </span>
            <span
              className={`w-full absolute ${
                isSubmited
                  ? "top-[5%] ease-in-out delay-[350ms] duration-[750ms] "
                  : "top-[100%]"
              } left-[50%] translate-y-1/2 -translate-x-1/2 text-white `}
            >
              Odesláno!
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
