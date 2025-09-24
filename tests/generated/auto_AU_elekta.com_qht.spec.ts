import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_elekta.com_qht', ['https://www.elekta.com/company/careers/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
