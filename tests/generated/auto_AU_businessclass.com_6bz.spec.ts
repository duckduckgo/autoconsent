import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_businessclass.com_6bz', ['https://www.businessclass.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
