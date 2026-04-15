import { defineField, defineType } from "sanity";

export const connectedAccountType = defineType({
  name: "connectedAccount",
  title: "Connected Account",
  type: "object",
  fields: [
    defineField({
      name: "provider",
      title: "Provider",
      type: "string",
    }),
    defineField({
      name: "accountId",
      title: "Account ID",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
  ]
});
