import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_affluencetravels.com_vya', ['https://affluencetravels.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
