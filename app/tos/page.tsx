import React from 'react'

const TermsOfServicePage = () => {
  return (
    <div className='my-20 flex items-center justify-center w-full'>
      <div className='shadow-lg rounded-lg p-5 bg-dark1 w-[90%] max-w-[1000px] flex flex-col items-start justify-center gap-5'>
        <h1 className='my-4 text-6xl max-sm:text-4xl text-primary'>Terms of Service</h1>


        <p className='text-lg max-sm:text-sm text-light2'>
          Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Goho app operated by Goho ("us", "we", or "our").<br /><br />
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.<br /><br />
          By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
        </p>

        <h2 className='text-4xl max-sm:text-2xl text-primary'>Accounts</h2>

        <p className='text-lg max-sm:text-sm text-light2'>
          When you create an account with us, you must provide accurate, complete, and up-to-date information. You are responsible for maintaining the confidentiality of your account and password, and you agree to accept responsibility for all activities that occur under your account or password. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
        </p>

        <h2 className='text-4xl max-sm:text-2xl text-primary'>Intellectual Property</h2>
        <p className='text-lg max-sm:text-sm text-light2'>
          The Service and its original content, features, and functionality are and will remain the exclusive property of Goho and its licensors. The Service is protected by copyright, trademark, and other laws of both the Spain and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Goho.
        </p>

        {/* Add more sections here following a similar structure */}

        <h2 className='text-4xl max-sm:text-2xl text-primary'>Termination</h2>

        <p className='text-lg max-sm:text-sm text-light2'>
          We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of these Terms.<br /><br />
          All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
        </p>


        <h2 className='text-4xl max-sm:text-2xl text-primary'>Governing Law</h2>
        <p className='text-lg max-sm:text-sm text-light2'>
          These Terms shall be governed and construed in accordance with the laws of Spain, without regard to its conflict of law provisions.<br /><br />
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a
          court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between
          us regarding our Service and supersede and replace any prior agreements we might have had between us regarding the Service.
        </p>

        {/* Add "Changes" and "Contact Us" sections here */}
      </div>
    </div>
  )
}

export default TermsOfServicePage;