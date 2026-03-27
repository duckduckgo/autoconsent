import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_rainbowls.co.uk_5je', ['https://www.rainbowls.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
