import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dielehrerinnen.ch_4f8', ['https://dielehrerinnen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
