import {connect} from "@/dbconfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const {identifier, password} = reqBody;
        console.log(reqBody);

        const user = await User.findOne({$or: [{email: identifier}, {username: identifier}]});
        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400});
        }
        console.log("user exists");

        const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400});
        }
        console.log(user);

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        };

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"});

        console.log(token);

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        });
        response.cookies.set("token", token, {
            httpOnly: true,
        });
        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
