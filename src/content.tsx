// Keep import './icon.png';
// It allows to include icon.png to skill.zip without any other scripts.
import {Root as DesignSystemRoot} from '@matterway/assistant-design-system';
import {BackgroundContent} from '@matterway/background-react/lib/cjs/content/background-content';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import manifest from './manifest.json';
import * as contentComponents from './components';
import './icon.png';
import {createSkillMountRoot} from '@matterway/sdk';
import {initI18n} from 'locales';

const reactMountRoot = createSkillMountRoot({
  identifier: manifest.identifier,
  onDestroy: ReactDOM.unmountComponentAtNode,
});

const root = createRoot(reactMountRoot);
root.render(
  <DesignSystemRoot styleSheetTarget={reactMountRoot}>
    <BackgroundContent
      contentComponents={contentComponents}
      onInitialLanguageCodeReceived={(languageCode) => {
        initI18n(languageCode);
      }}
    />
  </DesignSystemRoot>,
);
