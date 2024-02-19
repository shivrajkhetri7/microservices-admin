const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
    {
        userId: {
            type: Number,
            // required: true
        },
        eventName: {
            type: String,
            // required: true
        },
        eventDate: {
            type: String,
            // required: true
        },
        amount: {
            type: Number,
            // required: true
        }
    },
    { timestamps: true },
)

const Event = mongoose.model('events', eventSchema)
module.exports = Event
