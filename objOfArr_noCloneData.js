const seen = new Set();
var x = [
    {nama:'Andi', usia:23},
    {nama:'Budi', usia:22},
    {nama:'Andi', usia:12},
    {nama:'Budi', usia:12},
    {nama:'Caca', usia:21},
]
const filteredX = x.filter(el => {
    const duplicate = seen.has(el.nama);
    seen.add(el.nama);
    return !duplicate;
});
console.log(filteredX)