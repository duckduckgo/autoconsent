import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dnd-5e.fandom.com_i3l', ['https://dnd-5e.fandom.com/wiki/D%26D_5e_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
