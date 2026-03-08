import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_antennagroep.nl_p51', ['https://antennagroep.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
