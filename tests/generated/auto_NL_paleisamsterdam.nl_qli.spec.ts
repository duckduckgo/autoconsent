import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_paleisamsterdam.nl_qli', ['https://www.paleisamsterdam.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
