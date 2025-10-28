import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_gq-magazine.co.uk_7jj', ['https://www.gq-magazine.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
