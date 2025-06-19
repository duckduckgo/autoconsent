import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_weingartz.com_3a1', ['https://www.weingartz.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
