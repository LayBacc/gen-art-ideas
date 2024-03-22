import React from 'react';
import Script from 'next/script';
import fs from 'fs';
import path from 'path';
import { ScriptSelector } from '@/components/script-selector/script-selector';

export async function getProps() {
  const scriptsDirectory = path.join(process.cwd(), 'public', 'scripts');
  const files = fs.readdirSync(scriptsDirectory);
  const jsFiles = files.filter((file) => path.extname(file) === '.js');

  return {
    props: { scriptFiles: jsFiles },
  };
}

export default async function Page() {
  const {
    props: { scriptFiles },
  } = await getProps();

  return (
    <div>
      <ScriptSelector scriptFiles={scriptFiles} />
    </div>
  );
}
