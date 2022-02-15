import { list } from '@keystone-6/core';

import {
  text,
  relationship,
  password,
  timestamp,
  select,
  checkbox
} from '@keystone-6/core/fields';

export const member = list ({
    fields: {
      firebaseId: text({
        label: 'firebaseId',
	    validation: {
          isRequired: true,
          isUnique: true,
		},
      }),
      name: text({ validation: { isRequired: true, isUnique: true } }),
      nickname: text({ validation: { isRequired: true } }),
      avatar: text({ validation: { isRequired: false } }),
      email: text({
        validation: { isRequired: false },
        isFilterable: true,
      }),
      is_active: checkbox({
        defaultValue: true,
      }),
      verified: checkbox({
        defaultValue: false,
      }),
	  pick: relationship({
	    ref: 'Pick.member',
		many: true,
	  }),
	  comment: relationship({
	    ref: 'Comment',
		many: true,
	  }),
	  member_like: relationship({
	    ref: 'Comment.like',
		many: true,
	  }),
	  follower: relationship({
	    ref: 'Member.following',
		many: true,
	  }),
	  following: relationship({
	    ref: 'Member.follower',
		many: true,
	  }),
	  following_category: relationship({
	    ref: 'Category',
		many: true,
	  }),
	  following_collection: relationship({
	    ref: 'Collection',
		many: true,
	  }),
	  follow_publisher: relationship({
	    ref: 'Publisher',
		many: true,
	  }),
    },
    ui: {
      listView: {
        initialColumns: ['name', 'email'],
      },
    },
})

