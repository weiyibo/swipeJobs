import React from "react";

const EmptyMessage = ({ message }) => {
    return (
        <div className="text-center empty-message-margin-top">
            {message}
        </div>
    )
}

export default EmptyMessage
