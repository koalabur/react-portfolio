import "../styles/scss/globals.scss";

export const parameters = {
  backgrounds: {
    default: "dark",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "standard",
    values: [
      {
        name: "standard",
        value: "#1c1240",
      },
    ],
  },
};
