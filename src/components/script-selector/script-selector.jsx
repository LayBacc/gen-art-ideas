'use client';

import React, { useState } from 'react';
import Script from 'next/script';

export const ScriptSelector = ({ scriptFiles }) => {
  const [scriptFilename, setScriptFilename] = useState('test-sketch.js');

  const handleScriptChange = (event) => {
    setScriptFilename(event.target.value);
  };

  return (
    <div>
      <select value={scriptFilename} onChange={handleScriptChange}>
        {scriptFiles.map((file) => (
          <option key={file} value={file}>
            {file}
          </option>
        ))}
      </select>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.1/p5.js"
        strategy="afterInteractive"
      />
      {/* Keyed Script to force reload on scriptFilename change */}
      <Script
        src={`/scripts/${scriptFilename}`}
        key={scriptFilename}
        strategy="afterInteractive"
      />
    </div>
  );
};
