// https://leetcode.com/problems/roman-to-integer/

function romanToInt(s: string): number {

    const VALUES = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    let valorFinal = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        valorFinal += VALUES[s[i] as keyof typeof VALUES]
        if (i > 0 && VALUES[s[i] as keyof typeof VALUES] > VALUES[s[i - 1] as keyof typeof VALUES]) {
            valorFinal -= VALUES[s[i - 1] as keyof typeof VALUES];
            i--;
        }
    }
    return valorFinal;
}

console.log(romanToInt("MCMXCIV"));

export { }