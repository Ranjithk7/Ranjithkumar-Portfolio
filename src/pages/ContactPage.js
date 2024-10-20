import React, {useRef, useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/form.css';
import SocialIcons from '../components/SocialIcons';

const ConatactPage = () => {
    const name = useRef();
  const email = useRef();
  const message = useRef();
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("Y1kUknuuum3G84017"), []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_gwtyoxc";
    const templateId = "template_90izxsc";

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        to_name: 'Ranjithkumar',
        from_name: name.current.value,
        message: message.current.value,
        reply_to: email.current.value
      });
      setSuccessMessage("Email successfully sented");
    } catch (error) {
        setError(error);
    } finally {
      setLoading(false);
      setError('')
      setTimeout(() => {
        setSuccessMessage('')
      }, 3000);
      name.current.value='';
      email.current.value='';
      message.current.value='';
    }
  }
    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contact me</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Get in Touch</div>
                        <p>Feel free to ask any question </p>
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Ranjithkumar V</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">Tiruchengode, Namakkal</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">ranjithkumar45v@gmail.com</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-phone"></i>
                                <div className="info">
                                    <div className="head">Phone</div>
                                    <div className="sub-title">+91 8838610066</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">Message me</div>
                        <form onSubmit={handleSubmit}>
                            <p className={error ? 'error' : 'success'}>{error ? error : successMessage}</p>
                            <div className="field name">
                                    <input type="text" name="name" placeholder="Name" ref={name} required />
                                </div>
                            <div className="field email">
                                    <input type="email" name='email' placeholder="Email" ref={email} required />
                                </div>
                            <div className="field textarea">
                                <textarea cols="30" rows="10" name='message' placeholder="Message.." ref={message} required></textarea>
                            </div>
                            <button 
                            className='btn-box' 
                            type="submit" 
                            disabled={loading}
                            css={`
                            border:none;
                            font-size:15px;
                            border-radius:10px;
                            `}
                            >Send message</button>
                        </form>
                    </div>
                </div>
            </div>
            <SocialIcons />

        </section>
    )
}

export default ConatactPage