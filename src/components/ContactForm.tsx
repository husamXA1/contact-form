export default function ContactForm() {
    return (
        <div className="contact-form container p-4 rounded-3">
            <h3>Contact Us</h3>

            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="fname" />
            This field is required

            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="lname" />
            This field is required

            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" />
            Please enter a valid email address
            This field is required

            <label htmlFor="query_type">Query Type</label>
            <input type="radio" name="query_type" id="general_query" />
            <label htmlFor="general_query">General Enquiry</label>
            <input type="radio" name="query_type" id="support_query" />
            <label htmlFor="support_query">Support Request</label>
            
            Please select a query type

            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols={30} rows={10}></textarea>
            This field is required

            <input type="checkbox" name="consent" id="consent" />
            <label htmlFor="consent">I consent to being contacted by the team</label>
            To submit this form, please consent to being contacted

            <button className="btn w-100">Submit</button>

            Message Sent!
            Thanks for completing the form. We'll be in touch soon!

        </div>
    )
}