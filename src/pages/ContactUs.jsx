import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { Phone } from '@mui/icons-material';
 
export default function ContactUs() {
    return (
        <div style={{ overflow: 'hidden', backgroundColor: '#F1F1F0' }}>
            <div className='container my-5' style={{ background: 'linear-gradient(to right, #FFFFFF 70%, #F0A76F 70%)', borderRadius: '20px' }}>
                <div className='row d-flex row-sm-reverse'>
                    <div className='col-md-12 col-lg-6 mt-5 pt-2 order-md-2 order-sm-2 order-lg-1 order-xl-1 order-2'>
                        <div className='container px-5'>
                            <h1>Get in <span style={{ color: '#F0A76F' }}>Touch</span></h1>
                            <p className='mb-4'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                            <form className='mt-2'>
                                <div className="mb-3">
                                    <input className="form-control" type="text" placeholder="Name" required />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" type="text" placeholder="Email" required />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" type="text" placeholder="Phone Number" required />
                                </div>
                                <div className="mb-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>How did you find US?</option>
                                        {/* <option value="1">Referred by friends</option>
                                        <option value="2">By social media</option>
                                        <option value="3">Visited store</option> */}
                                    </select>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="button" className="btn border" style={{ backgroundColor: '#F0A76F', color: 'White' }}>Save</button>
                                </div>
                                <div className="mt-3 d-flex flex-wrap justify-content-center justify-content-lg-between">
                                    <div className="d-flex align-items-center mb-3">
                                        <Phone className='mb-1' style={{ color: '#F0A76F' }} />
                                        <div className="ms-2 me-lg-4 me-sm-4">
                                            <p className="mb-0 pt-3" style={{ color: '#F0A76F' }}>Phone</p>
                                            <p className="mb-0" style={{ color: '#a2669a' }}>03 5432 1234</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <EmailIcon className='mb-1' style={{ color: '#F0A76F' }} />
                                        <div className="ms-2 mb-3 me-lg-4 me-sm-4">
                                            <p className="mb-0 pt-3" style={{ color: '#F0A76F' }}>EMAIL</p>
                                            <p className="mb-0 " style={{ color: '#a2669a' }}>kairafashionstore@oss.com</p>
                                        </div>
                                    </div>
                                </div>
 
                            </form>
                        </div>
                    </div>
                    <div className='col-md-12 col-lg-6 col-sm-6 mt-5 my-5 order-md-1 order-sm-1 order-lg-2  order-xl-2 order-1'>
                        <div className="embed-responsive embed-responsive-16by9 " style={{ height: '400px', width: '100%' }}>
                            <iframe className='embed-responsive-item' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.3618443133473!2d145.03430987530416!3d-37.851823036213155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64208ca69a5c3%3A0xf0b8648cb614fd08!2s201%2F14%20Elizabeth%20St%2C%20Malvern%20VIC%203144%2C%20Australia!5e0!3m2!1sen!2sin!4v1713868592580!5m2!1sen!2sin" style={{ width: '100%', height: '100%', border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}