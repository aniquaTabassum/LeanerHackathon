// To run it: node javascript-nodejs-receipt-ocr.js
console.log("=== Node.js Receipt OCR Demo - Need help? Email support@asprise.com ===");

/*
var receiptOcrEndpoint = 'https://ocr.asprise.com/api/v1/receipt';
var imageFile = 'Walmart.png'; // Modify this to use your own file if necessary

var fs = require('fs');
var request = require('request');
request.post({
  url: receiptOcrEndpoint,
  formData: {
    client_id: 'TEST',        // Use 'TEST' for testing purpose
    recognizer: 'auto',       // can be 'US', 'CA', 'JP', 'SG' or 'auto'
    ref_no: 'ocr_nodejs_123', // optional caller provided ref code
    file: fs.createReadStream(imageFile) // the image file
  },
}, function(error, response, body) {
  if(error) {
    console.error(error);
  }
  console.log(body); // Receipt OCR result in JSON
});

*/

// JSON BODY retrieved from the api call
var JsonBody = {
  "ocr_type" : "receipts",
  "request_id" : "P_38.32.48.2_lfprttv0_9mn",
  "ref_no" : "ocr_nodejs_123",
  "file_name" : "Walmart.png",
  "request_received_on" : 1679857576813,
  "success" : true,
  "image_width" : 898,
  "image_height" : 970,
  "image_rotation" : 0,
  "recognition_completed_on" : 1679857577689,
  "receipts" : [ {
    "merchant_name" : "Walmart Money Center",
    "merchant_address" : "2165 Winchester Rd NE, Huntsville, AL 35811, USA",
    "merchant_phone" : "+1 256-716-6773",
    "merchant_website" : null,
    "merchant_tax_reg_no" : null,
    "merchant_company_reg_no" : null,
    "region" : null,
    "mall" : null,
    "country" : "US",
    "receipt_no" : "04031",
    "date" : "2019-06-05",
    "time" : null,
    "items" : [ {
      "amount" : 1.78,
      "category" : null,
      "description" : "Zuchinni Green F",
      "flags" : " T",
      "qty" : "0.778 kg",
      "remarks" : null,
      "tags" : "Food",
      "unitPrice" : null
    }, {
      "amount" : 0.94,
      "category" : null,
      "description" : "Banana",
      "flags" : " X",
      "qty" : "4",
      "remarks" : null,
      "tags" : "Food",
      "unitPrice" : null
    }, {
      "amount" : 3.97,
      "category" : null,
      "description" : "Chicken Breast",
      "flags" : " X",
      "qty" : "2 lb",
      "remarks" : null,
      "tags" : "Food",
      "unitPrice" : null
    }, {
      "amount" : 1.62,
      "category" : null,
      "description" : "Chicken Stock",
      "flags" : " X",
      "qty" : "1 lb",
      "remarks" : null,
      "tags" : "Food",
      "unitPrice" : null
    }, {
      "amount" : 1.97,
      "category" : null,
      "description" : "Potatoes",
      "flags" : " X",
      "qty" : "4 lb",
      "remarks" : null,
      "tags" : "Food",
      "unitPrice" : null
    },
    {
      "amount" : 1.97,
      "category" : null,
      "description" : "Broccolli",
      "flags" : " X",
      "qty" : "4 lb",
      "remarks" : null,
      "tags" : "Food",
      "unitPrice" : null
    } ],
    "currency" : "USD",
    "total" : 11.21,
    "subtotal" : 10.28,
    "tax" : 0.93,
    "service_charge" : null,
    "tip" : null,
    "payment_method" : "cash",
    "payment_details" : null,
    "credit_card_type" : null,
    "credit_card_number" : null,
    "ocr_text" : "  Walmart\n  Save money. Live better.\n             SUPERCENTER\n   256-716-6773 Mgr MARCUS WILLIAMS\n ST# 07324 OP# 009045 TE# 45 TR# 04031\n REDUCED TO CLEAR        WAS 2.97\n DONUTS      029907690297 F      1.78 T\n XTRACLEAN T 003500055677        0.94 X\n GOOF OFF 60Z 009394500661       3.97 X\n COLGATE TP  003500051091        1.62 X\n GENERIC ALK 001280052837        1.97 X\n                   SUBTOTAL     10.28\n         TAX 1    9.000 %        0.93\n                      TOTAL     11.21\n                 CASH TEND      11.21\n                 CHANGE DUE      0.00\n            # ITEMS SOLD 5\n     TC# 7078 7629 7444 5788 2176\n        06/05/19      01:56:28",
    "ocr_confidence" : 96.60,
    "width" : 793,
    "height" : 889,
    "avg_char_width" : 20.4752,
    "avg_line_height" : 19.878,
    "category" : "others/finance",
    "source_locations" : {
      "date" : [ [ {
        "y" : 907,
        "x" : 215
      }, {
        "y" : 907,
        "x" : 395
      }, {
        "y" : 932,
        "x" : 395
      }, {
        "y" : 932,
        "x" : 215
      } ] ],
      "total" : [ [ {
        "y" : 627,
        "x" : 699
      }, {
        "y" : 627,
        "x" : 809
      }, {
        "y" : 645,
        "x" : 809
      }, {
        "y" : 645,
        "x" : 699
      } ] ],
      "receipt_no" : [ [ {
        "y" : 320,
        "x" : 722
      }, {
        "y" : 320,
        "x" : 829
      }, {
        "y" : 344,
        "x" : 829
      }, {
        "y" : 344,
        "x" : 722
      } ] ],
      "subtotal" : [ [ {
        "y" : 560,
        "x" : 699
      }, {
        "y" : 560,
        "x" : 809
      }, {
        "y" : 579,
        "x" : 809
      }, {
        "y" : 579,
        "x" : 699
      } ] ],
      "doc" : [ [ {
        "y" : -2,
        "x" : 15
      }, {
        "y" : -2,
        "x" : 887
      }, {
        "y" : 975,
        "x" : 887
      }, {
        "y" : 975,
        "x" : 15
      } ] ],
      "tax" : [ [ {
        "y" : 593,
        "x" : 721
      }, {
        "y" : 592,
        "x" : 807
      }, {
        "y" : 612,
        "x" : 807
      }, {
        "y" : 613,
        "x" : 721
      } ] ],
      "merchant_phone" : [ [ {
        "y" : 254,
        "x" : 106
      }, {
        "y" : 254,
        "x" : 377
      }, {
        "y" : 280,
        "x" : 377
      }, {
        "y" : 280,
        "x" : 106
      } ] ]
    }
  } ]
}
var json = {"name": "Peter", "age": 22, "country": "United States"}
//var extractedBody = JSON.parse(test)
//var obj = JSON.parse(json);

JsonBody.receipts[0].items.forEach( x => console.log(x.description + " "+x.qty))
