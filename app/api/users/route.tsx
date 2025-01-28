import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest)
{
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: NextRequest)
{
    const body = await request.json();

    if(!body.name)
      return NextResponse.json({error: 'Name is Required'} , {status: 400});

   const user = await prisma.user.create({
        data:{
            name: body.name,
            email: body.email
        }
    });

    return NextResponse.json(user , {status: 201});
}