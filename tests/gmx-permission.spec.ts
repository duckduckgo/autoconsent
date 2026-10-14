import generateCMPTests from '../playwright/runner';

generateCMPTests('gmx-permission', ['https://www.gmx.com/', 'https://support.gmx.com/', 'https://www.mail.com/'], {
    mobile: true,
});
