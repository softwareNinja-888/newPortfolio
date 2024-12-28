import React, { useState } from "react";

export function Form () {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // AFTER SUBMIT REDIRECT TO RELEVANT PAGE I.E SUCCESS STORIES ETC
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-lg mx-auto bg-primary p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-poppins mb-4 text-fontColor text-center">Contact Me!</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-base font-roboto text-fontColor">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-pink-300"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-base font-roboto text-fontColor"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-pink-300"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-base font-roboto text-fontColor"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-pink-300"
            rows="5"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow focus:outline-none focus:ring border-white border"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

