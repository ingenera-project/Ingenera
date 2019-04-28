const { Missions } = require('../../../Database/missionsSchema');

asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index);
    }

}

globalSerch = async (object) => {
    return await Missions.find(object);
}

unique = (array) => {
    var flags = [], output = [], l = array.length, i;
    for (i = 0; i < l; i++) {
        if (flags[array[i]._id]) continue;
        flags[array[i]._id] = true;
        output.push(array[i]);
    }
    return output
}


escapeRegex = (text) => {
    console.log(text)
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};



flatten = (arrays) => {
    let arr = [];
    if (!Array.isArray(arrays)) {
        arr.push(arrays)
    } else {

        for (let i = 0; i < arrays.length; i++) {
            arr = arr.concat(flatten(arrays[i]));
        }
    }
    return arr;

}
module.exports = {
    flatten,
    escapeRegex,
    asyncForEach,
    globalSerch,
    unique
}