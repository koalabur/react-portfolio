import MainNav from "../components/nav/MainNav";

export default {
  title: "Components/Nav",
  component: MainNav,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const Main_Nav = (args) => {
  return <MainNav {...args} navLinks={args} />;
};

Main_Nav.args = {
  data: {
    nav: {
      link: ["about", "portfolio", "example"],
    },
  },
};
