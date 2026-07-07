// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import DecapCMS from '@jee-r/astro-decap-cms';

// https://astro.build/config
export default defineConfig({
  site: 'https://regleselementaires.com',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://regleselementaires.com/admin/',
    }),
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
				name: 'actu',
				label: 'Actualités',
				label_singular: 'Actualité',
				folder: 'src/content/actus',
				create: true,
				delete: true,
				fields: [
					{
						name: 'title',
						widget: 'string',
						label: 'Titre',
					},
					{
						name: 'description',
						widget: 'text',
						label: 'Description',
					},
					{
						name: 'pubDate',
						widget: 'datetime',
						label: 'Date de publication',
						format: 'YYYY-MM-DD',
						date_format: 'YYYY-MM-DD',
						time_format: false,
					},
					{
						name: 'updatedDate',
						widget: 'datetime',
						label: 'Date de mise à jour',
						format: 'YYYY-MM-DD',
						date_format: 'YYYY-MM-DD',
						time_format: false,
						required: false,
					},
					{
						name: 'heroImage',
						widget: 'image',
						label: 'Image',
						allow_multiple: false,
						media_folder: '/src/assets/actualites',
					},
					{
						label: 'Tags',
						name: 'tags',
						widget: 'select',
						multiple: true,
						options: ['Actualité', 'Plaidoyer']		
					},
					{
						name: 'body',
						widget: 'markdown',
						label: 'Corps du texte',
					},
				],
			},
			{
				name: 'ressource',
				label: 'Ressources',
				label_singular: 'Ressource',
				folder: 'src/content/ressources',
				create: true,
				delete: true,
				fields: [
					{
						name: 'title',
						label: 'Titre',
						widget: 'string',						
					},
					{
						name: 'description',
						label: 'Description',
						widget: 'text',						
					},
					{
						name: 'type',
						label: 'Type',
						widget: 'select',
						options: ['Affiche', 'Brochure', 'Guide pratique', 'Enquête et étude']			
					},
					{
						name: 'themes',
						label: 'Themes',
						widget: 'select',
						multiple: true,
						options: ['Composition', 'Éducation menstruelle', 'Europe', 'Inclusivité', 'Ménopause', 'Parlons Règles', 'Précarité menstruelle', 'Reglà', 'Santé menstruelle', 'Sport']												
					},
					{
						name: 'link',
						label: 'Lien de la ressource',
						widget: 'string',
					},
					{
						name: 'image',
						widget: 'image',
						label: 'Image (Taille recommandée : 500px de largeur par 250px de hauteur)',
						allow_multiple: false,
						media_folder: '/src/assets/ressources',
					},
					{
						name: 'pubDate',
						label: 'Publication Date',
						widget: 'datetime',						
						format: 'YYYY-MM-DD',
						date_format: 'YYYY-MM-DD',
						time_format: false,
					},
					
				],
			},
		],
      },
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  },
});