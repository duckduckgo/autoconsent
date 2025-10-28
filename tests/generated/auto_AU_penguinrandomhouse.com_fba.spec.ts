import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_penguinrandomhouse.com_fba', ['https://www.penguinrandomhouse.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
