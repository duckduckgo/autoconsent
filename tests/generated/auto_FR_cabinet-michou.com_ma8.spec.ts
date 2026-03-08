import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cabinet-michou.com_ma8', ['https://cabinet-michou.vercel.app/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
