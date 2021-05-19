/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import style from './AlertButton.module.css';
import React from 'react';
import axios from 'axios';

const useInput = (init) => {
    const [value, setValue] = React.useState(init);
    const onChange = React.useCallback(
        (e) => setValue(`+${e.target.value.replace(/[^\d]/gi, '')}`),
        [setValue]
    );
    const onFocus = React.useCallback(
        (e) => setValue(`+${e.target.value.replace(/[^\d]/gi, '')}`),
        [value, setValue]
    );
    return { value, onChange, onFocus };
};

const useAlertTrigger = (phone, language) => {
    const [state, setState] = React.useState({ state: 'INIT' });
    const trigger = React.useCallback(async () => {
        setState({ state: 'PENDING' });
        try {
            switch (language) {
                case 'en-GB':
                    await axios.get(
                        `${
                            process.env.API_HOST_GB
                        }/en-GB/callback?Caller=${encodeURIComponent(phone)}`
                    , { crossdomain: true });
                    setState({ state: 'SUCCESS' });  
                case 'ur-PK':
                    await axios.get(
                        `${
                            process.env.API_HOST_PK
                        }/ur-PK/callback?Caller=${encodeURIComponent(phone)}`
                    , { crossdomain: true });
                    setState({ state: 'SUCCESS' });
            }
        } catch (e) {
            setState({
                state: 'ERROR',
                error: e.response.data.error || 'An unexpected error occurred',
            });
        }
    }, [phone, language, setState]);
    return { state, trigger };
};

export default function AlertButton() {
    const phoneNumber = useInput('+44...');
    const [language, setLanguage] = React.useState('')
    const [langChosen, setLangChosen] = React.useState(false)
    const { trigger, state } = useAlertTrigger(phoneNumber.value, language);

    const setEnglish = () => {
        setLanguage('en-GB')
    }
    const setUrdu = () => {
        setLanguage('ur-PK')
    }

    const handleLangChosen = () => {
        if (!langChosen){
            setLangChosen(!langChosen)
        }
    }

    switch (state.state) {
        case 'PENDING':
            return <div>Please wait...</div>;
        case 'SUCCESS':
            return <div>Successfully requested! Please await your call...</div>;
    }

    let message = state.error || null;
    return (
        <div>
            <br />
            <div>
                <label className={style.button}>
                <input onClick={setEnglish, setLangChosen} type="radio" value="english" name="language" />English
                </label>
                <label className={style.button}>
                <input onClick={setUrdu, setLangChosen} type="radio" value="urdu" name="language" />Urdu
                </label>
            </div>
            <br />
            <input
                className={style.input}
                type="text"
                placeholder="+44"
                {...phoneNumber}
            />
            <button disabled={!langChosen} className={style.button} onClick={trigger}>
                Call me!
            </button>
            <br />
            {message ? (
                <div className="admonition admonition-danger alert alert--danger">
                    <div className="admonition-content">
                        <p>{message}</p>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
