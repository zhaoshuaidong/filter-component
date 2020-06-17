export const filterAction = {
    filterCondition: 'filter-condition'
    
}

export const createFilterAction = (payload) => ({
    type: filterAction.filterCondition,
    payload
})
