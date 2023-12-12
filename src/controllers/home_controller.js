const getHome = (req, res) => {
    res.send("home page");
};

const getAbc = (req, res) => {
    res.send('Hello World abc');
};

const getThanhNguyen = (req, res) => {
    res.render('sample.ejs');
};

module.exports = {
    getHome,
    getAbc,
    getThanhNguyen
}