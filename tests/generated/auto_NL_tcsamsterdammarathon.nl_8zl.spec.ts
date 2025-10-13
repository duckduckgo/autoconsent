import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tcsamsterdammarathon.nl_8zl', ['https://www.tcsamsterdammarathon.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
