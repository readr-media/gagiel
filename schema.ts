/*
Welcome to the schema! The schema is the heart of Keystone.

Here we define our 'lists', which will then be used both for the GraphQL
API definition, our database tables, and our Admin UI layout.

Some quick definitions to help out:
A list: A definition of a collection of fields with a name. For the starter
  we have `User`, `Post`, and `Tag` lists.
A field: The individual bits of data on your list, each with its own type.
  you can see some of the lists in what we use below.

*/

// Like the `config` function we use in keystone.ts, we use functions
// for putting in our config so we get useful errors. With typescript,
// we get these even before code runs.
import { list } from '@keystone-6/core';

// We're using some common fields in the starter. Check out https://keystonejs.com/docs/apis/fields#fields-api
// for the full list of fields.
import {
  text,
  relationship,
  password,
  timestamp,
  select,
} from '@keystone-6/core/fields';
// The document field is a more complicated field, so it's in its own package
// Keystone aims to have all the base field types, but you can make your own
// custom ones.
//import { document } from '@keystone-6/fields-document';
import { category } from './lists/category';
import { tag } from './lists/tag';
import { collection } from './lists/collection';
import { collection_member } from './lists/collection_member';
import { collection_picks } from './lists/collection_picks';
import { story } from './lists/story';
import { pick } from './lists/pick';
import { publisher } from './lists/publisher';
import { member } from './lists/member';
import { comment } from './lists/comment';
import { user} from './lists/user';
// We are using Typescript, and we want our types experience to be as strict as it can be.
// By providing the Keystone generated `Lists` type to our lists object, we refine
// our types to a stricter subset that is type-aware of other lists in our schema
// that Typescript cannot easily infer.
import { Lists } from '.keystone/types';

// We have a users list, a blogs list, and tags for blog posts, so they can be filtered.
// Each property on the exported object will become the name of a list (a.k.a. the `listKey`),
// with the value being the definition of the list, including the fields.
export const lists: Lists = {
  // Here we define the user list.
  User: user,
  Category: category,
  Collection: collection,
  CollectionMember: collection_member,
  PicksinCollection: collection_picks,
  Publisher: publisher,
  Story: story,
  Pick: pick,
  Member: member,
  Comment: comment,
  //Tag: tag,
};
