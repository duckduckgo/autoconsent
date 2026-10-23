import generateCMPTests from '../playwright/runner';

generateCMPTests('e-grip', ['https://www.bunnig.nl/', 'https://www.dle.nl/']);

// older script version: saving the choice reloads the page before the self-test runs
generateCMPTests('e-grip', ['https://www.deslegte.com/', 'https://www.boeken.com/'], {
    testSelfTest: false,
});
