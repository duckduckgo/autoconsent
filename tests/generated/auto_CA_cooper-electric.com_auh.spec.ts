import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cooper-electric.com_auh', ['https://www.cooper-electric.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
