/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { Typo } from "./src/Typo";
import { withKnobs, text, select, number } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import { displayType } from "./src/types";

export default {
  title: "CLOUD/Components/Typography",
  component: Typo,
  decorators: [withKnobs],
} as Meta;

const Template = (args) => <Typo {...args} />;

export const Custom = () => {
  const variant = select(
    "variant",
    { HEADER: "HEADER", TITLE: "TITLE", SUBTITLE: "SUBTITLE" },
    "TITLE"
  );
  const children = text("children", "텍스트");
  const color = text("color", "#fff");
  const level = number("level", 3);
  const display = select(
    "display",
    {
      block: "block",
      inlineBlock: "inline-block",
      inline: "inline",
    },
    "block"
  );
  const textAlign = select(
    "display",
    {
      left: "left",
      center: "center",
      right: "right",
    },
    "left"
  );

  return (
    <Typo
      variant={variant}
      color={color}
      level={level}
      display={display}
      textAlign={textAlign}
    >
      {children}
    </Typo>
  );
};

export const TypoHeader = () => {
  return (
    <div>
      <Typo variant={"HEADER"} level={1} color={"#fff"}>
        헤더 텍스트 입니다.
      </Typo>
      <Typo variant={"HEADER"} level={2} color={"#fff"}>
        헤더 텍스트 입니다.
      </Typo>
      <Typo variant={"HEADER"} level={3} color={"#fff"}>
        헤더 텍스트 입니다.
      </Typo>
      <Typo variant={"HEADER"} level={4} color={"#fff"}>
        헤더 텍스트 입니다.
      </Typo>
      <Typo variant={"HEADER"} level={5} color={"#fff"}>
        헤더 텍스트 입니다.
      </Typo>
    </div>
  );
};
TypoHeader.storyName = "HEADER";

export const TypoTitle = () => (
  <div>
    <Typo variant={"TITLE"} level={1} color={"#fff"}>
      타이틀 텍스트 입니다.
    </Typo>
    <Typo variant={"TITLE"} level={2} color={"#fff"}>
      타이틀 텍스트 입니다.
    </Typo>
    <Typo variant={"TITLE"} level={3} color={"#fff"}>
      타이틀 텍스트 입니다.
    </Typo>
    <Typo variant={"TITLE"} level={4} color={"#fff"}>
      타이틀 텍스트 입니다.
    </Typo>
    <Typo variant={"TITLE"} level={5} color={"#fff"}>
      타이틀 텍스트 입니다.
    </Typo>
  </div>
);
TypoTitle.storyName = "TITLE";

export const TypoSubtitle = () => (
  <div>
    <Typo variant={"SUBTITLE"} level={1} color={"#fff"}>
      SUB_TITLE 텍스트 입니다.
    </Typo>
    <Typo variant={"SUBTITLE"} level={2} color={"#fff"}>
      SUB_TITLE 텍스트 입니다.
    </Typo>
    <Typo variant={"SUBTITLE"} level={3} color={"#fff"}>
      SUB_TITLE 텍스트 입니다.
    </Typo>
    <Typo variant={"SUBTITLE"} level={4} color={"#fff"}>
      SUB_TITLE 텍스트 입니다.
    </Typo>
    <Typo variant={"SUBTITLE"} level={5} color={"#fff"}>
      SUB_TITLE 텍스트 입니다.
    </Typo>
  </div>
);
TypoSubtitle.storyName = "SUB_TITLE";

export const TypoBody = () => (
  <div>
    <Typo variant={"BODY"} level={1} color={"#fff"}>
      BODY 텍스트 입니다.
    </Typo>
    <Typo variant={"BODY"} level={2} color={"#fff"}>
      BODY 텍스트 입니다.
    </Typo>
    <Typo variant={"BODY"} level={3} color={"#fff"}>
      BODY 텍스트 입니다.
    </Typo>
    <Typo variant={"BODY"} level={4} color={"#fff"}>
      BODY 텍스트 입니다.
    </Typo>
    <Typo variant={"BODY"} level={5} color={"#fff"}>
      BODY 텍스트 입니다.
    </Typo>
  </div>
);
TypoBody.storyName = "BODY";
