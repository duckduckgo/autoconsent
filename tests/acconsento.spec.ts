import generateCMPTests from '../playwright/runner';

generateCMPTests('acconsento', ['https://www.pizza.it/', 'https://www.radiotoscana.it/']);

// sites with automatic page refresh enabled reload right after the click, so the self-test result is lost
generateCMPTests('acconsento', ['https://www.055firenze.it/', 'https://www.museoegizio.it/', 'https://www.antimafiaduemila.com/'], {
    testSelfTest: false,
});
