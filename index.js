const express = require('express');
const { Firestore } = require('@google-cloud/firestore');
const bodyParser = require('body-parser');
const avro = require('avsc');

// const avroSchema = {
//   type: 'record',
//   name: 'Order',
//   fields: [
//     { name: 'store_id', type: 'int' },
//     {
//       name: 'order_lines',
//       type: {
//         type: 'array',
//         items: {
//           type: 'record',
//           name: 'OrderLine',
//           fields: [
//             { name: 'product_id', type: 'int' },
//             { name: 'category', type: 'string' },
//             { name: 'quantity', type: 'int' },
//             { name: 'unit_price', type: 'float' },
//             { name: 'net_price', type: 'float' },
//           ],
//         },
//       },
//     },
//   ],
// };
// const type = avro.parse(avroSchema);


// const firestore = new Firestore({
//   projectId: 'cloudtest-396310',
//   keyFilename: './Resources/gcloud.json',
// });

// const docRef1 = firestore.collection('kafka');

// addDocument = record => docRef1.add( record).then((docRef) => {
//   console.log('Document added with Data: ', record);
// })

const app = express();
app.use(bodyParser.text());


app.get('/', (req, res) => {
  res.send("Hello");
});

app.post('/',  (req, res) => {
  console.log(req.body);
  res.status(200).send('Done') ;
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 