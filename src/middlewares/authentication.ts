import { AUTH_PATH } from '@common/constants';

import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest, _res: NextResponse): NextResponse {
    if (req.nextUrl.pathname == AUTH_PATH) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/login', req.url));
}
