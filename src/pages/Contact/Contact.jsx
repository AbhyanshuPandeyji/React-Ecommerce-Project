import React from 'react'

const Contact = () => {
    return (
        <div>
            <img 
                    className='catImg' 
                    src="https://i.ibb.co/VmjCGYJ/contactus.jpg" alt="contactus" 
                />
            <section className="contact section-padding bg-light text-dark" id="contact">
                <div className="container mt-5  mb-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-header text-center pb-5">
                                <h2>Contact Us</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                    adipisicing elit. Non, quo.</p>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className="col-md-6">
                            <label htmlFor="email-id" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email-id"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="Password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="Password"/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="Address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="Address" placeholder="Your Address"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="City" className="form-label">City</label>
                            <input type="text" className="form-control" id="City"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="state" className="form-label">State</label>
                            <input type="text" className="form-control" id="state"/>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>

            </section>
        </div>
    )
}

export default Contact;
