import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_careers.bcg.com_94d', ['https://careers.bcg.com/global/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
