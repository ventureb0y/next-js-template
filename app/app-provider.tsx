// Файл для клиентских провайдеров

'use client'

import { ThemeProvider } from "next-themes"

export default function AppProvider ({children}: {children: React.ReactNode}) {
    return (
        <ThemeProvider 
        attribute="class"
        defaultTheme="light">
            {children}
        </ThemeProvider>
    )
}