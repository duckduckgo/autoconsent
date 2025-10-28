import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ecoboerderij-dehaan.nl_6u1', ['https://ecoboerderij-dehaan.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
