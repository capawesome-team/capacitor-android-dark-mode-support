export interface AndroidDarkModeSupportPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
