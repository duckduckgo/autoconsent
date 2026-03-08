import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_banking.innovationcu.ca_dv5', ['https://banking.innovationcu.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
