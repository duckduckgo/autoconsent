import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_career.academicwork.com_yc3', ['https://career.academicwork.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
