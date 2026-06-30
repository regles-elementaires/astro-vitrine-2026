import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const actus = defineCollection({
	// Load Markdown and MDX files in the `src/content/actus/` directory.
	loader: glob({ base: './src/content/actus', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string())
		}),
});

const ressources = defineCollection({
	// Load Markdown and MDX files in the `src/content/ressources/` directory.
	loader: glob({ base: './src/content/ressources', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			type: z.string(),
			themes: z.array(z.string()),
			link: z.string(),
			image: image(),
			pubDate: z.coerce.date()
		}),
});

export const collections = { actus, ressources };
