import React from 'react';
import aboutus from '../images/AboutUs.png';
import persone from '../images/AboutUs-Persone.png';
import icon from '../images/component.png';
import section from '../images/AboutUs-Section.png';
import fqaimage from '../images/FQA-aboutus.png';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AccordionHeader, AccordionItem, Button, AccordionBody, Accordion } from 'react-bootstrap';
import calendarIcon from '../images/akar-icons_calendar.svg';
import shoppingIcon from '../images/akar-icons_shopping-bag.svg';
import giftIcon from '../images/akar-icons_gift.svg';
import returnIcon from '../images/akar-icons_arrow-cycle.svg';
 
 
const ServiceSection = [
  {
    icon: calendarIcon,
    title: "Available 24/7",
    description: "At imperdiet dui accumsam sit amet nulla risus"
  },
  {
    icon: shoppingIcon,
    title: "Shop Online",
    description: "At imperdiet dui accumsam sit amet nulla risus"
  },
  {
    icon: giftIcon,
    title: "Special Packaging",
    description: "At imperdiet dui accumsam sit amet nulla risus"
  },
  {
    icon: returnIcon,
    title: "Free Global Returns",
    description: "At imperdiet dui accumsam sit amet nulla risus"
  },
];
 
export default function AboutUsPage() {
 
  return (
    <div style={{ overflow: 'hidden' }}>
      <div className='row  mb-2' style={{ backgroundColor: '#f1f1f0' }}>
        <div className='col-md-12 pt-2 px-4 position-relative'>
          <img src={aboutus} alt='about us not found' style={{ maxWidth: '100%' }} />
          <h4 className='aboutus-heading'> ABOUT US </h4>
        </div>
      </div>
      <div className='container'>
        <div className='row my-5'>
          <div className='col-md-6 '>
            <img src={persone} alt='about us not found' style={{ width: '100%' }} />
          </div>
          <div className="col-md-6 pt-4">
            <div className='d-flex flex-row'>
              <img className="px-1 py-1" src={icon} alt='not found' style={{ backgroundColor: '#e9c7d6', borderRadius: '10px', width: '6%', height: '6%' }} />
              <h5 className="ml-3 mx-2 pt-1">About us</h5>
            </div>
            <div className='mt-2'>
              <h4>Our Company Overview</h4>
            </div>
            <div className=''>
              <p style={{ color: '#666C89', fontWeight: 500 }}>
                Do you ever feel overwhelmed by running errands to different stores? I can help!  I'm your one-stop shop, offering a wide variety of products across various categories. Whether you're a DIY enthusiast, a fashionista, or a business on the go, I've got everything you need. Plus, with convenient online shopping and friendly, knowledgeable staff in-store, I make getting what you need a breeze. Stop by today and experience the difference - I'm your partner in getting things done!
              </p>
              <hr />
              <p style={{ color: '#666C89', fontWeight: 500 }}>
                I make getting what you need a breeze. Stop by today and experience the difference - I'm your partner in getting things done!with over 20 years of experience in the oil and petrochemical industry, we officially started our activities in the field of design, engineering, construction of refinery equipment, and the production of various motor and industrial lubricants in the year 1390 (2011)
              </p>
            </div>
            <div className='mt-3'>
              <Button className='btn px-3 py-2' style={{ backgroundColor: '#00B517', color: 'white', borderColor: '#00B517' }} >Learn More</Button>
            </div>
          </div>
        </div>
      </div>
 
      <div className='row mb-4'>
        <div className='col-md-12'>
          <img src={section} alt='not found' style={{ width: "100%", Height: 'auto', borderRadius: '10px' }} className='img-fluid' />
        </div>
      </div>
 
      <div className='container mt-5 mb-3'>
        <div className='row mt-5 mb-3'>
          <div className='col-md-6 mt-5'>
            <img src={fqaimage} alt='not found' style={{ width: '100%' }} />
          </div>
          <div className='col-md-6 mt-5'>
            <div className='d-flex flex-row'>
              <LiveHelpOutlinedIcon className='px-2 py-2' style={{ backgroundColor: '#e9c7d6', color: '#aa205e', borderRadius: '5px', fontSize: '35px' }} />
              <h5 className='px-1 pt-1'>FAQ Question</h5>
            </div>
            <div className='pt-2'>
              <h3>Frequently asked questions</h3>
            </div>
            <div className='accordion-container mt-4 ' >
              <Accordion className='py-3 mx-2 ' >
                <AccordionItem eventKey='0' className=' ' style={{ minheight: "100px" }}>
                  <AccordionHeader>Lorem Ipsum is simply dummy text of the prin....?</AccordionHeader>
                  <AccordionBody>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</AccordionBody>
                </AccordionItem>
 
                <AccordionItem eventKey='1'>
                  <AccordionHeader>Lorem Ipsum is simply dummy text of the prin....?</AccordionHeader>
                  <AccordionBody>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</AccordionBody>
                </AccordionItem>
 
                <AccordionItem eventKey='2'>
                  <AccordionHeader>Lorem Ipsum is simply dummy text of the prin....?</AccordionHeader>
                  <AccordionBody>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</AccordionBody>
                </AccordionItem>
 
                <AccordionItem eventKey='3'>
                  <AccordionHeader>Lorem Ipsum is simply dummy text of the prin....?</AccordionHeader>
                  <AccordionBody>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey='4'>
                  <AccordionHeader>Lorem Ipsum is simply dummy text of the prin....?</AccordionHeader>
                  <AccordionBody>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</AccordionBody>
                </AccordionItem>
 
              </Accordion>
 
            </div>
          </div>
          <div className='row mt-3'>
            <div className='d-flex flex-row'>
              <hr className="col-4 " />
              <h5 className='text-align-center col-4 ms-5 align-item-center' style={{ top: '-50px', color: '#757575' }}>Brands with One Stop Shop</h5>
              <hr className="col-4" />
            </div>
            <div className='row my-5'>
              {ServiceSection.map((service, index) => (
                <div key={`service_${index}`} className="col-md-6 col-lg-3">
                  <div className='text-center home-services'>
                    <img src={service.icon} alt={service.title} className='py-2' />
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
 
        </div>
      </div>
    </div>
  );
}