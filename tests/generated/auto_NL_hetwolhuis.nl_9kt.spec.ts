import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hetwolhuis.nl_9kt', ['https://www.hetwolhuis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
