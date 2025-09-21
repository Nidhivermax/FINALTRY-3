import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { pool } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // ✅ Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // ✅ Check if user exists
    const [rows]: any = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

    if (rows.length === 0) {
      // User not found → ask to sign up
      return NextResponse.json(
        { message: "User not found, please sign up" },
        { status: 404 }
      );
    }

    const user = rows[0];

    // ✅ Compare hashed password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // ✅ Login successful
    return NextResponse.json(
      {
        message: "Login successful",
        user: {
          id: user.user_id,
          name: user.full_name,
          email: user.email,
        },
      },
      { status: 200 }
    );

  } catch (err: any) {
    console.error("Login API error:", err.message);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}