declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"bassic/git/bahas-github-dan-gitlab.md": {
  id: "bassic/git/bahas-github-dan-gitlab.md",
  slug: "bahas-github-dan-gitlab",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"bassic/jaringan/apa-itu-server-dan-jenis-jenisnya.md": {
  id: "bassic/jaringan/apa-itu-server-dan-jenis-jenisnya.md",
  slug: "bassic/jaringan/apa-itu-server-dan-jenis-jenisnya",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"bassic/jaringan/apa-sih-ip-address-itu-dan-jenis-serta-fungsinya.md": {
  id: "bassic/jaringan/apa-sih-ip-address-itu-dan-jenis-serta-fungsinya.md",
  slug: "bassic/jaringan/apa-sih-ip-address-itu-dan-jenis-serta-fungsinya",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"bassic/jaringan/penjelasan-singkat-mengenai-shared-hosting-dedicated-hosting--cloud-hosting-dan-vps.md": {
  id: "bassic/jaringan/penjelasan-singkat-mengenai-shared-hosting-dedicated-hosting--cloud-hosting-dan-vps.md",
  slug: "bassic/jaringan/penjelasan-singkat-mengenai-shared-hosting-dedicated-hosting--cloud-hosting-dan-vps",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"bassic/keamanan/bahas-ssh.md": {
  id: "bassic/keamanan/bahas-ssh.md",
  slug: "bahas-ssh",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"bassic/keamanan/menggunakan-ssh-di-termux.md": {
  id: "bassic/keamanan/menggunakan-ssh-di-termux.md",
  slug: "menggunakan-ssh-di-termux",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"bassic/keamanan/penjelasan-mengenai-hacker-dan-jenisnya.md": {
  id: "bassic/keamanan/penjelasan-mengenai-hacker-dan-jenisnya.md",
  slug: "bassic/keamanan/penjelasan-mengenai-hacker-dan-jenisnya",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"bassic/penjelasan/apa-itu-back-end-dan-tugas-seorang-back-end.md": {
  id: "bassic/penjelasan/apa-itu-back-end-dan-tugas-seorang-back-end.md",
  slug: "bassic/penjelasan/apa-itu-back-end-dan-tugas-seorang-back-end",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"cara-coding-di-hp.md": {
  id: "cara-coding-di-hp.md",
  slug: "cara-coding-di-hp",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"front-end/HTML/apa-sih-html-dan-css-itu-dan-apa-keebihan-dari-css-beserta-contohnya.md": {
  id: "front-end/HTML/apa-sih-html-dan-css-itu-dan-apa-keebihan-dari-css-beserta-contohnya.md",
  slug: "front-end/html/apa-sih-html-dan-css-itu-dan-apa-keebihan-dari-css-beserta-contohnya",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"front-end/internet/bagaimana-internet-bekerja.md": {
  id: "front-end/internet/bagaimana-internet-bekerja.md",
  slug: "bagaimana-internet-bekerja",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"front-end/penjelasan/apa-itu-front-end-developer--dan-apa-perannya-dalam-membuat-sebuah-website.md": {
  id: "front-end/penjelasan/apa-itu-front-end-developer--dan-apa-perannya-dalam-membuat-sebuah-website.md",
  slug: "front-end/penjelasan/apa-itu-front-end-developer--dan-apa-perannya-dalam-membuat-sebuah-website",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"front-end/penjelasan/apa-tantangan-dan-skill-yang-harus-dimiliki-oleh-web-desainer.md": {
  id: "front-end/penjelasan/apa-tantangan-dan-skill-yang-harus-dimiliki-oleh-web-desainer.md",
  slug: "front-end/penjelasan/apa-tantangan-dan-skill-yang-harus-dimiliki-oleh-web-desainer",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"front-end/penjelasan/web-desainer-vs-web-developer-penjelasan-dan-perbedaan.md": {
  id: "front-end/penjelasan/web-desainer-vs-web-developer-penjelasan-dan-perbedaan.md",
  slug: "front-end/penjelasan/web-desainer-vs-web-developer-penjelasan-dan-perbedaan",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"new/penjelasan-webdev.md": {
  id: "new/penjelasan-webdev.md",
  slug: "apa-itu-web-dev-dan-apa-saja-role-pekerjaan-web-dev",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"termux/linux/belajar-linux-via-android.md": {
  id: "termux/linux/belajar-linux-via-android.md",
  slug: "termux/linux/belajar-linux-via-android",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"termux/linux/comandsyntax-termux-dan-linux-ubuntu.md": {
  id: "termux/linux/comandsyntax-termux-dan-linux-ubuntu.md",
  slug: "termux/linux/comandsyntax-termux-dan-linux-ubuntu",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"termux/manipulasi-text-menggunakan-shell.md": {
  id: "termux/manipulasi-text-menggunakan-shell.md",
  slug: "manipulasi-text-menggunakan-shell",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"termux/termux-aplikasinya-programming.md": {
  id: "termux/termux-aplikasinya-programming.md",
  slug: "termux/termux-aplikasinya-programming",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tutorial/cara-mengkonvert-zip-menggunakan-hp.md": {
  id: "tutorial/cara-mengkonvert-zip-menggunakan-hp.md",
  slug: "tutorial/cara-mengkonvert-zip-menggunakan-hp",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tutorial/membuat-header-blogweb-secara-mudah-dengan-html-dan-css.md": {
  id: "tutorial/membuat-header-blogweb-secara-mudah-dengan-html-dan-css.md",
  slug: "tutorial/membuat-header-blogweb-secara-mudah-dengan-html-dan-css",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},
"note": {
"bash.md": {
  id: "bash.md",
  slug: "catatan-bash",
  body: string,
  collection: "note",
  data: any
},
"bassic-web-programming-old.md": {
  id: "bassic-web-programming-old.md",
  slug: "bassic-web-proggraming",
  body: string,
  collection: "note",
  data: any
},
"belajar-bareng-yt-old.md": {
  id: "belajar-bareng-yt-old.md",
  slug: "belajar-bareng-yt",
  body: string,
  collection: "note",
  data: any
},
"belajar-front-end.md": {
  id: "belajar-front-end.md",
  slug: "belajar-front-end-dan-sedikit-backend",
  body: string,
  collection: "note",
  data: any
},
"editor.md": {
  id: "editor.md",
  slug: "editor-js",
  body: string,
  collection: "note",
  data: any
},
"firebase/rules.md": {
  id: "firebase/rules.md",
  slug: "rules-firebase",
  body: string,
  collection: "note",
  data: any
},
"html-css/align.md": {
  id: "html-css/align.md",
  slug: "html-css-seputar-align",
  body: string,
  collection: "note",
  data: any
},
"html-css/option.md": {
  id: "html-css/option.md",
  slug: "option",
  body: string,
  collection: "note",
  data: any
},
"js/add-script.md": {
  id: "js/add-script.md",
  slug: "btn-add-script",
  body: string,
  collection: "note",
  data: any
},
"js/btn-section.md": {
  id: "js/btn-section.md",
  slug: "btn-section",
  body: string,
  collection: "note",
  data: any
},
"js/get-var-destruckturing-from-func.md": {
  id: "js/get-var-destruckturing-from-func.md",
  slug: "get-var-from-func-with-destructuring",
  body: string,
  collection: "note",
  data: any
},
"js/image.md": {
  id: "js/image.md",
  slug: "minimize-image-on-folder-and-subfolder-with-convert",
  body: string,
  collection: "note",
  data: any
},
"js/js.md": {
  id: "js/js.md",
  slug: "catatan-java-script",
  body: string,
  collection: "note",
  data: any
},
"js/link.md": {
  id: "js/link.md",
  slug: "get-link",
  body: string,
  collection: "note",
  data: any
},
"js/load-more.md": {
  id: "js/load-more.md",
  slug: "load-more",
  body: string,
  collection: "note",
  data: any
},
"js/memory.md": {
  id: "js/memory.md",
  slug: "js-memory",
  body: string,
  collection: "note",
  data: any
},
"js/read-get-bytag-write-json.md": {
  id: "js/read-get-bytag-write-json.md",
  slug: "read-get-by-tag-change-and-write-to-json-file",
  body: string,
  collection: "note",
  data: any
},
"js/search.md": {
  id: "js/search.md",
  slug: "search",
  body: string,
  collection: "note",
  data: any
},
"js/show-all-file.md": {
  id: "js/show-all-file.md",
  slug: "menampilkan-name-file",
  body: string,
  collection: "note",
  data: any
},
"js/var.md": {
  id: "js/var.md",
  slug: "daftar-variable-js",
  body: string,
  collection: "note",
  data: any
},
"js/watch-keyboard.md": {
  id: "js/watch-keyboard.md",
  slug: "custom-slug",
  body: string,
  collection: "note",
  data: any
},
"next/1.start.md": {
  id: "next/1.start.md",
  slug: "how-start-project-next-js",
  body: string,
  collection: "note",
  data: any
},
"next/2.firebase.md": {
  id: "next/2.firebase.md",
  slug: "start-project-with-firebase",
  body: string,
  collection: "note",
  data: any
},
"next/config.md": {
  id: "next/config.md",
  slug: "confiq-nextjs",
  body: string,
  collection: "note",
  data: any
},
"next/form.md": {
  id: "next/form.md",
  slug: "form-nextjs",
  body: string,
  collection: "note",
  data: any
},
"next/mdx.md": {
  id: "next/mdx.md",
  slug: "mdx",
  body: string,
  collection: "note",
  data: any
},
"node/mysql.md": {
  id: "node/mysql.md",
  slug: "node/mysql",
  body: string,
  collection: "note",
  data: any
},
"project/link-inspirasi-projek-mendatang.md": {
  id: "project/link-inspirasi-projek-mendatang.md",
  slug: "link-inspirasi-projek-mendatang",
  body: string,
  collection: "note",
  data: any
},
"react/state.md": {
  id: "react/state.md",
  slug: "state-react",
  body: string,
  collection: "note",
  data: any
},
"roadmap-front-end-old.md": {
  id: "roadmap-front-end-old.md",
  slug: "roadmap-front-end-old",
  body: string,
  collection: "note",
  data: any
},
"tailwind/nav-mobile.md": {
  id: "tailwind/nav-mobile.md",
  slug: "nav-mobile-bottom-icon",
  body: string,
  collection: "note",
  data: any
},
"typescrip/bassic.md": {
  id: "typescrip/bassic.md",
  slug: "typescript-bassic",
  body: string,
  collection: "note",
  data: any
},
"upt/figma.md": {
  id: "upt/figma.md",
  slug: "figma-hal-yang-harus-dilakukan",
  body: string,
  collection: "note",
  data: any
},
"upt/hugo.md": {
  id: "upt/hugo.md",
  slug: "pembuatan-tema-hugo-dan-catatan-lainnya",
  body: string,
  collection: "note",
  data: any
},
"upt/termux.md": {
  id: "upt/termux.md",
  slug: "coding-di-termux-lebih-mudah",
  body: string,
  collection: "note",
  data: any
},
"upt/web-checklist.md": {
  id: "upt/web-checklist.md",
  slug: "upt/web-checklist",
  body: string,
  collection: "note",
  data: any
},
"vim.md": {
  id: "vim.md",
  slug: "persiapan-vim-plug",
  body: string,
  collection: "note",
  data: any
},
"vscode.md": {
  id: "vscode.md",
  slug: "configurasi-vs-code-easy-like-vim",
  body: string,
  collection: "note",
  data: any
},
},
"notes": {
"android/README.md": {
  id: "android/README.md",
  slug: "android/readme",
  body: string,
  collection: "notes",
  data: any
},
"backend/README.md": {
  id: "backend/README.md",
  slug: "backend/readme",
  body: string,
  collection: "notes",
  data: any
},
"cli/README.md": {
  id: "cli/README.md",
  slug: "cli/readme",
  body: string,
  collection: "notes",
  data: any
},
"cli/bash/README.md": {
  id: "cli/bash/README.md",
  slug: "cli/bash/readme",
  body: string,
  collection: "notes",
  data: any
},
"front-end/README.md": {
  id: "front-end/README.md",
  slug: "front-end/readme",
  body: string,
  collection: "notes",
  data: any
},
"front-end/astro.md": {
  id: "front-end/astro.md",
  slug: "front-end/astro",
  body: string,
  collection: "notes",
  data: any
},
"front-end/css-sass/README.md": {
  id: "front-end/css-sass/README.md",
  slug: "front-end/css-sass/readme",
  body: string,
  collection: "notes",
  data: any
},
"front-end/css-sass/tailwind.md": {
  id: "front-end/css-sass/tailwind.md",
  slug: "front-end/css-sass/tailwind",
  body: string,
  collection: "notes",
  data: any
},
"front-end/eslint.md": {
  id: "front-end/eslint.md",
  slug: "front-end/eslint",
  body: string,
  collection: "notes",
  data: any
},
"front-end/optimaze.md": {
  id: "front-end/optimaze.md",
  slug: "front-end/optimaze",
  body: string,
  collection: "notes",
  data: any
},
"front-end/reactjs/README.md": {
  id: "front-end/reactjs/README.md",
  slug: "front-end/reactjs/readme",
  body: string,
  collection: "notes",
  data: any
},
"front-end/reactjs/state.md": {
  id: "front-end/reactjs/state.md",
  slug: "front-end/reactjs/state",
  body: string,
  collection: "notes",
  data: any
},
"front-end/security.md": {
  id: "front-end/security.md",
  slug: "front-end/security",
  body: string,
  collection: "notes",
  data: any
},
"front-end/seo.md": {
  id: "front-end/seo.md",
  slug: "front-end/seo",
  body: string,
  collection: "notes",
  data: any
},
"front-end/testing/README.md": {
  id: "front-end/testing/README.md",
  slug: "front-end/testing/readme",
  body: string,
  collection: "notes",
  data: any
},
"front-end/typescript/README.md": {
  id: "front-end/typescript/README.md",
  slug: "front-end/typescript/readme",
  body: string,
  collection: "notes",
  data: any
},
"front-end/typescript/naming.md": {
  id: "front-end/typescript/naming.md",
  slug: "front-end/typescript/naming",
  body: string,
  collection: "notes",
  data: any
},
"front-end/typescript/promise.md": {
  id: "front-end/typescript/promise.md",
  slug: "front-end/typescript/promise",
  body: string,
  collection: "notes",
  data: any
},
"linux/README.md": {
  id: "linux/README.md",
  slug: "linux/readme",
  body: string,
  collection: "notes",
  data: any
},
"nvim/README.md": {
  id: "nvim/README.md",
  slug: "nvim/readme",
  body: string,
  collection: "notes",
  data: any
},
"nvim/array-table.md": {
  id: "nvim/array-table.md",
  slug: "nvim/array-table",
  body: string,
  collection: "notes",
  data: any
},
"nvim/fold-by-tresitter.md": {
  id: "nvim/fold-by-tresitter.md",
  slug: "nvim/fold-by-tresitter",
  body: string,
  collection: "notes",
  data: any
},
"nvim/get-arg.md": {
  id: "nvim/get-arg.md",
  slug: "nvim/get-arg",
  body: string,
  collection: "notes",
  data: any
},
"nvim/get-name-of-syntax.md": {
  id: "nvim/get-name-of-syntax.md",
  slug: "nvim/get-name-of-syntax",
  body: string,
  collection: "notes",
  data: any
},
"nvim/split-table.md": {
  id: "nvim/split-table.md",
  slug: "nvim/split-table",
  body: string,
  collection: "notes",
  data: any
},
"nvim/vim-api.md": {
  id: "nvim/vim-api.md",
  slug: "nvim/vim-api",
  body: string,
  collection: "notes",
  data: any
},
},
"pages": {
"about.md": {
  id: "about.md",
  slug: "about",
  body: string,
  collection: "pages",
  data: any
},
"privacy-policy.md": {
  id: "privacy-policy.md",
  slug: "privacy-policy",
  body: string,
  collection: "pages",
  data: any
},
"technology.md": {
  id: "technology.md",
  slug: "technology",
  body: string,
  collection: "pages",
  data: any
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
