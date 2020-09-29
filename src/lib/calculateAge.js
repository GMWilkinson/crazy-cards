
const calculateAge = (birthday) => {
    const d = new Date(birthday)
    var ageDifMs = Date.now() - d.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default calculateAge;