import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_weareteachers.com_yga', ['https://www.weareteachers.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
