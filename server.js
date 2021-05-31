const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({});

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('/aboutme');
})

app.get('/aboutme', (req, res) => {
  res.render('aboutme', {
    currentPage: "aboutme",
    secondPage: "mywork",
    thirdPage: "contact"
  });
});

app.get('/mywork', (req, res) => {
  res.render('mywork', {
    currentPage: "mywork",
    secondPage: "aboutme",
    thirdPage: "contact"
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    currentPage: "contact",
    secondPage: "aboutme",
    thirdPage: "mywork"
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

