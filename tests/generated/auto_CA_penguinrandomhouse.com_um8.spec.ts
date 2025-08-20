import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_penguinrandomhouse.com_um8', ['https://www.penguinrandomhouse.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
