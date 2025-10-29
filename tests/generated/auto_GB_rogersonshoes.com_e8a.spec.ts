import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rogersonshoes.com_e8a', ['https://www.rogersonshoes.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
