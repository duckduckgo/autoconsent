import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cedrat-technologies.com_5os', ['https://cedrat-technologies.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
