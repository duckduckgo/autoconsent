import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_driessenstoffen.nl_6x6', ['https://driessenstoffen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
