import styled from 'styled-components';
import { motion } from 'framer-motion';
import { readableColor } from 'polished';

export const ListItemRoot = styled(motion.div)`
  overflow: hidden;
`;
ListItemRoot.defaultProps = {
  variants: {
    open: {
      height: '',
      transition: {
        duration: 1,
      },
    },
    closed: {
      height: 0,
      transition: {
        delay: 3,
      },
    },
  },
};

const isLightnessColor = (color: any) =>
  readableColor(color) === '#000' ? '#000' : '#fff';
export const ListItem = styled(motion.div)<{ bg?: string }>`
  --textColor: ${({ bg }) => isLightnessColor(bg)};
  padding: 8px 11px;
  background: ${({ bg }) => bg || '#c4c4c4'};
  display: flex;
  position: relative;
  border-radius: 9px;
  height: 48px;
  overflow: hidden;
  margin-bottom: 8px;
`;
ListItem.defaultProps = {
  variants: {
    open: {
      transform: 'translateY(0)',
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
    closed: {
      transform: 'translateY(-100%)',
      opacity: 0,
      transition: {
        delay: 2.5,
        duration: 0.5,
      },
    },
  },
};

const TextBox = styled(motion.input)`
  z-index: 200;
  margin-right: 8px;
  border: none;
  background: transparent;
  &::placeholder {
    color: currentColor;
    opacity: 0.2;
  }
`;
TextBox.defaultProps = {
  variants: {
    open: {
      color: 'var(--textColor)',
      transition: {
        delay: 0.5,
      },
    },
    closed: {
      color: '#ffffff',
      transition: {
        delay: 0.5,
      },
    },
  },
};
export { TextBox };

export const ButtonBox = styled.div`
  position: relative;
`;
export const UndoLabel = styled(motion.span)`
  font-size: 12px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 200;
  color: #fff;
  opacity: 0;
`;
UndoLabel.defaultProps = {
  variants: {
    open: {
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
    closed: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  },
};

export const CompletedBtn = styled.input`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 999px;
  margin: 0;
  z-index: 201;
  position: relative;
  overflow: hidden;
  display: block;
  opacity: 0;
  cursor: pointer;
`;

const CompletedMask = styled(motion.div)<{ checked: boolean }>`
  --position-x: calc(100% - 15px - 11px);
  --position-y: calc(50%);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  will-change: background;
  transition: background 0.5s;
`;
CompletedMask.defaultProps = {
  variants: {
    open: {
      clipPath: 'circle(15px at var(--position-x) var(--position-y))',
      background: '#ffffff',
      transition: {
        delay: 0.5,
      },
    },
    closed: {
      clipPath: 'circle(130% at var(--position-x) var(--position-y))',
      background: '#000000',
      transition: {
        delay: 0.5,
      },
    },
  },
};
export { CompletedMask };

export const DragControler = styled.div`
  color: #fff;
  z-index: 200;
  margin-right: 8px;
  cursor: grab;
`;
