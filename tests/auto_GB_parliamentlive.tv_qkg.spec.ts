import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_parliamentlive.tv_qkg', ['https://parliamentlive.tv/Commons'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
