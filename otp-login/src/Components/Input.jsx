import React, { useEffect, useRef, useState } from 'react'

const Input = ({ phoneNumber, length, onOtpSubmit }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""))
    const inputRef = useRef([])

    const handleChange = (e, index) => {
        if (isNaN(e.target.value)) {
            return
        }

        const value = e.target.value
        console.log(value)
        const newOtp = [...otp]
        newOtp[index] = value.substring(value.length - 1)
        setOtp(newOtp)

        /// let combine otp
        let combineOtp = newOtp.join("")
        if (combineOtp.length === length) {
            onOtpSubmit(combineOtp)
        }

        //// now let's jump to next input element
        if (value && index < length - 1 && inputRef.current[index + 1]) {
            inputRef.current[index + 1].focus()
        }
    }

    const backToPreviousInput = (e, index) => {
        if (e.key === "Backspace") {
            const updatedOtp = [...otp];
            updatedOtp[index] = "";
            setOtp(updatedOtp);
            
            if (index > 0 && inputRef.current[index - 1]) {
                inputRef.current[index - 1].focus();
            }
        }
    };

    useEffect(() => {
        // console.log(inputRef.current[0]) it's an input element if there is an input element we need to focus on that input element
        if (inputRef.current[0]) {
            inputRef.current[0].focus()
        }
    }, [])


    return (
        <div className='otp-container'>
            <h3>Otp sent to ends with{phoneNumber.substring(7, 10)}</h3>
            {
                otp.map((value, index) => {
                    return (
                        <input ref={(input) => inputRef.current[index] = input} onKeyDown={(e) => backToPreviousInput(e, index)} type="text" key={index} value={value} onChange={(e) => handleChange(e, index)} />
                    )
                })
            }
        </div>
    )
}

export default Input