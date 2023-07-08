import './globals.css';

import { DarkModeProvider } from './contexts/darkModeContext';
import { ListDataProvider } from './contexts/listDataContext';

export const metadata = {
    title: 'Todo Web Application',
    description: 'Todo Web Application challenge from Frontend Mentor',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className='text-primary bg-secondary'>
                <DarkModeProvider>
                    <ListDataProvider>{children}</ListDataProvider>
                </DarkModeProvider>
            </body>
        </html>
    );
}
