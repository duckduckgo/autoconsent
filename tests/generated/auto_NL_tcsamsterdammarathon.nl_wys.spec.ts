import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tcsamsterdammarathon.nl_wys', ['https://www.tcsamsterdammarathon.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
