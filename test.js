const MongoClient = require('mongodb').MongoClient
const url = "mongodb+srv://shopOnline:1234@shop.b3f1w.mongodb.net/tb_1?retryWrites=true&w=majority"

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("tb_1");
    dbo.collection('postproducts').aggregate([
        {
            $lookup:
            {
                from: 'checkouts',
                localField: '_id',
                foreignField: '_id',
                as: 'orderdetails'
            }
        }
    ]).toArray(function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});