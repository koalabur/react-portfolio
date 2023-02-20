import FullHeightSidebar from "../components/sidebar/FullHeightSidebar";

export default {
  title: "Components/Sidebar",
  component: FullHeightSidebar,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const Full_Height_Sidebar = (args) => {
  return <FullHeightSidebar />;
};
