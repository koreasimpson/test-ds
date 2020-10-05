/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Button } from './index';
import { ButtonProps } from '../Button/src/Button';
import { Story, Meta } from '@storybook/react/types-6-0';
// import themes from '@cloud/theme';

export default {
  title: 'CLOUD/Components/Buttons',
  component: Button,
  decorators: [withKnobs],
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args}></Button>;

export const button = () => {
  const label = text('children', 'BUTTON');
  const size = select('size', ['sm', 'md'], 'md');
  const variant = select('variant', ['default', 'negative'], 'default');
  const shape = select('status', ['fill'], 'fill');
  // const disabled = boolean('disabled', false);
  const width = text('width', '');
  return (
    <Button variant={variant} shape={shape} size={size} width={width}>
      {label}
    </Button>
  );
};

button.story = {
  name: 'Default',
};

// export const Default = Template.bind({});
// Default.args = {
//   children: 'Default',
// };

export const Negative = Template.bind({});
Negative.args = {
  variant: 'negative',
  shape: 'line',
  children: 'Negative',
};

const buttonWrapper = css`
  .description {
    color: white;
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Small</div>
        <Button size="sm">Button</Button>
      </div>
      <div>
        <div className="description">Medium</div>
        <Button size="md">Button</Button>
      </div>
    </div>
  );
};

// export const disabled = () => {
//   return (
//     <div css={buttonWrapper}>
//       <div>
//         <Button disabled>Primary</Button>
//       </div>
//       <div>
//         <Button disabled theme="secondary">
//           Secondary
//         </Button>
//       </div>
//       <div>
//         <Button disabled theme="tertiary">
//           Tertiary
//         </Button>
//       </div>
//     </div>
//   );
// };

// export const customSized = () => {
//   return (
//     <div css={buttonWrapper}>
//       <div>
//         <Button width="20rem">Custom Width</Button>
//       </div>
//       <div>
//         <Button width="100%">Full Width</Button>
//       </div>
//     </div>
//   );
// };
