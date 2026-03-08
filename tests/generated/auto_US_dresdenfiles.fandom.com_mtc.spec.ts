import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dresdenfiles.fandom.com_mtc', ['https://dresdenfiles.fandom.com/wiki/Dresden_Files'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
