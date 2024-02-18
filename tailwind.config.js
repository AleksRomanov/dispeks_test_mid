/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                gray: 'rgba(39,38,40,70)',
            },
        },
        screens: {
            'md': '768px',
            'dt': '1440px',
            'hd': '1920px',
        },
    },
    plugins: [],
};
