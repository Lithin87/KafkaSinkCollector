const express = require('express');
const { Firestore } = require('@google-cloud/firestore');
const bodyParser = require('body-parser');
const avro = require('avsc');

const avroSchema = {
  type: 'record',
  name: 'Order',
  fields: [
    { name: 'store_id', type: 'int' },
    {
      name: 'order_lines',
      type: {
        type: 'array',
        items: {
          type: 'record',
          name: 'OrderLine',
          fields: [
            { name: 'product_id', type: 'int' },
            { name: 'category', type: 'string' },
            { name: 'quantity', type: 'int' },
            { name: 'unit_price', type: 'float' },
            { name: 'net_price', type: 'float' },
          ],
        },
      },
    },
  ],
};
const type = avro.parse(avroSchema);


const firestore = new Firestore({
  projectId: 'cloudtest-396310',
  keyFilename: './Resources/gcloud.json',
});

const docRef1 = firestore.collection('kafka');

addDocument = record => docRef1.add( record).then((docRef) => {
  console.log('Document added with Data: ', record);
})

const app = express();
app.use(bodyParser.text());


app.get('/', (req, res) => {

// const avroData = Buffer.from(
//   "Struct{store_id=86,order_lines=[Struct{product_id=93,category=User_2,quantity=70,unit_price=3.3829043,net_price=7.017032}, Struct{product_id=90,category=User_9,quantity=10,unit_price=8.549235,net_price=6.643399}]}", "base64");


// const decodedData = type.fromBuffer(avroData);

// const jsonData = JSON.stringify(decodedData, null, 2);
// console.log(jsonData);

  res.send("Hello");
});

app.post('/',  (req, res) => {
  console.log(req.body);
  //  addDocument(JSON.parse(req.body));

  

  res.send('Done') ;
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 