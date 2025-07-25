import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_informatique.nl_6xu', ['https://www.informatique.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
