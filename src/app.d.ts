/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare const __BUILD_HASH__: string;
declare const __BUILD_TIMESTAMP__: string;
declare const __BUILD_VERSION__: string;

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
  namespace App {
    // interface Locals {}
    // interface PageData {}

    // cloudflare
    interface Platform {
      env: {
        //
      };
      context: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        waitUntil(promise: Promise<any>): void;
      };
      caches: CacheStorage & { default: Cache };
    }

    // interface Error {}
  }
}
