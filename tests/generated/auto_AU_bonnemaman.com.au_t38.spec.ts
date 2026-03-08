import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bonnemaman.com.au_t38', ['https://bonnemaman.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
