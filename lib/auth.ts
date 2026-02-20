import { cookies } from 'next/headers'

export interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
  isAdmin: number
}

/**
 * Returns the admin user object built from environment variables.
 */
export function getAdminUser(): User | null {
  const email = process.env.ADMIN_EMAIL
  if (!email) return null
  return {
    id: 'admin',
    email,
    firstName: process.env.ADMIN_FIRST_NAME,
    lastName: process.env.ADMIN_LAST_NAME,
    isAdmin: 1
  }
}

/**
 * Validates supplied credentials against values stored in environment variables.
 * Returns the admin User on success, null on failure.
 */
export function verifyAdminCredentials(email: string, password: string): User | null {
  const adminEmail = process.env.ADMIN_EMAIL
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminEmail || !adminPassword) return null
  if (email === adminEmail && password === adminPassword) {
    return getAdminUser()
  }
  return null
}

export async function setAuthCookie(user: User) {
  const cookieStore = await cookies()
  cookieStore.set('user', JSON.stringify({
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    isAdmin: user.isAdmin
  }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7 // 7 days
  })
}

export async function clearAuthCookie() {
  const cookieStore = await cookies()
  cookieStore.delete('user')
}

export async function getAuthUser(): Promise<User | null> {
  try {
    const cookieStore = await cookies()
    const userCookie = cookieStore.get('user')
    if (!userCookie) return null
    return JSON.parse(userCookie.value)
  } catch {
    return null
  }
}

export function isAdmin(user: User | null): boolean {
  return user !== null && user.isAdmin === 1
}
