import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_consumentenbond.nl_306', ['https://www.consumentenbond.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
