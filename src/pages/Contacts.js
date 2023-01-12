import '../assets/css/Contacts.css'


function Contacts() {
    return (
        <div className="container contact-page">
            <div className="text-center">
                <div className="row">
                    <div className="col order-1">
                        <div className="m-5"> <span className="h5">PHONE</span>
                            <div className="contact-subtext">+63 (949) 456-6027</div>
                            <div className="contact-subtext">or</div>
                            <div className="contact-subtext">+63 (949) 984-3231</div>
                        </div>
                        <div className="m-5"> <span className="h5">Email</span>
                            <div className="contact-subtext"><a href="mailto: ludyanncharisecatipon@gmail.com">ludyanncharisecatipon@gmail.com</a></div>
                        </div>
                        <div className="m-5"> <span className="h5">HOURS</span>
                            <div className="contact-subtext">Monday: 11am — 9pm</div>
                            <div className="contact-subtext">Tuesday: 11am — 9pm</div>
                            <div className="contact-subtext">Wednesday: 11am — 9pm</div>
                            <div className="contact-subtext">Thursday: 11am — 9pm</div>
                            <div className="contact-subtext">Friday: 11am — 9pm</div>
                            <div className="contact-subtext">Saturday: 11am — 9pm</div>
                            <div className="contact-subtext">Sunday: 11am — 9pm</div>
                        </div>
                        <div className="m-5"> <span className="h5">ADDRESS</span>
                            <div className="contact-subtext">B12 L1 7th Street Pacita 1 Phase 1A 4023 Pacita Complex, Philippines</div>
                        </div>
                    </div>
                    <div className="col order-2">
                        <div className="m-5"> <span className="h5"> ORDERS</span>
                            <div className="contact-subtext">To change or cancel orders, please call us or contact us through Facebook messenger.</div>
                        </div>
                        <div>
                            <iframe width="600" height="450" className="map-responsive" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=14.343356%2C%20121.059891&key=AIzaSyCWD-c3_LrppsG5eVEv9GywbldZ1hAMnzw"></iframe>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
}

export default Contacts;