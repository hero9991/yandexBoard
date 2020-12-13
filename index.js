const M = prompt('Введите высоту доски')
const N = prompt('Введите ширину доски')
const a = []
for (let i = 0; i < M; i++) {
    a.push([])
    for (let j = 0; j < N; j++) {
        a[i].push(Math.round(Math.random()))
    }
}
let program = () => {
    console.log(a)
    let count = 0
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            i !== 0 && j !== 0 && a[i - 1][j - 1] && count++;
            j !== 0 && a[i][j - 1] && count++;
            i !== 0 && a[i - 1][j] && count++;
            i !== M - 1 && j !== N - 1 && a[i + 1][j + 1] && count++
            i !== M - 1 && a[i + 1][j] && count++
            j !== N - 1 && a[i][j + 1] && count++
            i !== 0 && j !== N - 1 && a[i - 1][j + 1] && count++
            j !== 0 && i !== M - 1 && a[i + 1][j - 1] && count++

            if (count < 2 || count > 3 && a[i][j] === 1) a[i][j] = 0
            if (count === 3 && a[i][j] === 0) a[i][j] = 1
            count = 0
        }
    }
}
if(!isNaN(M) && !isNaN(N)){
setInterval(program, 1000)
program()
} else alert ('введены некорректные данные')