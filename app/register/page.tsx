"use client";

import React, {
  useState,
  FormEvent,
  useEffect,
  FormEventHandler,
  ChangeEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import axios from "axios";
import { toast } from "react-toastify";
import Toastify from "@/components/Toastify";
import Swal from "sweetalert2";
import "./Register.css";
import { clashDisplay } from "@/utils/fonts/fonts";
import {
  Reg,
  RegistrationStars,
  Register as cover,
} from "@/utils/images/images";
import Success from "@/components/Success";
import { PulseLoader } from "react-spinners";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Register() {
  const [success, setSuccess] = useState(false);
  const formParams = {
    email: "",
    privacy_policy_accepted: false,
    first_name: "",
    middle_name: "",
    last_name: "",
    college: "",
    mobile: "",
    gender: "",
    dob: "",
    skill_1: "",
    skill_2: "",
    skill_3: "",
    internship_duration: "",
    internship_mode: "",
    pg_course: "",
    specialization: "",
    avg_marks: "",
    ug_course: "",
    home_state: "",
    home_city: "",
    current_location: "",
    alternate_mobile: "",
    alternate_email: "",
  };
  const [formData, setFormData] = useState(formParams);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const canSave = Object.values(formData).every(Boolean);

  useEffect(() => {
    async function animate() {
      if (typeof window !== "undefined") {
        const ScrollReveal = (await import("scrollreveal")).default;

        ScrollReveal({
          reset: true,
          distance: "80px",
          duration: 2000,
          delay: 200,
        });

        ScrollReveal().reveal("", { origin: "bottom" });
        ScrollReveal().reveal(
          ".registration__box .registration__box--details",
          {
            origin: "left",
          }
        );
        ScrollReveal().reveal(".registration__box .registration__box--form", {
          origin: "right",
        });
      }
    }
    animate();
  }, []);

  const handleDateChange = (date: Date | null) => {
    setFormData((prev) => ({
      ...prev,
      dob: date ? date.toISOString().split("T")[0] : "",
    }));
  };

  const handleInput: FormEventHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof typeof formData]) {
        newErrors[key] = "This field is required";
      }
    });

    if (!formData.privacy_policy_accepted) {
      newErrors.privacy_policy_accepted =
        "You must agree to our terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit: FormEventHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("/api/users/register", formData);
      console.log("Registration success", response.data);
      toast.success("Registration successful");
      setSuccess(true);
      setFormData(formParams);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Registration failed", err.response?.data.error || err.message);
        toast.error(err.response?.data.error || err.message);
      } else {
        console.error(err);
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toastify />
      {success && <Success show={success} />}
      <main className="main min-h-[100vh]">
        <section className="registration relative">
          <div className="flare--one"></div>
          <div className="flare--two"></div>
          <div className="faq-stars -z-2 animate-pulse absolute w-full">
            <Image src={RegistrationStars} alt="reg-stars" />
          </div>
          <div className="registration__box">
            <div className="registration__box--details">
              <div className="details">
                <Image src={cover} width={720} alt="" />
              </div>
            </div>
            <div className="registration__box--form">
              <div className="registration__form">
                <h2 className={clashDisplay.className}>Register</h2>
                <p>
                  Be a part of this movement <Image src={Reg} alt="" />
                </p>
                <h3>Create Your Account</h3>
                <form action="" method="POST" onSubmit={handleSubmit}>
                  <div className="form__box">
                    <div className="form__group">
                      <label htmlFor="">First Name</label>
                      <input
                        type="text"
                        name="first_name"
                        onChange={handleInput}
                        placeholder="Enter your first name"
                        value={formData.first_name}
                      />
                      {errors.first_name && (
                        <p className="error text-red-600">{errors.first_name}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Middle Name</label>
                      <input
                        type="text"
                        name="middle_name"
                        onChange={handleInput}
                        placeholder="Enter your middle name"
                        value={formData.middle_name}
                      />
                      {errors.middle_name && (
                        <p className="error text-red-600">{errors.middle_name}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        onChange={handleInput}
                        placeholder="Enter your last name"
                        value={formData.last_name}
                      />
                      {errors.last_name && (
                        <p className="error text-red-600">{errors.last_name}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Email</label>
                      <input
                        type="text"
                        name="email"
                        onChange={handleInput}
                        placeholder="Enter your email address"
                        value={formData.email}
                      />
                      {errors.email && <p className="error text-red-600">{errors.email}</p>}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">College</label>
                      <input
                        type="text"
                        name="college"
                        onChange={handleInput}
                        placeholder="Enter your college"
                        value={formData.college}
                      />
                      {errors.college && (
                        <p className="error text-red-600">{errors.college}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Mobile</label>
                      <input
                        type="text"
                        name="mobile"
                        onChange={handleInput}
                        placeholder="Enter your mobile number"
                        value={formData.mobile}
                      />
                      {errors.mobile && (
                        <p className="error text-red-600">{errors.mobile}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Gender</label>
                      <select
                        name="gender"
                        onChange={handleInput}
                        value={formData.gender}
                      >
                        <option value="">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.gender && (
                        <p className="error text-red-600">{errors.gender}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Date of Birth</label>
                      <DatePicker
                        selected={formData.dob ? new Date(formData.dob) : null}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select your date of birth"
                        className="form__input"
                      />
                      {errors.dob && <p className="error text-red-600">{errors.dob}</p>}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Skill 1</label>
                      <input
                        type="text"
                        name="skill_1"
                        onChange={handleInput}
                        placeholder="Enter your skill 1"
                        value={formData.skill_1}
                      />
                      {errors.skill_1 && (
                        <p className="error text-red-600">{errors.skill_1}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Skill 2</label>
                      <input
                        type="text"
                        name="skill_2"
                        onChange={handleInput}
                        placeholder="Enter your skill 2"
                        value={formData.skill_2}
                      />
                      {errors.skill_2 && (
                        <p className="error text-red-600">{errors.skill_2}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Skill 3</label>
                      <input
                        type="text"
                        name="skill_3"
                        onChange={handleInput}
                        placeholder="Enter your skill 3"
                        value={formData.skill_3}
                      />
                      {errors.skill_3 && (
                        <p className="error text-red-600">{errors.skill_3}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Internship Duration</label>
                      <input
                        type="text"
                        name="internship_duration"
                        onChange={handleInput}
                        placeholder="Enter your internship duration"
                        value={formData.internship_duration}
                      />
                      {errors.internship_duration && (
                        <p className="error text-red-600">{errors.internship_duration}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Internship Mode</label>
                      <input
                        type="text"
                        name="internship_mode"
                        onChange={handleInput}
                        placeholder="Enter your internship mode"
                        value={formData.internship_mode}
                      />
                      {errors.internship_mode && (
                        <p className="error text-red-600">{errors.internship_mode}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">PG Course</label>
                      <input
                        type="text"
                        name="pg_course"
                        onChange={handleInput}
                        placeholder="Enter your PG course"
                        value={formData.pg_course}
                      />
                      {errors.pg_course && (
                        <p className="error text-red-600">{errors.pg_course}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Specialization</label>
                      <input
                        type="text"
                        name="specialization"
                        onChange={handleInput}
                        placeholder="Enter your specialization"
                        value={formData.specialization}
                      />
                      {errors.specialization && (
                        <p className="error text-red-600">{errors.specialization}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Average Marks</label>
                      <input
                        type="text"
                        name="avg_marks"
                        onChange={handleInput}
                        placeholder="Enter your average marks"
                        value={formData.avg_marks}
                      />
                      {errors.avg_marks && (
                        <p className="error text-red-600">{errors.avg_marks}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">UG Course</label>
                      <input
                        type="text"
                        name="ug_course"
                        onChange={handleInput}
                        placeholder="Enter your UG course"
                        value={formData.ug_course}
                      />
                      {errors.ug_course && (
                        <p className="error text-red-600">{errors.ug_course}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Home State</label>
                      <input
                        type="text"
                        name="home_state"
                        onChange={handleInput}
                        placeholder="Enter your home state"
                        value={formData.home_state}
                      />
                      {errors.home_state && (
                        <p className="error text-red-600">{errors.home_state}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Home City</label>
                      <input
                        type="text"
                        name="home_city"
                        onChange={handleInput}
                        placeholder="Enter your home city"
                        value={formData.home_city}
                      />
                      {errors.home_city && (
                        <p className="error text-red-600">{errors.home_city}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Current Location</label>
                      <input
                        type="text"
                        name="current_location"
                        onChange={handleInput}
                        placeholder="Enter your current location"
                        value={formData.current_location}
                      />
                      {errors.current_location && (
                        <p className="error text-red-600">{errors.current_location}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Alternate Mobile</label>
                      <input
                        type="text"
                        name="alternate_mobile"
                        onChange={handleInput}
                        placeholder="Enter your alternate mobile number"
                        value={formData.alternate_mobile}
                      />
                      {errors.alternate_mobile && (
                        <p className="error text-red-600">{errors.alternate_mobile}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label htmlFor="">Alternate Email</label>
                      <input
                        type="text"
                        name="alternate_email"
                        onChange={handleInput}
                        placeholder="Enter your alternate email"
                        value={formData.alternate_email}
                      />
                      {errors.alternate_email && (
                        <p className="error text-red-600">{errors.alternate_email}</p>
                      )}
                    </div>
                  </div>
                  <p className="hint">
                    Please review your registration details before submitting
                  </p>
                  <div className="confirmation">
                    <input
                      type="checkbox"
                      onChange={handleInput}
                      name="privacy_policy_accepted"
                      value={"true"}
                      id=""
                      checked={formData.privacy_policy_accepted}
                    />
                    {errors.privacy_policy_accepted && (
                      <p className="error text-red-600">{errors.privacy_policy_accepted}</p>
                    )}
                    <p>
                      I agreed with the event terms and conditions and privacy
                      policy
                    </p>
                  </div>
                  <div className="grid grid-cols-1 place-items-center">
                    <button
                      type="submit"
                      className="cta-btn"
                      disabled={loading}
                    >
                      {!loading ? (
                        "Register Now"
                      ) : (
                        <>
                          Registering{" "}
                          <PulseLoader size={"0.5rem"} color="#fff" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
