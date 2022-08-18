import badge from '../../html/components/badge.hbs';

export default {
  title: 'Components/Badge',
  parameters: {
    colorPicker: {
      primaryPalette: 'backgroundColor'
    }
  },
  argTypes: {
    badgeContent: {
      name: 'Badge Current Content',
      control: 'number',
    },
    max: {
      name: 'Badge Max Content',
      control: 'number',
    },
    variant: {
      name: 'Badge Variant',
      control: 'text'
    },
    backgroundColor: {
      name: 'Background Color (HEX, RGB or Color name)',
      control: 'color'
    },
    icon: {
      name: 'Icon Name',
      control: 'text'
    },
    position: {
      name: 'BadgePosition',
      options: ['default', 'top-left', 'bottom-right', 'bottom-left'],
      control: { type: 'select' },
    },
  }
};

const Badge = story.build(
  badge,
  {
    badgeContent: 23,
  },
  'centered'
);

const DotBadge = story.build(
  badge,
  {
    ...Badge.args,
    variant: 'dot',
  },
  'centered'

);


export {
  Badge,
  DotBadge
}