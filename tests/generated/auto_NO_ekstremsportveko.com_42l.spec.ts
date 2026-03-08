import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ekstremsportveko.com_42l', ['https://ekstremsportveko.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
