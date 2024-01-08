const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sfahmed129:sfahmedVU1@cluster0.wdxdeg5.mongodb.net/gofoodmern?retryWrites=true&w=majority';


const mongoDB = async () => {
    await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("Connected Successfully!")
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const food_category = await mongoose.connection.db.collection("food_category");
                food_category.find({}).toArray(function (err, catData) {
                    if (err) console.log(err)
                    else {
                        global.food_items = data;
                        global.food_category = catData;
                    }
                })


            })
        }
    });
}

module.exports = mongoDB;





