import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_careers.deloitte.ca_6b2', ['https://careers.deloitte.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
