import { defineField, defineType } from "sanity";

export const availabilitySlotType = defineType({
  name: "availabilitySlot",
  title: "Availability Slot",
  type: "object",
  fields: [
    defineField({
      name: "dayOfWeek",
      title: "Day of Week",
      type: "string",
      options: {
        list: [
          "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"
        ]
      }
    }),
    defineField({
      name: "startTime",
      title: "Start Time",
      type: "string",
      description: "e.g., '09:00'"
    }),
    defineField({
      name: "endTime",
      title: "End Time",
      type: "string",
      description: "e.g., '17:00'"
    }),
  ]
});
