import { NextResponse } from "next/server";

export async function GET() {
    console.log('\nSERVER RUN');
    return NextResponse.json({ message: 'Hello World!' });
}