// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import DecapCMS from '@jee-r/astro-decap-cms';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    sitemap(),
    DecapCMS({
      previewStyles: [
				'/src/styles/global.css',
				'/src/styles/cms-preview.css',
			],
      config: {
        backend: {
          name: 'git-gateway',
					repo: 'regles-elementaires/astro-vitrine-2026',
          branch: 'main',
					identity_url: 'https://auth.decapbridge.com/sites/cb668fcf-536e-4289-8a69-dc6a0f147ff1',
  				gateway_url: 'https://gateway.decapbridge.com',
        },
  			commit_messages: {
					create: 'Create {{collection}} “{{slug}}” - {{author-name}} <{{author-login}}> via DecapBridge',
					update: 'Update {{collection}} “{{slug}}” - {{author-name}} <{{author-login}}> via DecapBridge',
					delete: 'Delete {{collection}} “{{slug}}” - {{author-name}} <{{author-login}}> via DecapBridge',
					uploadMedia: 'Upload “{{path}}” - {{author-name}} <{{author-login}}> via DecapBridge',
					deleteMedia: 'Delete “{{path}}” - {{author-name}} <{{author-login}}> via DecapBridge',
					openAuthoring: 'Message {{message}} - {{author-name}} <{{author-login}}> via DecapBridge',
				},
				logo_url: 'https://decapbridge.com/decapcms-with-bridge.svg',
				site_url: 'https://re-vitrine-2026.netlify.app',
        media_folder: 'src/assets',
				public_folder: '../../assets',
        collections: [
					{
						name: 'blog',
						label: 'Blog Posts',
						label_singular: 'Blog Post',
						folder: 'src/content/blog',
						create: true,
						delete: true,
						fields: [
							{
								name: 'title',
								widget: 'string',
								label: 'Title',
							},
							{
								name: 'description',
								widget: 'text',
								label: 'Description',
							},
							{
								name: 'pubDate',
								widget: 'datetime',
								label: 'Publication Date',
								format: 'MMM DD YYYY',
								date_format: 'MMM DD YYYY',
								time_format: false,
							},
							{
								name: 'updatedDate',
								widget: 'datetime',
								label: 'Updated Date',
								format: 'MMM DD YYYY',
								date_format: 'MMM DD YYYY',
								time_format: false,
								required: false,
							},
							{
								name: 'heroImage',
								widget: 'image',
								label: 'Hero Image',
								required: false,
							},
							{
								label: 'Tags',
								name: 'tags',
								widget: 'list',
								allow_add: true,
								allow_delete: true,
								collapsed: false,
								field: { label: 'Tag', name: 'tag', widget: 'string' },
							},
							{
								name: 'body',
								widget: 'markdown',
								label: 'Post Content',
							},
						],
					},
				],
      },
    })
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});