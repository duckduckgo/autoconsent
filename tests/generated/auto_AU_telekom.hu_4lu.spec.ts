import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_telekom.hu_4lu', ['https://www.telekom.hu/lakossagi'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
