import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_businessclass.com_5sf', ['https://www.businessclass.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
