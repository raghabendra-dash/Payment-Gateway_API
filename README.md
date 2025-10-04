## PhonePe-Gateway-System

  
  In today's digital world online payments are at the heart of digital commerce. It provides a secure and efficient payment system which is essential for maintaining trust and ensuring smooth business operations. The project demonstrates the integration of a payment gateway using Node.js, Express, and MongoDB. The system allows the creation of payment orders and verification of payments.


### Features :

  This payment gateway system offers a secure and reliable solution for handling online transactions, ensuring that payments are processed with high-level encryption and fraud prevention through signature verification. This API-based system can be easily integrated with any frontend technology. It ensures a smooth checkout experience with order creation and payment verification.
  
---
## Live Documentation
[Notion Docs-Click](https://payment-integration.notion.site/282cfd66164b804589b0c1d1b46d3438?v=282cfd66164b8030a00b000c4da9324a&pvs=143)

---
### Dependencies :

 - Node.js

 - MongoDB

 - Razorpay Account (for API keys)

 - Environment variables for Razorpay API credentials: [test_purpose]

   --> `RAZORPAY_API_KEY : rzp_test_JOiND79xc9A7vE`
   
   --> `RAZORPAY_API_SECRET : Pex5qK2p9McIItOXYUy0R5f2`


### API Endpoints :

 1. Checkout (Create Order)

        Endpoint: `http://localhost:4000/api/checkout`

        Method: `POST`
    
    > This endpoint creates an order using Razorpay.

  - Request Body:


        {

           "amount": 500 // Amount in INR 

         }`
 
  - Response:

     (SUCCESS)-

     `{
        "success": true,
        "order": {
          "id": "order_Owla3eqsYspyiU",
          "amount": 50000,
          "currency": "INR"
         }
      }`

     (FAILURE)-
       
      `{
        "success": false,
        "message": "Server Error"
      }`

    

 2. Payment Verification

      Endpoint: `http://localhost:4000/api/paymentverification`

      Method: `POST`
    

  > This endpoint verifies the payment signature provided by Razorpay to ensure the transaction's authenticity.


  

   **For generating signature run command :** `node testGenerateSignature`
  
  
  - Request Body :
    
    
       `{
         "razorpay_order_id": "order_Owla3eqsYspyiU",
                                       "razorpay_payment_id": "pay_test_id",
                        "razorpay_signature":  "d68106a5caea412f25454e4e51957dc810e9b898c056f99a57359fd13c59bc98"
                                                                                                               }`


   - Response :

     (SUCCESS)-
     
      `{
          "success": true,
          "message": "Payment verified successfully"
       }` 
      

     (FAILURE)-

      `{
          "success": false,
          "message": "Server Error"
       }`

     
 

### Project Setup :
  
  1. Clone the repository:
   
      `git clone https://github.com/raghabendra-dash/ `

  2. Install dependencies:
     
      `npm install`

  3. Set up environment variables:

    Create a .env file in the root directory and add the following:

       PORT= your_Port
       RAZORPAY_API_KEY= your_razorpay_key
       RAZORPAY_API_SECRET= your_razorpay_secret
       MONGO_URI= your_mongodb_uri

  4. Start the server:
    
      `npm run dev`


     
  
  5. Now the payment records will be stored in MongoDB using payment model.
   
     

  
  
  



 
 ### License :

  This project is licensed under the MIT License.


    

    






