import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tcsamsterdammarathon.eu_ep9', ['https://www.tcsamsterdammarathon.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
