import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_psychcentral.com_23b', ['https://psychcentral.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
