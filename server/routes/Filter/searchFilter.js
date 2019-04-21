const { Missions } = require('../../../Database/missionsSchema');

let resultArray = []

module.exports = searchFilter = async (req, res) => {
    const { filter } = req.query
// ["java", "node"] ["computer", "jfd"]

    let MainArray = JSON.parse(filter);
    await asyncForEach(MainArray, async (ele) => {
        resultArray = await onFinder(ele);
    })

    res.send(resultArray)

}

onFinder = async (elem) => {
    let a = await Missions.find({
         keywords: {
              $elemMatch: 
              { 
                  display: elem 
            }
             } 
            })
    return a
}

asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}
