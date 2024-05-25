import SuccessMessage from './SuccessMessage'

export default function ContactForm() {
    return (
        <div className="contact-form container p-4 rounded-4 my-5">
            <h2>Contact Us</h2>

            <div className="fullname d-sm-flex gap-3">
                <div className="fname">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" id="fname" />
                    This field is required
                </div>
                <div className="lname">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" id="lname" />
                    This field is required
                </div>
            </div>

            <div className="email">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" />
                Please enter a valid email address
                This field is required
            </div>

            <div className="query-type">
                <label htmlFor="query_type">Query Type</label>
                <div className="d-sm-flex gap-3">
                    <div className="radio-btn w-100 border border-dark p-2 my-1">
                        <input type="radio" name="query_type" id="general_query" />
                        <label htmlFor="general_query">General Enquiry</label>
                    </div>
                    <div className="radio-btn w-100 border border-dark p-2 my-1">
                        <input type="radio" name="query_type" id="support_query" />
                        <label htmlFor="support_query">Support Request</label>
                    </div>
                </div>
                Please select a query type
            </div>

            <div className="message">
                <label htmlFor="message">Message</label>
                <textarea className='w-100' name="message" id="message"></textarea>
                This field is required
            </div>

            <div className="consent">
                <input type="checkbox" name="consent" id="consent" />
                <label htmlFor="consent">I consent to being contacted by the team</label>
                To submit this form, please consent to being contacted
            </div>

            <button className="btn w-100">Submit</button>

            {false && <SuccessMessage />}

        </div>
    )
}