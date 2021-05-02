import { registerPlugin } from '@capacitor/core';

import type { AndroidDarkModeSupportPlugin } from './definitions';

const AndroidDarkModeSupport = registerPlugin<AndroidDarkModeSupportPlugin>('AndroidDarkModeSupport', {
  web: () => import('./web').then(m => new m.AndroidDarkModeSupportWeb()),
});

export * from './definitions';
export { AndroidDarkModeSupport };
