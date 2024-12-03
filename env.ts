declare global {
  interface Window {
    env: any;
  }
}

type EnvType = {
  BASE_URL: string;
};

export const env: EnvType = { ...process.env, ...window.env };
