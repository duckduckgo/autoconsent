import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_honeybirdette.com_6d9', ['https://www.honeybirdette.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
