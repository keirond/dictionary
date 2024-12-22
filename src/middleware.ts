// import authenMiddleware from '@middleware/authentication';
import redirectMiddleware from '@middleware/redirection';
import { MiddlewareConfig, NextRequest, NextResponse } from 'next/server';

const middlewares = [redirectMiddleware] as ((
    req: NextRequest,
    _res: NextResponse
) => NextResponse)[];

export function middleware(req: NextRequest, res: NextResponse) {
    return middlewares.length
        ? middlewares.reduce((prevRes, callback, _i, _arr) => callback(req, prevRes), res)
        : NextResponse.next();
}

export const config: MiddlewareConfig = {
    matcher: ['/', '/:path']
};
