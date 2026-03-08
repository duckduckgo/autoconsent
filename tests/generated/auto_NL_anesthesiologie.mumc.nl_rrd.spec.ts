import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_anesthesiologie.mumc.nl_rrd', ['https://anesthesiologie.mumc.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
