import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_paramountplants.co.uk_0', ['https://www.paramountplants.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
