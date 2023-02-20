import BigKoalaIntro from "../components/intro/BigKoalaIntro";

export default {
  title: "Components/Intro",
  component: BigKoalaIntro,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const Big_Koala_Intro = (args) => {
  return <BigKoalaIntro {...args} introContent={args} />;
};

Big_Koala_Intro.args = {
  data: {
    introBigKoala: {
      image: {
        url: "https://images.ctfassets.net/qa0alm1ar00g/5YQmiHotEZpyPX7TbGQTt3/5cea945033dcdb9073a219d6ddf8bab3/koala-hero.png",
        title: "Koala Hero",
      },
      title: "i'm just a web guy doing web guy things",
      icon: {
        url: "https://images.ctfassets.net/qa0alm1ar00g/7pHFFv4a63O1xFLkF9Ohoq/0168f88ee12dfa8cfe037420c77826c0/mouse-icon.svg",
        title: "SVG Mouse Icon",
      },
    },
  },
};
