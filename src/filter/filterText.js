export default function filterText(data, text) {
    if(text === ''){
        return data;
    }else {
        return data.filter(item => item.name.includes(text))
    }
}