import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_annales2maths.com_pdu', ['https://www.annales2maths.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
