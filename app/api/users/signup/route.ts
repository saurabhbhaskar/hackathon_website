import { connect } from "@/dbconfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { generateAccessAndRefereshTokens } from "@/helpers/tokenUtils"; // Make sure this utility function is correctly implemented

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        console.log(reqBody);

        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        console.log(savedUser);

        const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(savedUser._id);

        const userResponse = { ...savedUser._doc };
        delete userResponse.password;

        const options = {
            httpOnly: true,
            secure: true,
            sameSite: "strict" as const,
            path: "/"
        };

        const response = NextResponse.json({
            message: "User created successfully",
            success: true,
            user: userResponse,
            accessToken,
            refreshToken
        });

        response.cookies.set("accessToken", accessToken, { ...options });
        response.cookies.set("refreshToken", refreshToken, { ...options });

        console.log('Access Token:', accessToken);
        console.log('Refresh Token:', refreshToken);

        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
