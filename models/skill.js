const skills = [
    {skill: 'javascript', id: 1},
    {skill: 'ruby', id: 2},
    {skill: 'python', id: 3},
    {skill: 'fire', id: 4}
  
];

module.exports = {
    getAll,
    getOne, 
    create,
    deleteOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(s => s.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
    // console.log(skills)
}
function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}