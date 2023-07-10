import './globals.css';

import { Josefin_Sans } from 'next/font/google';

import { DarkModeProvider } from './contexts/darkModeContext';
import { ListDataProvider } from './contexts/listDataContext';

const josefin = Josefin_Sans({
    subsets: ['latin'],
});

export const metadata = {
    title: 'Todo Web Application',
    description: 'Todo Web Application challenge from Frontend Mentor',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={josefin.className}>
            <body className="bg-secondary text-primary">
                <DarkModeProvider>
                    <ListDataProvider>{children}</ListDataProvider>
                </DarkModeProvider>
            </body>
        </html>
    );
}
