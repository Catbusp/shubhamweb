import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import appData from "@data/app.json";
import Head from "next/head";
import { useRef } from "react";
import emailjs from '@emailjs/browser';;

const Contact = () => {
    const form = useRef();
    useEffect(() => {
        document.title = 'Contact Us - Video Production Company in Delhi NCR | Content Foundry';
      }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hsj3gyh', 'template_zlf6nnl', form.current, {
        publicKey: 'Bh_9DyMEo8DkVXycy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };

  const faqData = {
    "title": "Client’s FAQ",
    "subtitle": "Solving Business Problems <br>is An Everyday",
    "items": [
        {
            "title": "Secure Management and Workforce?",
            "text": "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi."
        },
        {
            "title": "Logistics Workforce on Track?",
            "text": "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi."
        },
        {
            "title": "Online Courses & Certification?",
            "text": "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi."
        },
        {
            "title": "Figures and data representative of an organization's?",
            "text": "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi."
        }
    ]
  }

  return (
    <div>
        <Head>
            <title>Contact Us - Video Production Company in Delhi NCR | Content Foundry</title>
            <meta property="og:title" content="contact us - video production company | content foundry" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.contentfoundry.in/contact " />
            <meta property="og:image" content="https://www.contentfoundry.in/images/logo-main.png" />
        </Head>
    <Layouts>
        {/* <PageBanner pageTitle={"YOU’RE HERE RIGHT ON TIME"} pageDesc={"DROP US A MESSAGE."} /> */}

        <PageBanner pageTitle={""} pageDesc={""} />

        {/* Onovo Contact Info */}
        <section className="onovo-section gap-bottom-80 ">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">

                        {/* Heading */}
                        <div className="onovo-text gap-bottom-40">
                            <h4>Planned to Discuss Your Business With Us?</h4>
                            Step In And Share Your Details
                        </div>

                        {/* Form */}
                        <div className="onovo-form">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Full Name" 
                                              type="text" 
                                              name="name" 
                                              required="required"
                                            //   onChange={handleChange}
                                            //   onBlur={handleBlur}
                                            //   value={values.name}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Email Address" 
                                              type="email" 
                                              name="email" 
                                              required="required"
                                            //   onChange={handleChange}
                                            //   onBlur={handleBlur}
                                            //   value={values.email}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Phone Number" 
                                              type="tel" 
                                              name="tel" 
                                              required="required"
                                            //   onChange={handleChange}
                                            //   onBlur={handleBlur}
                                            //   value={values.tel}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <textarea 
                                              placeholder="Message" 
                                              name="message"
                                              required="required"
                                            //   onChange={handleChange}
                                            //   onBlur={handleBlur}
                                            //   value={values.message}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <button type="submit" className="onovo-btn onovo-hover-btn">
                                                <span>Send Message</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        {/* <Formik
                            initialValues = {{ email: '', name: '', tel: '', message: '' }}
                            validate = { values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit = {( values, { setSubmitting } ) => {
                                const form = document.getElementById("contactForm");
                                const status = document.getElementById("contactFormStatus");
                                const data = new FormData();

                                data.append('name', values.name);
                                data.append('tel', values.tel);
                                data.append('email', values.email);
                                data.append('message', values.message);

                                fetch(form.action, {
                                    method: 'POST',
                                    body: data,
                                    headers: {
                                        'Accept': 'application/json'
                                    }
                                }).then(response => {
                                    if (response.ok) {
                                        status.innerHTML = "Thanks for your submission!";
                                        form.reset()
                                    } else {
                                        response.json().then(data => {
                                            if (Object.hasOwn(data, 'errors')) {
                                                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                                            } else {
                                                status.innerHTML = "Oops! There was a problem submitting your form"
                                            }
                                        })
                                    }
                                }).catch(error => {
                                    status.innerHTML = "Oops! There was a problem submitting your form"
                                });

                                setSubmitting(false);
                            }}
                            >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                            
                            }) => (
                            <form onSubmit={handleSubmit} id="contactForm" action={appData.settings.formspreeURL} className="cform" method="post">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Full Name" 
                                              type="text" 
                                              name="name" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.name}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Email Address" 
                                              type="email" 
                                              name="email" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.email}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Phone Number" 
                                              type="tel" 
                                              name="tel" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.tel}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <textarea 
                                              placeholder="Message" 
                                              name="message"
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.message}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <button type="submit" className="onovo-btn onovo-hover-btn">
                                                <span>Send Message</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>

                                <div className="form-status alert-success" id="contactFormStatus" />
                            </form>
                            )}
                            </Formik> */}
                        </div>

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">

                        {/* Contact Info */}
                        <div className="onovo-contact-info onovo-text-white">
                            <ul>
                                <li>
                                    <h5>Contact Info</h5>
                                    <a href="tel:+919811346401" className="onovo-lnk lnk--white" target="_blank">+91 98113 46401</a><br/>
                                    <a href="mailto:info@contentfoundry.in" className="onovo-lnk lnk--white" target="_blank">info@contentfoundry.in</a>
                                    
                                    <div className="onovo-social-1 onovo-social-active" style={{"marginTop": "10px"}}>
                                        <ul>
                                            {appData.social.map((item, key) => (
                                            <li key={`contact-social-item-${key}`}>
                                                <a href={item.link} target="_blank" className="onovo-social-link onovo-hover-2" title={item.title}>
                                                    <i className={`icon ${item.icon}`} />
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <h5>FBD One Corporate Park</h5>
                                    <div>10th Floor, NH 44,
                                    <br/>Faridabad, Haryana 121003</div>
                                </li>
                                {/* <li>
                                    <h5>Los Angeles</h5>
                                    <div>2001 N. Clybourn Avenue Suite 202</div>
                                </li> */}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* Onovo Faq */}
        {/* <section className="onovo-section gap-top-140">
            <div className="container">

            
                <div className="onovo-heading align-center gap-bottom-40">
                    <div className="onovo-subtitle-1">
                        <span>{faqData.title}</span>
                    </div>
                    <h2 className="onovo-title-2">
                        <span dangerouslySetInnerHTML={{ __html: faqData.subtitle }} />
                    </h2>
                </div>

              
                <div className="onovo-faq-items">
                <Accordion defaultActiveKey="faq-acc-0">
                    {faqData.items.map((item, key) => (
                    <Accordion.Item key={`faq-item-${key}`} eventKey={`faq-acc-${key}`}>
                    <div key={`faq-item-${key}`} className="onovo-faq-item onovo-collapse-item">
                        <Accordion.Header>
                        <h5 className="title onovo-collapse-btn">
                            <span>{item.title}</span>
                            <i className="arrow" />
                        </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                        <div className="onovo-text">
                            <div dangerouslySetInnerHTML={{ __html: item.text }} />
                        </div>
                        </Accordion.Body>
                    </div>
                    </Accordion.Item>
                    ))}
                </Accordion>
                </div>
                
            </div>
        </section> */}
      
    </Layouts>
    </div>
  );
};
export default Contact;
