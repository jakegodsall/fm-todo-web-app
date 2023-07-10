const filterActive = (list) => {
    return list.filter((item) => {
        return !item.complete;
    });
};

const filterCompleted = (list) => {
    return list.filter((item) => {
        return item.complete;
    });
};

export { filterActive, filterCompleted };
