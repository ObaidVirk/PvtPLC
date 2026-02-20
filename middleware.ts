import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userCookie = request.cookies.get('user')
  
  // If accessing dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!userCookie) {
      // Not authenticated, redirect to login
      return NextResponse.redirect(new URL('/login', request.url))
    }
    
    try {
      const user = JSON.parse(userCookie.value)
      
      // Check if user is admin
      if (user.isAdmin !== 1) {
        // Not admin, redirect to home
        return NextResponse.redirect(new URL('/', request.url))
      }
    } catch (error) {
      // Invalid cookie, redirect to login
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*']
}
