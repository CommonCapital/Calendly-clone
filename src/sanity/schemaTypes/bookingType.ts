import { defineField, defineType } from "sanity";

export const bookingType = defineType({
  name: "booking",
  title: "Booking",
  type: "document",
  fields: [
    defineField({
      name: "meetingType",
      title: "Meeting Type",
      type: "reference",
      to: [{ type: "meetingType" }],
    }),
    defineField({
      name: "attendeeName",
      title: "Attendee Name",
      type: "string",
    }),
    defineField({
      name: "attendeeEmail",
      title: "Attendee Email",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
    }),
    defineField({
      name: "startTime",
      title: "Start Time",
      type: "string",
    }),
    defineField({
      name: "endTime",
      title: "End Time",
      type: "string",
    }),
  ]
});
