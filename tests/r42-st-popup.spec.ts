import generateCMPTests from '../playwright/runner';

generateCMPTests('r42-st-popup', ['https://www.randstad.nl/', 'https://www.tempo-team.nl/', 'https://www.bmc.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
