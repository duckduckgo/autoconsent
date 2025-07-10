import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_midwesterndoctor.com_w0c', ['https://www.midwesterndoctor.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
