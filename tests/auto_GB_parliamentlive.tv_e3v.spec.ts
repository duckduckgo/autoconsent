import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_parliamentlive.tv_e3v', ['https://parliamentlive.tv/Commons'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
