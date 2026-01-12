import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dutchitchannel.nl_hpo', ['https://www.dutchitchannel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
