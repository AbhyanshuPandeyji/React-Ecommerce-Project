import React from 'react'

const Contact = () => {
    return (
        <div>
            <img className='catImg' src="https://i.ibb.co/VmjCGYJ/contactus.jpg" alt="contactus"/>
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
                        <div className="col-md-6 m-3">
                            <label htmlFor="email-id" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email-id"/>
                        </div>
                        <div className="col-12 m-3">
                            <label htmlFor="Address" className="form-label">Address</label>
                            <textarea type="text" className="form-control" id="Address" placeholder="Your Address"/>
                        </div>
                        {/* This is giving the error */}
                        <div className="form-floating m-3">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                        </div>
                        <div className="col-12 m-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>

            </section>
        </div>
    )
}

export default Contact;
