const Event = require('../../schema/eventSchema');
const constants = require('../../utils/constants');
const { eventValidator } = require('../../validators/event-validator');



/**
 * @function createEvent
 * @description this function is responsible to create an event
 */

const createEvent = async (req, res) => {
    try {
        const payload = req.body
        const dataToValidate = {
            eventName: payload?.eventName,
            eventDate: payload?.eventDate,
            amount: payload?.amount,
            userId: payload?.userId
        };
        await eventValidator(dataToValidate)
        const newEvent = await Event.save(data);
        console.log(newEvent)
        res.status(constants.CODES.SUCCESS).json({
            success: true,
            message: 'Event Added Sucussfully',
            data: newEvent,
        });
    } catch (error) {
        console.error(error);
        res.status(constants.CODES.SOMETHING_WENT_WRONG).json({
            status: false,
            error: JSON.stringify(error)
        })
    }
}





module.exports = {createEvent}