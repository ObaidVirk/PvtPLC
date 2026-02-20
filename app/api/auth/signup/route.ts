import { NextResponse } from 'next/server'

// User registration is disabled — access is restricted to the admin account
// configured in .env.local.
export async function POST() {
  return NextResponse.json(
    { error: 'Registration is not available' },
    { status: 403 }
  )
}
