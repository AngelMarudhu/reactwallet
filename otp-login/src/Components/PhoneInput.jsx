import React, { useState } from 'react'
import Input from './Input'

const PhoneInput = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [showOtp, setShowOtp] = useState(false)

    const handleChange = (e) => {

        if (isNaN(e.target.value)) {
            return
        }

        if (e.target.value.length > 10) {
            alert("enough enough")
            return
        }

        setPhoneNumber(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (phoneNumber.length === 10) {
            setShowOtp(true)
        } else if (phoneNumber.length > 10 || phoneNumber.length < 10) {
            alert('Please Enter 10 Digit Number')
        }
    }

    const onOtpSubmit = (otp) => {
        console.log("Login Successfull", otp)
    }

    return (
        <div>
            {
                showOtp ? <Input length={4} onOtpSubmit={onOtpSubmit} phoneNumber={phoneNumber} /> : <form action="" onSubmit={(e) => { handleSubmit(e) }}>
                    <input type="text" placeholder='Enter Phone Number' value={phoneNumber} onChange={handleChange} />
                    <button type="submit">Sent Otp</button>
                </form>
            }
        </div>
    )
}

export default PhoneInput