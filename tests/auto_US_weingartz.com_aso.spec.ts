import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_weingartz.com_aso', ['https://www.weingartz.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
