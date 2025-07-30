import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_studyladder.com_xex', ['https://www.studyladder.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
