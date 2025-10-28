import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_studentjob.ch_ql5', ['https://www.studentjob.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
