import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_consumentenbond.nl_dg7', ['https://www.consumentenbond.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
