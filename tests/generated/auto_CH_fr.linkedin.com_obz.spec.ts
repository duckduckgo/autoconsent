import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.linkedin.com_obz', ['https://fr.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
