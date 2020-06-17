import filterSex from './filterSex.js';
import filterText from './filterText.js';
const config = {
    text: filterText,
    sex: filterSex
}
function assginFilter(config){
    return function(arr, state){
        for(let prop in config){
            arr = config[prop](arr, state[prop])
        }
        return arr
    }
}

const list = assginFilter(config);

export default list;