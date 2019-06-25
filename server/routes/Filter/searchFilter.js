const { Missions } = require('../../../Database/missionsSchema');
const { flatten, escapeRegex, asyncForEach, globalSerch, unique } = require('./Fuzzy-searching');

let globalArray = []

module.exports = searchFilter = async (req, res) => {
    const { skills, sections, address, jobTitle, ASAP, startDate, endDate, duration, experience } = req.query;
    if (skills) {
        let Skills = JSON.parse(skills);
        await asyncForEach(Skills, async (elem, i) => {
            globalArray.push(await globalSerch({
                keywords: {
                    $elemMatch:
                    {
                        display: elem
                    }
                }
            }))
        })
    }
    else if (sections) {
        await asyncForEach(sections, async (elem, i) => {
            globalArray.push(await globalSerch({
                sections: {
                    $elemMatch:
                    {
                        name: elem
                    }
                }
            }))

        })
    }
    else if (address) {
        const regex = new RegExp(escapeRegex(address), 'gi');
        globalArray.push(await globalSerch({
            address: regex
        }));
    }
    else if (jobTitle) {
        const regex = new RegExp(escapeRegex(jobTitle), 'gi');
        globalArray.push(await globalSerch({
            title: regex
        }));
    }
    else if (ASAP) {
        let asap = JSON.parse(ASAP)
        globalArray.push(await globalSerch({
            ASAP: asap
        }));
    }
    else if (startDate && endDate) {
        globalArray.push(await globalSerch({
            startDate: { $gte: startDate }, endDate: { $lte: endDate }
        }));
    }
    else if (duration) {
        globalArray.push(await globalSerch({
            duration: { $gte: duration }
        }));
    }
    else if (experience) {
        globalArray.push(await globalSerch({
            experience
        }));
    }

    let flatArray = await flatten(globalArray);

    let uniqueFilter = await unique(flatArray);

    res.send(uniqueFilter)
}





