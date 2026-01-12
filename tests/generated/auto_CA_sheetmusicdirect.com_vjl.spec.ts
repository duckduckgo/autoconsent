import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_sheetmusicdirect.com_vjl', ['https://www.sheetmusicdirect.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
