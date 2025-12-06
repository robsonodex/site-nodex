export default {
    darkMode: ['class'],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(222 47% 5%)",
                foreground: "hsl(210 40% 98%)",
                primary: {
                    DEFAULT: "hsl(210 100% 60%)",
                    foreground: "hsl(210 40% 98%)",
                },
                secondary: {
                    DEFAULT: "hsl(217 19% 15%)",
                    foreground: "hsl(215 20% 65%)",
                },
                muted: {
                    DEFAULT: "hsl(217 19% 15%)",
                    foreground: "hsl(215 20% 65%)",
                },
                accent: {
                    DEFAULT: "hsl(217 19% 15%)",
                    foreground: "hsl(210 40% 98%)",
                },
                border: "hsl(217 19% 15%)",
                card: {
                    DEFAULT: "hsl(222 47% 7%)",
                    foreground: "hsl(210 40% 98%)",
                },
                destructive: {
                    DEFAULT: "hsl(0 62.8% 30.6%)",
                    foreground: "hsl(210 40% 98%)",
                },
                popover: {
                    DEFAULT: "hsl(222 47% 5%)",
                    foreground: "hsl(210 40% 98%)",
                },
            },
            borderRadius: {
                lg: "0.5rem",
                md: "calc(0.5rem - 2px)",
                sm: "calc(0.5rem - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
