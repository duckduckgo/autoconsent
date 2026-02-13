import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cambridge-exams.ch_4a3', ['https://cambridge-exams.ch/exams-and-certifications/cambridge'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
