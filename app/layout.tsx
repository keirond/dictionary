import React from 'react';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <link rel="icon" href="public/favicon.con" />
            <body>{children}</body>
        </html>
    );
}
