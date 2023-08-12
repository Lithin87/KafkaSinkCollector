const express = require('express');
const { Firestore } = require('@google-cloud/firestore');

// Replace 'path/to/your/credentials.json' with the actual path to your credentials file
const firestore = new Firestore({
  projectId: 'ecstatic-cosmos-387220',
  keyFilename: './Resources/gcloud.json',
});

async function addDocument() {
  const docRef = firestore.collection('users').doc('new-user-id');

  await docRef.set({
    name: 'John Doe',
    email: 'john@example.com',
  });

  console.log('Document added!');
}

addDocument();


// const app = express();
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });

// app.post('/', (req, res) => {
//   console.warn(req.body);
// res.send('Hello, Express!');
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
 