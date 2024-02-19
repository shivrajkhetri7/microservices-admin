const Event = require('../../schema/eventSchema');
const constants = require('../../utils/constants');
const { eventValidator } = require('../../validators/event-validator');
const cron = require('node-cron');



/**
 * @function createEvent
 * @description this function is responsible to create an event
 */

const createEvent = async (req, res) => {
    try {
        const payload = {
            eventName: req?.body?.eventName,
            eventDate: req?.body?.eventDate,
            amount: req?.body?.amount,
            userId: req?.body?.userId
        };
        await eventValidator(payload);
        const newEvent = await Event.create(payload);
        console.log(newEvent);
        return res.json({ success: true, message: 'Event created successfully', data: newEvent });
    } catch (error) {
        console.error('Error creating event:', error);
        return res.json({ success: false, message: 'Error creating event', error: error });
    }
};

// cornShedule is used to decide when the cornjob to run

const cronSchedule = '0 0 * * * *'; 
// above cornshedyule codes are used to decide the timing that when to activate
// right now i have kept it for 12:00 AM
cron.schedule(cronSchedule, async () => {
    await createEvent();
});

module.exports = { createEvent }