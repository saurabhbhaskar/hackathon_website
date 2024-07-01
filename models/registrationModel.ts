import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    privacy_policy_accepted: {
        type: Boolean,
        required: [true, "You must accept the privacy policy"],
    },
    first_name: {
        type: String,
        required: [true, "Please provide your first name"],
    },
    middle_name: {
        type: String,
    },
    last_name: {
        type: String,
        required: [true, "Please provide your last name"],
    },
    college: {
        type: String,
        required: [true, "Please provide your college name"],
    },
    mobile: {
        type: String,
        required: [true, "Please provide your mobile number"],
        unique: true,
    },
    gender: {
        type: String,
        required: [true, "Please provide your gender"],
    },
    dob: {
        type: String,
        required: [true, "Please provide your date of birth"],
    },
    skill_1: {
        type: String,
        required: [true, "Please provide at least one skill"],
    },
    skill_2: String,
    skill_3: String,
    internship_duration: {
        type: String,
        required: [true, "Please provide your internship duration"],
    },
    internship_mode: {
        type: String,
        required: [true, "Please provide your internship mode"],
    },
    pg_course: {
        type: String,
        required: [true, "Please provide your PG course"],
    },
    specialization: {
        type: String,
        required: [true, "Please provide your specialization"],
    },
    avg_marks: {
        type: String,
        required: [true, "Please provide your average marks"],
    },
    ug_course: {
        type: String,
        required: [true, "Please provide your UG course"],
    },
    home_state: {
        type: String,
        required: [true, "Please provide your home state"],
    },
    home_city: {
        type: String,
        required: [true, "Please provide your home city"],
    },
    current_location: {
        type: String,
        required: [true, "Please provide your current location"],
    },
    alternate_mobile: String,
    alternate_email: String,
    userId: {
        type: String,
        required: [true, "User ID is required"],
    }
});

const Registration = mongoose.models.Registration || mongoose.model("Registration", registrationSchema);

export default Registration;
