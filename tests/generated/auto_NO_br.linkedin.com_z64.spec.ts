import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_br.linkedin.com_z64', ['https://br.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
