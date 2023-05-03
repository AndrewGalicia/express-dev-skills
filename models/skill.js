const skills = [
    {skill: 'javascript', id: 1},
    {skill: 'ruby', id: 2},
    {skill: 'python', id: 3},
    {skill: 'fire', id: 4}
  
];

module.exports = {
    getAll,
    getOne 
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(s => s.id === id);
}