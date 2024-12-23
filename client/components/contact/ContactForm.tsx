"use client";
import React, { useState } from "react";
import CustomButton from "../ui/CustomButton";
import { sendInquiry } from "@/utils/api";
import { ContactData } from "@/utils/interface";
import toast from "react-hot-toast";

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<ContactData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "generalEnquiry",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, subject: e.target.value });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Contact number is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      await sendInquiry(formData);
      toast.success("Your inquiry has been sent successfully!");
    } catch (error: any) {
      toast.error(
        error.message || "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="p-4 md:py-8" onSubmit={handleSubmit}>
      <div className="grid gap-4 mb-4 grid-cols-2 w-full">
        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="firstname"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Type your First name"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>

        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="lastname"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Type your Last name"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>

        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email ID *
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Type your Email Id"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Contact Number *
          </label>
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter contact number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="col-span-2">
          <p className="block mb-2 text-sm font-medium text-gray-900">
            Select Subject *
          </p>
          <fieldset className="flex flex-col md:flex-row md:gap-8">
            {[
              "generalEnquiry",
              "supportRequest",
              "feedback",
              "jobOpportunities",
            ].map((type) => (
              <div className="flex items-center mb-4" key={type}>
                <input
                  id={`inquiry-option-${type}`}
                  type="radio"
                  name="type"
                  value={type}
                  checked={formData.subject === type}
                  onChange={handleRadioChange}
                  className="w-4 h-4 border-gray-300"
                />
                <label
                  htmlFor={`inquiry-option-${type}`}
                  className="block ms-2 text-sm text-gray-800"
                >
                  {type
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
              </div>
            ))}
          </fieldset>
        </div>

        <div className="col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <div className="col-span-2">
          <CustomButton
            type="secondary"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </CustomButton>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
