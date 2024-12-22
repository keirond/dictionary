import { NextRequest, NextResponse } from 'next/server';

const redirectMapping = new Map<string, string>([['/board', '/board/word-retention']]);

export default function middleware(req: NextRequest, _res: NextResponse): NextResponse {
    const path = req.nextUrl.pathname;
    if (redirectMapping.has(path)) {
        return NextResponse.redirect(new URL(redirectMapping.get(path) ?? '/', req.url));
    }
    return NextResponse.next();
}
