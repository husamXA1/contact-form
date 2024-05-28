import successCheck from '../assets/images/icon-success-check.svg'

export default function SuccessMessage({show}:{show : boolean}) {
    return (
        <div className={`success-message ${show?"on":""}`}>
            <p className='fs-5 mt-2'><img src={successCheck} alt="checkmark" className='me-2' /><b>Message Sent!</b></p>
            <p>Thanks for completing the form. We'll be in touch soon!</p>
        </div>
    )
}