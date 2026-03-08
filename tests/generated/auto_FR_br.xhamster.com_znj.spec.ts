import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_br.xhamster.com_znj', ['https://br.xhamster.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
