import React, { useState, useEffect } from "react";

const Form = ({ location }) => {
  const [form, setForm] = useState({ 
    fullName: "", 
    email: "", 
    message: "", 
    phoneNumber: "", 
    serviceType: "", 
    projectBudget: ""
  });
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
		if (isSubmitting) {
				if (Object.keys(errors).length === 0) {
            requestHandle();
				} else {
						setIsSubmitting(false);
				}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [errors])

 const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
	}

  const requestHandle = async e => {  
    // e.preventDefault();

    try {
      const response = await fetch('/contact', {
        method: "POST",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "omit", // include, *same-origin, omit
        headers: { "Content-Type": "application/json" },
        redirect: "follow", // manual, *folslow, error
        referrer: "client", // no-referrer, *client
        body: JSON.stringify(form),
      })

      const answer = await response.json()

      if (answer.success) {
        setIsSubmitting(false);
        setSuccess(true);
      }

    }
      catch (err) {
        console.log(err);
      }
    }


  const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
  }

	const validate = () => {
		let err = {};

		if (!form.fullName) {
			err.fullName = 'This field is required';
		}

		if (!form.email) {
			err.email = 'This field is required';
		}

		if (!form.phoneNumber) {
			err.phoneNumber = 'This field is required';
		}

		if (!form.serviceType) {
			err.serviceType = 'This field is required';
		}

		if (!form.projectBudget) {
			err.projectBudget = 'This field is required';
		}


    return err;
	}

  return (
      <>  
        <div className="main__contact">
          { isSubmitting ? <p className="is__loading">Loading..</p> : null }          
          {success ? <p className="is__success">Successfully Send! Please expect a call <span role="img" aria-labelledby="emoji">🤙</span></p> : null }
            <div className="main__wrapper">
              <form className="main__form" method="POST" validated={validated.toString()} onSubmit={handleSubmit}>
                <div className="the__column">
                  <div className="form__input">
                    <label htmlFor="fullName" className="form__label">Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      className="form__input" aria-required="true" 
                      aria-invalid="false" placeholder="John Doe" 
                      onChange={handleChange}
                    />
                    { errors.fullName ? <p className="error">{errors.fullName}</p> : null }
                  </div>
                  <div className="form__input">
                    <label htmlFor="email" className="form__label">Email Address *</label>
                    <input 
                      type="text" 
                      name="email" 
                      className="form__input" 
                      aria-required="true" 
                      aria-invalid="false" placeholder="Johndoe@gmail.com" 
                      onChange={handleChange}
                      />
                      { errors.email ? <p className="error">{errors.email}</p> : null }
                  </div>
                </div>
                <div className="the__column">
                  <div className="form__input">
                    <label htmlFor="phoneNumber" className="form__label">Contact Number *</label>
                    <input 
                      type="text" 
                      name="phoneNumber" 
                      className="form__input" 
                      aria-required="true" 
                      onChange={handleChange} 
                      aria-invalid="false" placeholder="+63 9*********" />
                      { errors.phoneNumber ? <p className="error">{errors.phoneNumber}</p> : null }
                  </div>
                    
                  <div className="form__input">
                    <label htmlFor="projectBudget" className="form__label">Project Budget *</label>
                    <input 
                      type="text" 
                      name="projectBudget" 
                      className="form__input" 
                      aria-required="true" 
                      onChange={handleChange} 
                      aria-invalid="false" placeholder="Project Budget" />
                      { errors.projectBudget ? <p className="error">{errors.projectBudget}</p> : null }
                  </div>
                </div>

                <div className="the__column">
                  <div className="form__input form__inputFull">
                    <label htmlFor="service" className="form__label">How can we help? *</label>
                    <select name="serviceType" className="form__input" aria-required="true" aria-invalid="false" onChange={handleChange}>
                      <option>Select here</option>
                      <option>Website Project</option>
                      <option>Branding Project</option>
                      <option>eCommerce Project</option>
                      <option>Custom Web Application Project</option>
                    </select>
                    { errors.serviceType ? <p className="error">{errors.serviceType}</p> : null }
                  </div>
                </div>

                <div className="the__column">
                  <div className="form__input form__inputFull">
                    <label htmlFor="message" className="form__label">Message *</label>
                    <textarea 
                      type="text" 
                      name="message"
                      onChange={handleChange} 
                      className="form__input"
                      aria-required="true" 
                      valid="false" placeholder="Your message here...">
                    </textarea>
                  </div>
                </div>

                <div className="the__column">
                  <button type="submit" className="form__input btn">Send</button>
                </div>
              </form>
            </div> 
        </div>
      </>
  )
}

export default Form