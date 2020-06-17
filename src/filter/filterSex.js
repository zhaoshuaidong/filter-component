export default function filterSex(data, sex){
    if(sex === 'a'){
        return data;
    }else {
        return data.filter(item => item.sex.includes(sex));
    }
}