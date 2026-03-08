import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cap.cloud.sap_q6q', ['https://cap.cloud.sap/docs/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
