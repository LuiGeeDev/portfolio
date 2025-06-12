import { Editor } from '@monaco-editor/react';
import { useDebounceCallback } from 'usehooks-ts';

import rightSiteStyles from './RightSite.module.css';

import cssCode from './RightSite.module.css?raw';
import { cssClassNames } from '../../utils';

export default function RightSite({
  sliderPosition,
}: {
  sliderPosition: number;
}) {
  const debouncedCodeChange = useDebounceCallback(handleCodeChange, 300);

  function handleCodeChange(value: string | undefined) {
    if (!value) {
      return;
    }

    const existingStyleElement = document.getElementById('dynamic-style');
    if (existingStyleElement) {
      existingStyleElement.textContent = value;
      return;
    }

    const styleElement = document.createElement('style');
    styleElement.id = 'dynamic-style';
    styleElement.textContent = value;
    document.head.appendChild(styleElement);
  }

  return (
    <div
      className={cssClassNames(rightSiteStyles, 'right-site')}
      style={{
        clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`,
      }}
    >
      <h1>This is a right site</h1>
      <Editor
        language="css"
        height="300px"
        onChange={debouncedCodeChange}
        defaultValue={cssCode}
        options={{
          minimap: {
            enabled: false,
          },
          fontSize: 14,
        }}
      />
    </div>
  );
}
