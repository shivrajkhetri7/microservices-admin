import React from 'react';

interface CustomToolbarProps {
    localizer: {
        messages: Record<string, string>;
    };
    label: string;
    onNavigate: (action: string) => void;
    fetchEvents: () => void;
    pastEvents: () => void;
    upcomingEvents: () => void;
}

const navigate = {
    PREVIOUS: 'PREV',
    NEXT: 'NEXT',
    TODAY: 'TODAY',
    DATE: 'DATE',
};

const CustomToolbar: React.FC<CustomToolbarProps> = ({
    localizer: { messages },
    label,
    onNavigate,
    fetchEvents,
    pastEvents,
    upcomingEvents,
}) => {
    const onClickAllEvents = () => {
        fetchEvents();
    };

    const onClickPastEvents = () => {
        pastEvents();
    };

    const onClickUpcomingEvents = () => {
        upcomingEvents();
    };

    const navigateHandler = (action: string) => {
        onNavigate(action);
    };

    return (
        <div className="rbc-toolbar">
            <span className="rbc-btn-group">
                <button type="button" className="btn btn-control" onClick={() => navigateHandler(navigate.PREVIOUS)}>
                    <i className="fa fa-arrow-left"></i> Prev
                </button>
            </span>
            <span className="rbc-btn-group">
                <button type="button" className="btn btn-control" onClick={() => navigateHandler(navigate.NEXT)}>
                    Next <i className="fa fa-arrow-right"></i>
                </button>
            </span>
            <span className="rbc-toolbar-label">{label}</span>
            <span className="rbc-btn-group">
                <button type="button" className="btn btn-control" onClick={onClickAllEvents}>
                    All
                </button>
            </span>
            <span className="rbc-btn-group">
                <button type="button" className="btn btn-past" onClick={onClickPastEvents}>
                    Past
                </button>
            </span>
            <span className="rbc-btn-group">
                <button type="button" className="btn btn-upcoming" onClick={onClickUpcomingEvents}>
                    Upcoming
                </button>
            </span>
        </div>
    );
};

export default CustomToolbar;
