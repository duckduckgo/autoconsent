import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_calq.gouv.qc.ca_wg4', ['https://www.calq.gouv.qc.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
