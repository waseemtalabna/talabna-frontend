import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/en', request.url))
    }

}

// export const config = {
//     matcher: '/',
// }