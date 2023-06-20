import { Inter, Major_Mono_Display } from "next/font/google";

export const inter = Inter({ subsets: ['latin'] });

export const major_mono_display = Major_Mono_Display({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-major-mono',
  
});