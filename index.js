const express = require('express');
const { Firestore } = require('@google-cloud/firestore');
const bodyParser = require('body-parser');


const firestore = new Firestore({
  projectId: 'ecstatic-cosmos-387220',
  keyFilename: './Resources/gcloud.json',
});

const docRef1 = firestore.collection('kafka');

addDocument = record => docRef1.add( record).then((docRef) => {
  console.log('Document added with Data: ', record);
})
.catch((error) => {
  console.error('Error adding document: ', error);
});

const app = express();
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.post('/',  (req, res) => {
  console.log(req.body);
   addDocument(req.body);
   
   setTimeout(() => { res.send('Done')} , 100) ;
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 