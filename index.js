const express = require('express');
const { Firestore } = require('@google-cloud/firestore');


const firestore = new Firestore({
  projectId: 'ecstatic-cosmos-387220',
  keyFilename: './Resources/gcloud.json',
});

const docRef = firestore.collection('kafka');

addDocument = record => docRef.add( record)

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.post('/', (req, res) => {
  addDocument(req.body);
res.send('Done');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 