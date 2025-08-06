import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_businessclass.com_ifv', ['https://www.businessclass.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
