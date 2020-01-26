const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums) {
    if(x == 5) break
    console.log(`[${x}] -> ${nums[x]}`)
}

for(let x in nums) {
    if(x== 5) continue
    console.log(`[${x}] -> ${nums[x]}`)
}

// break/continue -> funcionam para switch ou for ou while

externo: // rótulo -> não use
for(a in nums) {
     for(b in nums) {
         if(a == 2 && b == 3) break externo
         console.log(`[${a}][${b}] -> ${a}, ${b}`)
     }
}

console.log('Fim!')