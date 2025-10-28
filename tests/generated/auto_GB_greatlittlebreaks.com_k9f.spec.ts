import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_greatlittlebreaks.com_k9f', ['https://www.greatlittlebreaks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
