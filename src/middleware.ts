import { auth } from '@/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isOnLoginPage = req.nextUrl.pathname.startsWith('/login')
  const isOnApiAuth = req.nextUrl.pathname.startsWith('/api/auth')

  // API auth routes는 항상 허용
  if (isOnApiAuth) {
    return NextResponse.next()
  }

  // 로그인 페이지는 로그인 안 했을 때만 접근 가능
  if (isOnLoginPage) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/', req.url))
    }
    return NextResponse.next()
  }

  // 로그인하지 않은 경우 로그인 페이지로 리다이렉트
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
