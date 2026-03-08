import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_britishacademy.flexigrant.com_jqf', ['https://britishacademy.flexigrant.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
