import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_deskmodder.de_55k', ['https://www.deskmodder.de/blog/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
