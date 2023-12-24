
'use client'

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormState {
  [key: string]: {
    value: string;
    isValid: boolean;
  };
}

const formFields = [
    { id: "name", label: "Jméno", type: "text" },
    { id: "company", label: "Název firmy", type: "text" },
    { id: "email", label: "E-mail", type: "text" },
    { id: "phone-number", label: "Tel. číslo", type: "text" },
];

const ContactMe = () => {
  const [formState, setFormState] = useState<FormState>({
    name: { value: "", isValid: false },
    company: { value: "", isValid: false },
    email: { value: "", isValid: false },
    "phone-number": { value: "", isValid: false },
    message: { value: "", isValid: false },
  });

  const handleInputChange = (
    id: string,
    value: string
  ): void => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [id]: {
        value,
        isValid: value.trim() !== "",
      },
    }));
  };

  const isSendButtonDisabled = (): boolean => {
    return Object.keys(formState).some(
      (key) =>
        key !== "message" &&
        (!formState[key].isValid || formState[key].value.trim() === "")
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-14 px-[150px] max-xl:px-[90px] max-lg:px-[60px] max-sm:px-[30px] pb-20">
      <h2 className="text-center text-[32px] font-bold">
        Neváhejte mi napsat!
      </h2>

      <form
        className="flex max-md:flex-col text-[#9F9F9F] font-light italic gap-x-[130px] max-lg:gap-x-[100px] gap-y-11 w-full max-w-[1100px]"
        onSubmit={handleSubmit}
      >
        <div className="min-w-[300px] max-lg:min-w-[250px] max-md:min-w-full w-fit text-[16px] flex flex-col gap-[44px]">
          <div id={'inputs'}  className="flex flex-col gap-8">
            {formFields.map((field) => (
              <div key={field.id} className="relative overflow-hidden w-full">
                <input
                  id={field.id}
                  type={field.type}
                  value={formState[field.id].value}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(field.id, e.target.value)
                  }
                  data-not-empty={formState[field.id].value.trim() !== '' ? 'true' : 'false'}
                ></input>
                <label htmlFor={field.id} >
                  {field.label}
                </label>
                <span className="input-underline"/>
              </div>
            ))}
          </div>
          <span className="input-underline">*reCaptcha anti-bot*</span>
        </div>
        <div className="flex flex-col w-full items-stretch gap-9">
          <textarea
            className={`w-full resize-none relative focus:border-black duration-[300ms] outline-none text-black z-10 bg-transparent text-[16px] font-normal placeholder:font-light border border-[#A2A2A2] rounded-xl h-[400px] py-8 px-8
                        ${formState.message.value !== '' ? 'border-black' : ''}`}
            id="message"
            placeholder="Řekněte mi něco o vašem projektu"
            value={formState.message.value}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange("message", e.target.value)
            }
          />
          <button
            type="submit"
            className="text-[18px] border border-black disabled:border-[#656565] font-medium w-fit max-md:w-full py-5 px-12 rounded-xl self-end text-black disabled:text-[#656565]"
            disabled={isSendButtonDisabled()}
          >
            Odeslat
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;