import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import axios from 'axios';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = ['/login', '/signup', '/'].includes(path);

  const token = request.cookies.get('token')?.value || '';

  if (token) {
    try {
      const res = await axios.get('http://localhost:3000/api/users/user', {
        headers: {
          Cookie: `token=${token}`,
        },
      });

      const user = res.data.data;

      if (!user) {
        const response = NextResponse.redirect(new URL('/login', request.nextUrl));
        response.cookies.delete('token');
        return response;
      }

      if (isPublicPath) {
        return NextResponse.redirect(new URL('/user', request.nextUrl));
      }

      if (path === '/register' && user.isRegister) {
        return NextResponse.redirect(new URL('/user', request.nextUrl));
      }
    } catch (error) {
      const response = NextResponse.redirect(new URL('/login', request.nextUrl));
      response.cookies.delete('token');
      return response;
    }
  } else {
    if (!isPublicPath) {
      return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/user',
    '/login',
    '/signup',
    '/contact',
    '/register',
  ],
};
