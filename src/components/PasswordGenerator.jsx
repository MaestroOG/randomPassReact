import React, { useCallback, useEffect, useState } from 'react'
import './passwordGenerator.css'

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllow] = useState(false)
    const [password, setPassword] = useState("");

    const passwordGen = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) {
            str += "0123456789"
        }
        if (charAllowed) {
            str += "!@#$%^&*()_+-={}[]|\:;'<>,.?/"
        }

        for (let i = 1; i < length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)
    }, [length, numberAllowed, charAllowed, setPassword])

    useEffect(() => {
        passwordGen()
    }, [length, numberAllowed, charAllowed, setPassword])

    const handleClick = () => {
        navigator.clipboard.writeText(password)
        alert("Copied To Clipboard")
    }
    return (
        <>
            <main className='gen'>
                <div className="password-field">
                    <input type="text" placeholder='password' value={password} readOnly />
                    <button onClick={handleClick}>Copy</button>
                </div>
                <div className="settings">
                    <input type="range"
                        min={8}
                        max={100}
                        value={length}
                        onChange={(e) => { setLength(e.target.value) }}
                    />
                    <label>Length: {length}</label>
                    <input type="checkbox" defaultChecked={numberAllowed} onChange={() => {
                        setNumberAllowed((prev) => !prev)
                    }} />
                    <label>Numbers</label>
                    <input type="checkbox" defaultChecked={charAllowed} onChange={() => {
                        setCharAllow((prev) => !prev)
                    }} />
                    <label>Special Characters</label>
                </div>
            </main>
        </>
    )
}

export default PasswordGenerator
