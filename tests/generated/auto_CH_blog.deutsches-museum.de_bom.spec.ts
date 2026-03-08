import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blog.deutsches-museum.de_bom', ['https://blog.deutsches-museum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
