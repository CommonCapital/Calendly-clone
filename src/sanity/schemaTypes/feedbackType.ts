import { defineField, defineType } from "sanity";

export const feedbackType = defineType({
  name: "feedback",
  title: "Feedback",
  type: "document",
  fields: [
    defineField({
      name: "message",
      title: "Message",
      type: "text",
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
    })
  ]
});
