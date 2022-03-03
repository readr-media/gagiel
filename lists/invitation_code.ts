import { list } from '@keystone-6/core';

import {
  text,
  relationship,
  timestamp,
  select,
} from '@keystone-6/core/fields';

export const invitation_code = list ({
    fields: {
	  code: text({ 
		validation: { isRequired: true, isUnique: true },
		db: { idField: { kind: 'uuid' } },
	  }),
      send: relationship({ ref: 'Member.invited_by', many: false }),
      receive: relationship({ ref: 'Member.invited', many: false }),
    },
    ui: {
      listView: {
        initialColumns: ['name'],
      },
    },
})
