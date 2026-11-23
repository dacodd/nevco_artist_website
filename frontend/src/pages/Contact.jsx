import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `${formData.firstName} ${formData.lastName}`;
    const body = `Email: ${formData.email}\n\n${formData.message}`;
    
    const mailtoLink = `mailto:nevzat.copur@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container">
      
      <div className="contact-content">
        <div className="contact-header">
        <h1>{t('contactPage.intro')}</h1>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>{t('firstName')}</label>
              <input
                type="text"
                name="firstName"
                placeholder={t('firstName')}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>{t('lastName')}</label>
              <input
                type="text"
                name="lastName"
                placeholder={t('lastName')}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>{t('email')}</label>
            <input
              type="email"
              name="email"
              placeholder={t('email')}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>{t('message')}</label>
            <textarea
              name="message"
              placeholder={t('message')}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">{t('send')}</button>
        </form>
      </div>
    </div>
  );}
 


export default Contact;