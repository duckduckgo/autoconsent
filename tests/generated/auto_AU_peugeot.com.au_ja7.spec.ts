import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_peugeot.com.au_ja7', ['https://www.peugeot.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
