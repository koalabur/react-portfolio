import BasicFooter from "../components/footer/BasicFooter";

export default {
  title: "Components/Footer",
  component: BasicFooter,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const Basic_Footer = (args) => {
  return <BasicFooter />;
};
