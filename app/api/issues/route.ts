import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { issueSchema } from "@/app/validationSchemas"
import authOptions from "@/app/auth/authOptions"
import prisma from "@/prisma/client"

export async function POST(request: NextRequest) {
 const session = await getServerSession(authOptions)
 const body = await request.json()
 const validation = issueSchema.safeParse(body)

 if (!session) return NextResponse.json(
  {},
  { status: 401 }
 )

 if (!validation.success) return NextResponse.json(
  validation.error.format(),
  { status: 400 }
 )

 const newIssue = await prisma.issue.create({
  data: {
   title: body.title,
   description: body.description
  }
 })

 return NextResponse.json(newIssue, { status: 201 })
}