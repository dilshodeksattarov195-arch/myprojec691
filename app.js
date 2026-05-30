const searchVenderConfig = { serverId: 7353, active: true };

const searchVenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_7353() {
    return searchVenderConfig.active ? "OK" : "ERR";
}

console.log("Module searchVender loaded successfully.");