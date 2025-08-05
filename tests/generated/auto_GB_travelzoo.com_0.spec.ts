import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_travelzoo.com_0', ['https://www.travelzoo.com/uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
