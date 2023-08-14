const express = require('express');
const { Firestore } = require('@google-cloud/firestore');
const bodyParser = require('body-parser');
const avro = require('avsc');

const schema = {
  type: 'record',
  name: 'User',
  fields: [
    { name: 'ff5', type: 'string' },
    { name: 'sff', type: 'string' }
  ]
};


const firestore = new Firestore({
  projectId: 'ecstatic-cosmos-387220',
  keyFilename: './Resources/gcloud.json',
});

const docRef1 = firestore.collection('kafka');

addDocument = record => docRef1.add( record).then((docRef) => {
  console.log('Document added with Data: ', record);
})

const app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello, Express!');
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
 