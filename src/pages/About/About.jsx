import React, { Fragment } from 'react'
import './About.css'

const About = () => {
    return (
        <Fragment>
        <img 
                    className='catImg' 
                    src="https://i.ibb.co/XbYjq3X/aboutus.jpg" alt="aboutus" 
                />
        <section className="contact section-padding bg-light text-dark" id="contact">
            <div className="container mt-5  mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header text-center pb-5">
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed lectus orci, maximus at pulvinar id, porttitor eget nisl. 
                                Nunc dignissim eros at dolor malesuada, eu vehicula ligula sagittis. 
                                Ut hendrerit urna congue convallis gravida. Fusce mauris nisi, 
                                rutrum eu varius faucibus, consequat in felis. Aenean vel risus ut 
                                turpis tincidunt molestie. Vivamus velit nisi, laoreet in felis eu, 
                                accumsan hendrerit nulla. Praesent lacinia vitae massa a lobortis. 
                                Sed ut ultricies libero. Integer sed nibh eu lacus dignissim aliquet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Fragment>
    )
}

export default About
