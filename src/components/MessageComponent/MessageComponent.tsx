import './MessageComponent.css';
import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { Send, CheckCircle2, XCircle } from 'lucide-react';

export interface MessageComponentProps {
    title?: string;
    accessKey: string; // Web3Forms access key
    subject?: string;
    maxLength?: number;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MessageComponent = ({
    title = 'Send a Message',
    accessKey,
    subject = 'New message from portfolio',
    maxLength = 250,
}: MessageComponentProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<Status>('idle');
    const [error, setError] = useState('');

    const popupOpen = status === 'success' || status === 'error';

    useEffect(() => {
        if (!popupOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setStatus('idle');
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [popupOpen]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !message.trim()) {
            setError('Please fill in all fields.');
            return;
        }
        if (!EMAIL_REGEX.test(email.trim())) {
            setError('Please enter a valid email address.');
            return;
        }
        if (message.length > maxLength) {
            setError(`Message must be ${maxLength} characters or fewer.`);
            return;
        }

        setError('');
        setStatus('sending');

        try {
            const response = await fetch(WEB3FORMS_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    subject,
                    from_name: 'Portfolio Contact',
                    name: name.trim(),
                    email: email.trim(),
                    message: message.trim(),
                }),
            });
            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const isSending = status === 'sending';

    return (
        <>
            <form className="bento-card message-card" onSubmit={handleSubmit} noValidate>
                <h3 className="message-title">{title}</h3>

                <div className="message-row">
                    <input
                        type="text"
                        className="message-input"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-label="Your Name"
                    />
                    <input
                        type="email"
                        className="message-input"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Your Email"
                    />
                </div>

                <div className="message-textarea-wrapper">
                    <textarea
                        className="message-input message-textarea"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value.slice(0, maxLength))}
                        maxLength={maxLength}
                        aria-label="Your Message"
                        aria-describedby="message-char-count"
                    />
                    <span
                        id="message-char-count"
                        className={`message-char-count${message.length >= maxLength ? ' message-char-count--limit' : ''}`}
                    >
                        {message.length} / {maxLength}
                    </span>
                </div>

                {error && <p className="message-error">{error}</p>}

                <button type="submit" className="message-submit" disabled={isSending}>
                    <Send size={18} />
                    <span>{isSending ? 'Sending…' : 'Send Message'}</span>
                </button>
            </form>

            {popupOpen && (
                <div className="message-popup-backdrop" onClick={() => setStatus('idle')}>
                    <div
                        className={`message-popup message-popup--${status}`}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="message-popup-title"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="message-popup-icon">
                            {status === 'success' ? <CheckCircle2 size={44} /> : <XCircle size={44} />}
                        </div>
                        <h4 id="message-popup-title" className="message-popup-title">
                            {status === 'success' ? 'Message delivered!' : "Couldn't send message"}
                        </h4>
                        <p className="message-popup-text">
                            {status === 'success'
                                ? "Thanks for reaching out. I'll get back to you soon."
                                : 'Something went wrong. Please try again in a moment.'}
                        </p>
                        <button
                            type="button"
                            className="message-popup-close"
                            onClick={() => setStatus('idle')}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default MessageComponent;
