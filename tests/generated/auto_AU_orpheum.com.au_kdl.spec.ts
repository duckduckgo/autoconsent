import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_orpheum.com.au_kdl', ['https://www.orpheum.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
