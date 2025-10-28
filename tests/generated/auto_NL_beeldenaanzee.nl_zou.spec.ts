import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_beeldenaanzee.nl_zou', ['https://www.beeldenaanzee.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
