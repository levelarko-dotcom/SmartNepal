import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, password, phone } = await req.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "सबै अनिवार्य फाँटहरू (Name, Email, Password) भरुनुहोस्।" },
        { status: 400 },
      );
    }

    // १. पहिले नै यो Email दर्ता छ कि छैन चेक गर्ने
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "यो Email पहिले नै दर्ता भइसकेको छ।" },
        { status: 400 },
      );
    }

    // २. Password Hash गर्ने (सुरक्षाका लागि)
    const hashedPassword = await bcrypt.hash(password, 10);

    // ३. Database मा User सिर्जना गर्ने
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone: phone || null,
        role: "CITIZEN",
      },
    });

    return NextResponse.json(
      { message: "खाता सफलतापूर्वक सिर्जना भयो!", userId: newUser.id },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json(
      { error: "खाता बनाउन सकिएन। पुनः प्रयास गर्नुहोस्।" },
      { status: 500 },
    );
  }
}
