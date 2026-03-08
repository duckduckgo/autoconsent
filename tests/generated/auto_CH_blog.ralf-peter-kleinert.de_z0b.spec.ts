import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blog.ralf-peter-kleinert.de_z0b', ['https://blog.ralf-peter-kleinert.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
