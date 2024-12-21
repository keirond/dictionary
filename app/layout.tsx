import { Metadata } from 'next';
import React from 'react';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>{children}</body>
        </html>
    );
}

export const metadata: Metadata = {
    icons: {
        icon: ['icons/favicon.ico?v=4'],
        apple: ['icons/apple-touch-icon.png?v=4'],
        shortcut: ['icons/apple-touch-icon.png']
    },
    manifest: 'icons/site.webmanifest'
};
