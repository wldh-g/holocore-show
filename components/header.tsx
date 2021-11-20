import React from 'react';
import {
  useColorMode, Button, Heading, Text,
} from 'theme-ui';

import $ from './header.module.scss';

const Header = function Header() {
  const [colorMode, setColorMode] = useColorMode();

  const nextColorModeText = colorMode === 'dark' ? 'Light' : 'Dark';
  const nextColorMode = colorMode === 'dark' ? 'light' : 'dark';
  const nextColorBgColor = colorMode === 'dark' ? '#eee' : '#111';
  const nextColorFgColor = colorMode === 'dark' ? '#000' : '#fff';

  return (
    <header>
      <div className={$.header}>
        <div className={$.logobox}>
          <img src="./holocore.svg" alt="HOLOCORE logo" />
          <Heading as="h1" className={$.title}>Roadshow</Heading>
          <Text className={$.version}>v1.0.0</Text>
        </div>
        <div className={$.controlbox}>
          <Button
            className={$.themebutton}
            sx={{
              bg: nextColorBgColor,
              color: nextColorFgColor,
            }}
            onClick={() => setColorMode(nextColorMode)}
          >
            {nextColorModeText}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
