<main class="py-10">
	<h1 class="max-w-pad pb-10 text-4xl font-bold">SvelteKit + TailwindCSS + Cloudflare template</h1>

	<section class="max-w-pad bg-surface-subtle space-y-6 py-10">
		<h2 class="text-2xl font-medium">Note about Svelte inspector</h2>
		<p class="max-w-readable">
			There is a <i class="i i-[simple-icons--svelte] h-5 w-5"></i> icon button at the left bottom
			corner of the page. That's the
			<a
				class="c-link"
				href="https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md"
				>Svelte inspector</a
			>
			feature that is enabled via <code>svelte.config.js</code>. Try activating it, then hover and
			click on any element on this page, it should open the corresponding source code location in
			your editor.
		</p>
	</section>

	<section class="max-w-pad space-y-6 py-10">
		<h2 class="text-2xl font-medium">Note about CSS components</h2>
		<p class="max-w-readable">
			Use <code>button</code> and <code>link</code>
			as CSS components, not JS components. This approach decouples markup from styling and greatly enables
			flexibility for these basic building-block components. Similar approach can be observed in the
			<a class="c-link" href="https://daisyui.com/">Daisy UI library</a>.
		</p>
		<p class="max-w-readable">
			For example, inspect this inline link <a class="c-link" href="https://svelte.dev"
				>this link to the svelte.dev site</a
			>
		</p>
		<p>Or, inspect any of these buttons:</p>
		<div class="max-w-readable flex flex-wrap gap-6">
			<button class="c-btn"> I am an basic button </button>
			<a class="c-btn" href="https://svelte.dev"> I am an HTML link, but looks like a button </a>
			<button class="c-btn">
				<span>Button with icon on the right</span>
				<i class="i i-[ph--acorn] h-6 w-6"></i>
			</button>
			<button class="c-btn">
				<i class="i i-[ph--acorn] h-6 w-6"></i>
				<span>Button with icon on the left</span>
			</button>
			<button class="c-btn c-btn--outlined"> I am an outlined button </button>
			<div class="flex items-center gap-1">
				<button class="c-btn c-btn--icon">
					<span class="sr-only"> remember to add screen-reader description for accessibility </span>
					<i class="i i-[ph--acorn] h-8 w-8"></i>
				</button>
				<p class=""><i class="i i-[ph--arrow-left] h-6 w-6"></i> I am an icon link</p>
			</div>
		</div>
	</section>

	<section class="max-w-pad bg-surface-subtle space-y-6 py-10">
		<h2 class="text-2xl font-medium">Note about Automatic External Link Detection</h2>
		<p class="max-w-readable">
			Inspect the links on this page and its source code to see that there the <code>target</code>
			and <code>rel</code> attributes are added automatically. This feature is enabled via the
			<a class="c-link" href="https://svelte-put.vnphanquang.com/docs/preprocess-external-link">
				@svelte-put/preprocess-external-link
			</a>
			added in <code>svelte.config.js</code>.
		</p>
	</section>

	<footer class="max-w-pad pt-10 text-sm">
		A template by <a class="c-link" href="https://github.com/vnphanquang">Quang Phan</a>.
		<br />
		To use this, see
		<a class="c-link" href="https://github.com/vnphanquang/template-sveltekit">
			Github repository
		</a>.
	</footer>
</main>

<style>
	code {
		padding: 0.2rem 0.4rem;
		background-color: oklch(from var(--color-primary) l c h / 10%);
	}
</style>
