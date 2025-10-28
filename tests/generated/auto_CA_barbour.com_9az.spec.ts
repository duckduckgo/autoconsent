import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_barbour.com_9az', ['https://www.barbour.com/row/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
