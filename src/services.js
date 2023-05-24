
export const formatDateTime= (dateTime) => {
    let d = new Date(dateTime);
    const formatteDateTime = d.toLocaleDateString()+' '+d.toLocaleTimeString();
    return formatteDateTime;
}
