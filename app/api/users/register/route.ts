import { connect } from "@/dbconfig/dbConfig";
import Registration from "@/models/registrationModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

export async function POST(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        if (!userId) {
            return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
        }

        const reqBody = await request.json();
        const {
            email,
            privacy_policy_accepted,
            first_name,
            middle_name,
            last_name,
            college,
            mobile,
            gender,
            dob,
            skill_1,
            skill_2,
            skill_3,
            internship_duration,
            internship_mode,
            pg_course,
            specialization,
            avg_marks,
            ug_course,
            home_state,
            home_city,
            current_location,
            alternate_mobile,
            alternate_email,
        } = reqBody;
        
        const existingRegistration = await Registration.findOne({ $or: [{ email }, { mobile }] });
        if (existingRegistration) {
            return NextResponse.json({ error: "Email or Mobile already exists" }, { status: 400 });
        }

        const newRegistration = new Registration({
            userId,
            email,
            privacy_policy_accepted,
            first_name,
            middle_name,
            last_name,
            college,
            mobile,
            gender,
            dob,
            skill_1,
            skill_2,
            skill_3,
            internship_duration,
            internship_mode,
            pg_course,
            specialization,
            avg_marks,
            ug_course,
            home_state,
            home_city,
            current_location,
            alternate_mobile,
            alternate_email,
        });

        await newRegistration.save();

        await User.updateOne({ _id: userId }, { isRegister: true });

        return NextResponse.json({
            message: "Registration successful",
            success: true,
        }, { status: 201 });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
