import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_qudosbankarena.com.au_14g', ['https://qudosbankarena.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
