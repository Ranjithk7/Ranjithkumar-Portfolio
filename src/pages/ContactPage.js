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
      setSuccessMessage("Email successfully sented")
    } catch (error) {
        setError(error);
    } finally {
      setLoading(false);
      setError('')
      name.current.value='';
      email.current.value='';
      message.current.value='';
    }
  }
    return (
        <section class="contact" id="contact">
            <div class="max-width">
                <h2 class="title">Contact me</h2>
                <div class="contact-content">
                    <div class="column left">
                        <div class="text">Get in Touch</div>
                        <p>Feel free to ask any question </p>
                        <div class="icons">
                            <div class="row">
                                <i class="fas fa-user"></i>
                                <div class="info">
                                    <div class="head">Name</div>
                                    <div class="sub-title">Ranjithkumar V</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="info">
                                    <div class="head">Address</div>
                                    <div class="sub-title">Tiruchengode, Namakkal</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-envelope"></i>
                                <div class="info">
                                    <div class="head">Email</div>
                                    <div class="sub-title">ranjithkumar45v@gmail.com</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-phone"></i>
                                <div class="info">
                                    <div class="head">Phone</div>
                                    <div class="sub-title">+91 8838610066</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column right">
                        <div class="text">Message me</div>
                        <form onSubmit={handleSubmit}>
                            <p className={error ? 'error' : 'success'}>{error ? error : successMessage}</p>
                            <div class="field name">
                                    <input type="text" name="name" placeholder="Name" ref={name} required />
                                </div>
                            <div class="field email">
                                    <input type="email" name='email' placeholder="Email" ref={email} required />
                                </div>
                            <div class="field textarea">
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