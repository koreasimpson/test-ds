import * as React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import * as Icons from "./index";
import themes from "closet-theme";
import styled from "@emotion/styled";
const { SvgIcon, ...namedIcons } = Icons;

export default {
  title: "CLOUD/Components/Icons",
  component: SvgIcon,
  decorators: [withKnobs],
};

export const Default = () => {
  const size = text("size", "24px");
  const colors = select("colors", themes.colors, themes.colors.GRAY_50);
  return <namedIcons.CameraIcon color={colors} size={size} />;
};

//FIXME 스토리 구성에 필요한 스타일들 어떻게 할지 고민하기
const ContentBox = styled.div({
  display: "flex",
});

const IconWrapper = styled.div({
  padding: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const IconName = styled.p({
  paddingTop: 5,
  color: "white",
  margin: 0,
});

export const icons = () => {
  return (
    <ContentBox>
      {Object.keys(namedIcons).map((key) => {
        // @ts-ignore FIXME ts-ignore
        const Icon = namedIcons[key];
        return (
          <IconWrapper key={key}>
            <Icon color={themes.colors.GRAY_50} />
            <IconName>{Icon.displayName}</IconName>
          </IconWrapper>
        );
      })}
    </ContentBox>
  );
};
