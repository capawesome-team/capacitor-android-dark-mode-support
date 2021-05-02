import { WebPlugin } from '@capacitor/core';

import type { AndroidDarkModeSupportPlugin } from './definitions';

export class AndroidDarkModeSupportWeb extends WebPlugin implements AndroidDarkModeSupportPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
