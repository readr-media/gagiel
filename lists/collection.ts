import { list } from '@keystone-6/core';

import {
  text,
  relationship,
  password,
  timestamp,
  select,
} from '@keystone-6/core/fields';

export const collection = list ({
    fields: {
      title: text({ validation: { isRequired: false } }),
      slug: text({ validation: { isUnique:true, isRequired: true } }),
      summary: text({ validation: { isRequired: false } }),
	  public: select({
		label: '類型',
	 	datatype: 'enum',
		options: [
		  { label: '個人', value: 'private' },
		  {	label: '公開', value: 'publis' },
		  {	label: '共筆', value: 'wiki' },
		]
	  }),
	  format: select({
		label: '型態',
	 	datatype: 'enum',
		options: [
		  { label: '資料夾', value: 'folder' },
		  {	label: '時間軸', value: 'timeline' },
		]
	  }),
      comment: relationship({ ref: 'Comment', many: true }),
      creator: relationship({  
	  	ref: 'Member',
		many: false,
	  }),
    },
    ui: {
      listView: {
        initialColumns: ['title', 'slug'],
      },
    },
})
