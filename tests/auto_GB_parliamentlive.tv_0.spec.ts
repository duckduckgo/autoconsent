import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_parliamentlive.tv_0', ['https://parliamentlive.tv/Commons'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
