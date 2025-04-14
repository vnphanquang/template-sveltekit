// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}

		interface Platform {
			env?: Record<string, never>;
			cf?: import('@cloudflare/workers-types').IncomingRequestCfProperties;
			context?: import('@cloudflare/workers-types').ExecutionContext;
			caches?: import('@cloudflare/workers-types').CacheStorage & {
				default: import('@cloudflare/workers-types').Cache;
			};
		}
	}
}

export {};
