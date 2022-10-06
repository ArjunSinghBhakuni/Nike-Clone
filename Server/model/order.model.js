const { Schema, model } = require('mongoose');

const reqString = { type: String,  };
const reqNumber = { type: Number,  };
const reqArray = { type: Array,   };


const OrderSchema = new Schema({

    orderSummary: {
        subTotal: reqNumber,
        quantity: reqNumber,
        shipping: reqNumber,
        discount: reqNumber,
        total: reqNumber
    },
    cartProducts: [
        {
            title: reqString,
            gender: reqString,
            description: reqString,
            category: reqString,
            price: reqNumber,
            size: reqString,
            color: reqString,
            rating: reqNumber,
            img: reqArray,
            quantity: reqNumber
        }
    ],
    paymentDetails: {
        orderId: reqString,
        razorpayOrderId: reqString,
        razorpayPaymentId: reqString,
    },
    shippingDetails: {
        firstName: reqString,
        lastName: reqString,
        addressLine1: reqString,
        addressLine2: { type: String, required: false },
        locality: reqString,
        pinCode: reqNumber,
        state: reqString,
        country: reqString,
        email: reqString,
        mobile: reqNumber
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      
    }

}, {
    versionKey: false,
    timestamps: true
});

const Order = model("Order", OrderSchema);

module.exports =  Order


 