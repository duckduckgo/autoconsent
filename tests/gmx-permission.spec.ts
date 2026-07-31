import generateCMPTests from '../playwright/runner';

generateCMPTests('gmx-permission', ['https://support.gmx.com/'], {
    mobile: true,
});
