import React, { useEffect, useRef, useState } from "react";
import { Icons } from "../common/Icons";
import { JobApplication, JobData } from "@/utils/interface";
import Link from "next/link";
import toast from "react-hot-toast";
import { applyJob } from "@/utils/api";

interface JobCardProps {
  props: JobData;
}

const QuickApplyForm: React.FC<JobCardProps> = ({ props }) => {
  const initialData: JobApplication = {
    firstname: "",
    lastname: "",
    email: "",
    linkedin: "",
    country: "",
    qualification: "10th",
    phone: "",
    whatsapp: "",
    cv: null,
    careerId: props._id,
  };
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState(initialData);
  const [resume, setResume] = useState<File | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone) newErrors.phone = "Contact number is required";
    if (!formData.whatsapp) newErrors.whatsapp = "Whatsapp number is required";
    if (!formData.linkedin) newErrors.linkedin = "linkedin ID is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!resume) newErrors.resume = "Resume is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("firstName", formData.firstname);
      formDataToSend.append("lastName", formData.lastname);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("linkedInId", formData.linkedin);
      formDataToSend.append("country", formData.country);
      formDataToSend.append("highestQualification", formData.qualification);
      formDataToSend.append("contactNumber", formData.phone);
      formDataToSend.append("whatsAppNumber", formData.whatsapp);
      formDataToSend.append("careerId", formData.careerId);
      formDataToSend.append("cv", resume!);
      await applyJob(formDataToSend);
      toast.success("Your inquiry has been sent successfully!");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
    setFormData(initialData);
    setResume(null);
  };

  useEffect(() => {
    setErrors(validateForm());
  }, [formData, resume]);

  return (
    <div className="p-2 md:p-8 flex flex-col gap-5">
      <form className="p-4 md:p-5" onSubmit={handleSubmit}>
        <div className="grid gap-4 mb-4 grid-cols-2">
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="firstname"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              First Name *
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Type your Firstname"
            />
            {errors.firstname && (
              <p className="text-red-500 text-xs md:text-sm">
                {errors.firstname}
              </p>
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
              name="lastname"
              id="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Type your Lastname"
            />
            {errors.lastname && (
              <p className="text-red-500 text-xs md:text-sm">
                {errors.lastname}
              </p>
            )}
          </div>
          <div className="col-span-2">
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
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Type your Email Id"
            />
            {errors.email && (
              <p className="text-red-500 text-xs md:text-sm">{errors.email}</p>
            )}
          </div>
          <div className="col-span-2">
            <label
              htmlFor="linkedin"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              LinkedIn ID
            </label>
            <input
              type="text"
              name="linkedin"
              id="linkedin"
              value={formData.linkedin}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Type your Linkedin Id"
            />
            {errors.linkedin && (
              <p className="text-red-500 text-xs md:text-sm">
                {errors.linkedin}
              </p>
            )}
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="country"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Place of Residence *
            </label>
            <input
              type="text"
              name="country"
              id="country"
              value={formData.country}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Place of Residence"
            />
            {errors.country && (
              <p className="text-red-500 text-xs md:text-sm">
                {errors.country}
              </p>
            )}
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="qualification"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Highest Qualification *
            </label>
            <select
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleInputChange}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            >
              <option value="10th">10th Grade</option>
              <option value="12th">12th Grade</option>
              <option value="UG">UG (undergraduate)</option>
              <option value="PG">PG (postgraduate)</option>
              <option value="Others">Others</option>
            </select>
            {errors.qualification && (
              <p className="text-red-500 text-xs md:text-sm">
                {errors.qualification}
              </p>
            )}
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Contact Number *
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter contact number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs md:text-sm">{errors.phone}</p>
            )}
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="whatsapp"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Whatsapp Number *
            </label>
            <input
              type="number"
              name="whatsapp"
              id="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="Enter whatsapp number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            />
            {errors.whatsapp && (
              <p className="text-red-500 text-xs md:text-sm">
                {errors.whatsapp}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col text-gray-900 gap-4 border p-4 border-gray-300">
          <h1 className="block mb-2 text-sm font-medium text-gray-900">
            Upload Resume *
          </h1>
          <p className="text-gray-500 text-sm">
            If uploading, upload either DOC, DOCX, or PDF file types (1MB max)
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href={props?.linkedin_url}
              target="_blank"
              className="inline-flex items-center bg-blue-50 gap-2 border border-gray-300 rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <Icons.linkedIn className="text-blue-400" /> Apply via Linked In
            </Link>
            <button
              onClick={() => fileInputRef.current?.click()}
              type="button"
              className="inline-flex items-center bg-blue-50 gap-2 border border-gray-300 rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <Icons.upload /> Upload from device
            </button>
            <p className="flex items-center text-xs md:text-sm text-blue-400">
              {resume?.name}
            </p>
            {errors.resume && (
              <p className="flex items-center text-red-500 text-xs md:text-sm">
                {errors.resume}
              </p>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".doc,.docx,.pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
        <button
          type="submit"
          className="flex justify-center gap-2 mt-4 text-sm bg-blue-50 hover:bg-blue-500 border border-gray-300 hover:text-white px-4 py-2 w-full rounded-lg mr-0"
          disabled={loading}
        >
          Submit Application{" "}
          {loading ? <Icons.loading /> : <Icons.rightArrow />}
        </button>
      </form>
    </div>
  );
};

export default QuickApplyForm;
