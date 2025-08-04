import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_studyladder.com_hy4', ['https://www.studyladder.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
