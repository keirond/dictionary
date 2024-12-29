import '@styles/globals.css';
import { Metadata } from 'next';
import { Patrick_Hand } from 'next/font/google';
import React, { Suspense } from 'react';
import Loading from './loading';

const patrickHand = Patrick_Hand({
    weight: '400',
    variable: '--font-patrick-hand'
});

export default function AppLayout({
    children
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${patrickHand.variable} dark bg-background text-color`}>
                {/* Need to test loading page */}
                <Suspense fallback={<Loading />}>{children}</Suspense>
            </body>
        </html>
    );
}

export const metadata: Metadata = {
    title: 'Dictionary',
    icons: [
        { rel: 'icon', url: '/icons/favicon.ico' },
        { rel: 'icon', url: '/icons/favicon-16x16.png', sizes: '16x16' },
        { rel: 'icon', url: '/icons/favicon-32x32.png', sizes: '32x32' },
        { rel: 'apple-touch-icon', url: '/icons/apple-touch-icon.png' },
        { rel: 'icon', url: '/icons/android-chrome-192x192.png', sizes: '192x192' },
        { rel: 'icon', url: '/icons/android-chrome-512x512.png', sizes: '512x512' }
    ],
    manifest: '/icons/site.webmanifest'
};
