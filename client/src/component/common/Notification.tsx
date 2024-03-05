import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

interface NotificationInterface {
    status: string
    message: string
}

const Notification = (props: NotificationInterface) => {
    const { status, message } = props

    useEffect(() => {
        if (status && message) {
            switch (status) {
                case 'success':
                    toast.success(message)
                    break
                case 'error':
                    toast.success(message)
                    break
                case 'info':
                    toast.success(message)
                    break
                case 'warning':
                    toast.success(message)
                    break
                default:
                    break
            }
        }
    }, [props])

    return (
        <React.Fragment>
            <Toaster />
        </React.Fragment>
    )
}

export default Notification
