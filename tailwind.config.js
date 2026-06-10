import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      maxWidth: {
        shell: '1280px',
      },
      colors: {
        page: '#F7F9FB',
        surface: '#F7F9FB',
        section: '#F2F4F6',
        panel: '#F2F4F6',
        paper: '#FFFFFF',
        ink: '#091426',
        deep: '#091426',
        brand: '#EB6905',
        brandText: '#C45500',
        muted: '#505F76',
        faded: '#8590A6',
        subtle: '#6B7280',
        border: '#C5C6CD',
        frame: '#E0E3E5',
        card: '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'display-hero': ['48px', { lineHeight: '48px', letterSpacing: '-1.2px', fontWeight: '800' }],
        'display-section': ['36px', { lineHeight: '40px', letterSpacing: '-0.9px', fontWeight: '800' }],
      },
      boxShadow: {
        soft: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        orange: '0 20px 25px -5px rgba(235, 105, 5, 0.2), 0 8px 10px -6px rgba(235, 105, 5, 0.2)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(70.71% 70.71% at 50% 50%, rgba(235, 105, 5, 0.08) 0%, rgba(235, 105, 5, 0) 58%)',
      },
    },
  },
  plugins: [],
};
