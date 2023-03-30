import React from "react"
import "../../index.css"
import "../../styles.css"
// import about1 from "../../assets/img/bg-map.png"
import { Parallax } from "react-parallax";
import about2 from "../../assets/img/about1.jpg"
import Newsletter from "../About/Newsletter";
// import aboutx from "../../assets/img/about1.jpg"


// const links = [
//     { name: 'Open roles', href: '#' },
//     { name: 'Internship program', href: '#' },
//     { name: 'Our values', href: '#' },
//     { name: 'Meet our leadership', href: '#' },
//   ]
const insideStyles = {
    // background: "black",
    padding: 20,
    position: "absolute",
    top: "40%",
    left: "10%",
  };
  
  export default function Privacy() {
    return (
        <>
      <div className="relative isolate overflow-hidden pb-10">
       
        <Parallax blur={{ min: -3, max:5 }} className="parallaxdiv">
            <div className="parallaxdiv">
                <div style={insideStyles}>
                    <h2 className="text-4xl font-bold tracking-tight text-teal-800 sm:text-6xl">Terms and Conditions</h2>
                    {/* <p className="mt-6 text-2xl leading-8 text-indigo-600">THE CREDITKLICK STORY</p> */}
                </div>
            </div>
        </Parallax>
        
      

      
      </div>


   


<div className="max-lg p-5 bg-white rounded-xl overflow-hidden lg:max-2xl">
  <div className="lg:flex">
    
    <div className="p-4">
    <p className="text-red-700  text-3xl font-semibold"> Privacy Policy Changes
</p><br></br>
<p className="text-2xl font-semibold ">Creditklick may amend the policy from time to time.</p> <br></br>
    <p className="text-2xl lg:text-4xl font-semibold text-teal-800">CONSENT IN RELATION TO ACCESS TO CREDIT INFORMATION THROUGH EXPERIAN</p> <br></br>
      {/* <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a> */}
      <p className="text-sky-700 ">This End User Agreement <span className="font-semibold"> (the "Agreement") </span>is made between you <span className="font-semibold">(the "User" or "You")</span> and CreditKlick<span className="font-semibold"> (IMSPL) (Incredibile Management Servic Pvt ltd) </span>, a private limited company having its registered office at _<span className="font-semibold"> ("CreditKlick (IMSPL)", "Us" or "We", which term shall include its successors and permitted assigns)</span>. The User and CreditKlick <span className="font-semibold">(IMSPL)</span>  shall be collectively referred to as the "Parties" and individually as a "Party".</p> <br/> <br/>
   <p className="text-gray-700">You hereby consent to CreditKlick (IMSPL) being appointed as your authorised representative to receive your Credit Information on an ongoing basis for upto a period of 6 months from Experian for the purpose of _ using the Credit Information for evaluation of creditworthiness, providing access to credit, enable credit decisions, it’s servicing, create innovative solutions, offerings, enhancing customer experience while availing financial products and services ("End Use Permitted Purpose").</p>
   <br/> <br/>
   <p className="text-gray-700 font-semibold">BY EXECUTING THIS AGREEMENT / CONSENT FORM, YOU ARE EXPRESSLY AGREEING TO ACCESS THE EXPERIAN CREDIT INFORMATION REPORT AND CREDIT SCORE, AGGREGATE SCORES, INFERENCES, REFERENCES AND DETAILS (AS DEFINED BELOW)(TOGETHER REFERRED AS "CREDIT INFORMATION"). YOU HEREBY ALSO CONSENT TO SUCH CREDIT INFORMATION BEING PROVIDED BY EXPERIAN TO YOU AND CreditKlick (IMSPL) BY USING EXPERIAN TOOLS, ALGORITHMS AND DEVICES AND YOU HEREBY AGREE, ACKNOWLEDGE AND ACCEPT THE TERMS AND CONDITIONS SET FORTH HEREIN.</p>
   
   <p className="text-rose-700 mt-12 font-semibold">Terms and Conditions:
</p><br></br>
<p className="text-2xl text-teal-800 font-semibold ">Information Collection, Use, Confidentiality, No-Disclosure and Data Purging</p>
<p className="text-gray-700 mt-4 ">CreditKlick (IMSPL) shall access your Credit Information as your authorized representative and CreditKlick (IMSPL) shall use the Credit Information for limited End Use Purpose consisting of and in relation to the services proposed to be availed by You from CreditKlick (IMSPL). We shall not aggregate, retain, store, copy, reproduce, republish, upload, post, transmit, sell or rent the Credit Information to any other person and the same cannot be copied or reproduced other than as agreed herein and in furtherance to CICRA.
<br/><br/>
The Parties agree to protect and keep confidential the Credit Information.
<br/><br/>
The Credit Information shared by you, or received on by us on your behalf shall be destroyed, purged, erased promptly within 1 (one) Business Day of upon the completion of the transaction/ End Use Permitted Purpose for which the Credit Information report was procured, this period not being longer than 6 months/ 6 months from the date of consent from You.

</p>

<p className="text-2xl text-teal-800 mt-12 font-semibold ">Governing Law and Jurisdiction</p>
<p className="text-gray-700 mt-4">

The relationship between You and CreditKlick (IMSPL) shall be governed by laws of India and all claims or disputes arising there from shall be subject to the exclusive jurisdiction of the courts of DELHI.

</p>
  
<p className="text-2xl text-teal-800 mt-12 font-semibold ">Definitions:</p>

<p className="text-gray-700 mt-4">

Capitalised terms used herein but not defined above shall have the following meanings:
<span className="text-bold">
"Business Day" </span>means a day (other than a public holiday) on which banks are open for general business in DELHI.
<span className="text-bold">
"Credit Information Report"</span> means the credit information / scores/ aggregates / variables / inferences or reports which shall be generated by Experian;
<span className="text-bold">
"Credit Score"</span> means the score which shall be mentioned on the Credit Information Report which shall be computed by Experian. "CICRA" shall mean the Credit Information Companies (Regulation) Act, 2005 read with the Credit Information Companies Rules, 2006 and the Credit Information Companies Regulations, 2006, and shall include any other rules and regulations prescribed thereunder.

PLEASE READ THE ABOVE MENTIONED TERMS AND CONDITIONS AND CLICK ON "AGREE AND CONTINUE" ON THE JUPITER APP TO COMPLETE THE AUTHORISATION PROCESS/ FOR SHARING OF YOUR CREDIT INFORMATION BY EXPERIAN WITH CLIENT IN ITS CAPACITY AS YOUR AUTHORISED REPRESENTATIVE.
<span className="text-bold">
** This document is an electronic record in terms of the Information Technology Act, 2000 and Rules made there under, and the amended provisions pertaining to electronic records
</span>
</p>


    </div>
   
    
  </div>
</div>

   

    <Newsletter/>
</>
    )
  }
  