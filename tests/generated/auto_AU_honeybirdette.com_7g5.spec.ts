import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_honeybirdette.com_7g5', ['https://www.honeybirdette.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
