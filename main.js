import input from 'input';

function isEven(num) {
    const val = (num % 2);
    if (val == 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }

}

async function main() {
    const maxStr = await input.text('Enter a number');
    const max = Number(maxStr);
    let i = 0;

    while (i < max) {
        isEven(i);
        i += 1;
    }

}

main();