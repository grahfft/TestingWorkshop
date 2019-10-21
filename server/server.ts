import express from 'express';

const app = express()
const port = 4000
  
app.get('/', (req, res) => res.send(`🌈 This thang LIT on port ${port} 🌈`));

app.listen(port, async () => {
    console.log(`🌈 This thang LIT on port ${port} 🌈`);
});
