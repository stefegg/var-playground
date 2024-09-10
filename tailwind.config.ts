import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        metal: "#151515",
        cloud: "#FFFFFF",
        red: "#EE4141",
        yellow: "#F5BF24",
        pink: "#FF6C81",
        teal: "#67d3bE",
        blue: "#67bbef",
        purple: "#8a65AA",
        slate: "#272727",
        lightNavy: "#3f5577",
        medNavy: "#33435B",
        navy: "#1f2e47",
      },
    },
  },
  plugins: [],
};
export default config;
