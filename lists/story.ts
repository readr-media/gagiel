import { list } from '@keystone-6/core';

import {
  text,
  relationship,
  password,
  timestamp,
  select,
  integer,
  checkbox,
} from '@keystone-6/core/fields';

export const story = list ({
    fields: {
      title: text({ validation: { isRequired: false } }),
      url: text({ validation: { isRequired: true } }),
      summary: text({ 
		validation: { isRequired: false } 
		ui: { displayMode: 'textarea' },
	  }),
      content: text({ 
		validation: { isRequired: false } 
		ui: { displayMode: 'textarea' },
	  }),
	  source: relationship({ ref: 'Publisher', many: false }),
	  author: relationship({ ref: 'Member', many: false }),
	  category: relationship({ ref: 'Category', many: false }),
	  pick: relationship({ ref: 'Pick.story', many: true }),
	  comment: relationship({ ref: 'Comment.story', many: true }),
      published_date: timestamp({ validation: { isRequired: false } }),
      og_title: text({ validation: { isRequired: false } }),
      og_image: text({ validation: { isRequired: false } }),
      og_description: text({ validation: { isRequired: false } }),
	  full_content: checkbox({
		defaultValue: false,
	  }),
      paywall: checkbox({
        defaultValue: false,
      }),
	  full_screen_ad: select({
		label: '蓋板',
		datatype: 'enum',
		options: [ 
			{ label: '手機', value: 'mobile' }, 
			{ label: '桌機', value: 'desktop' },
			{ label: '所有尺寸', value: 'all' },
		    { label: '無', value: 'none' }
		],
		defaultValue: 'none',
	  }),
      is_active: checkbox({
        defaultValue: true,
      }),
    },
    ui: {
      listView: {
        initialColumns: ['title', 'url'],
      },
    },
})
