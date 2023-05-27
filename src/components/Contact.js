import React, { useState } from 'react';
import { validateEmail } from '../utils/helper.js';
// import '../Contact.css';

function Contact() {

    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState( { name: '', email: '', message: ''});

    const { name, email, message } = formState;

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('your email is invalid.');
            } else {
                setErrorMessage('');
            }

        }
        else {

            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            }
            else
            {
                setErrorMessage('');
            }
        }

        setFormState({...formState, [e.target.name]: e.target.value })

        console.log('errorMessage', errorMessage);

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }


    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        
        // <section className="contact" >

        //         <br></br>  
        //     <div className='contactMe'>
        //         <h1 data-testid="h1tag" >Contact me</h1>
        //     </div>
        //             <br></br>
        //             <br></br>
        //     <div className='contactForm'>
        //             <form id="contact-form" onSubmit={handleSubmit}>

        //                 <div>
        //                     <label htmlFor="name">Your Name:</label>
        //                     <input type="text" name="name" onBlur= {handleChange}defaultValue={name}/>
        //                 </div>

        //                 <br></br>

        //                 <div>
        //                     <label htmlFor="email">Your Email Address:</label>
        //                     <input type="email" name="email" onBlur= {handleChange} defaultValue={email}/>
        //                 </div>

        //                 <br></br>

        //                 <div>
        //                     <label htmlFor="message">Message:</label>
        //                     <textarea name="message" rows="5" onBlur= {handleChange} defaultValue={message} />
        //                 </div>

        //                 <br></br>
                        
        //                 {errorMessage && (
        //                     <div>
        //                         <p className="error-text">{errorMessage}</p>
        //                     </div>
        //                 )}

        //                 <br></br>

        //                 <button data-testid="button" type="submit">Submit</button>


        //             </form>
            
        //     </div>

        // </section>

        <section className='contact' id="contact">
        <div className="container-lg mt-2">
            <div className="text-center">
                <h2>Contact Me</h2>
                <p className="lead">Do you have any queries or questions? Fill out the form to contact me directly</p>
            </div>

            <form id="contact-form" onSubmit={handleSubmit}></form>
            
            <div className="row justify-content-center my-5">
                <div className="col-lg-6">
                    <form>
                        <label htmlFor="email" class="form-label">Email Address</label>
                        <div className="input-group mb-4">
                            <span className="input-group-text">
                                <i className="bi bi-envelope-at-fill"></i>
                            </span>
                            <input type="email" name="email" for="email" class="form-control" id="email" onBlur={handleChange} defaultValue={email} placeholder="Name@example.com"/>
                            <span className="input-group-text">
                                <span className="tt" data-bs-placement="bottom" title="Enter your email where I can send the reply">
                                  <i className="bi bi-question-circle text-muted"></i>
                                </span>
                            </span>

                        </div>
                        

                        <label htmlFor="name" className="form-label">Your Name:</label>
                        <div className="input-group mb-4">
                            <span className="input-group-text">
                                <i className="bi bi-person-fill"></i>
                            </span>
                            <input for="text" input type="text" name="name" onBlur= {handleChange}defaultValue={name} class="form-control" id="name" placeholder="your First & Last name"/>
                            <span className="input-group-text">
                                <span className="tt" data-bs-placement="bottom" title="Enter your name">
                                  <i className="bi bi-question-circle text-muted"></i>
                                </span>
                            </span>
                        </div>
                        

                        {/* <label for="subject" class="form-label">What is your question about?</label>
                        <div class="input-group mb-4">
                            <span class="input-group-text">
                                <i class="bi bi-chat-right-dots-fill"></i>
                            </span>
                            <select id="subject" class="form-select">
                                <option value="pricing" selected>Pricing</option>
                                <option value="content">Content</option>
                                <option value="other" selected>Other</option>
                            </select>
                        </div> */}
                        

                        
                        <div className="form-floating">
                            <textarea name="message" rows="5" onBlur= {handleChange} defaultValue={message} id="query" className="form-control my-2"></textarea>
                            <label htmlFor="query" className="form-label">Your Query</label>
                        </div>

                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                          )
                        }

                        <div class="mb-4 text-center">
                            <button data-testid="button" className="btn btn-info btn-outline-dark" type="submit" >Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </section>
    );


}


export default Contact;