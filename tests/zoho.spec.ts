import generateCMPTests from '../playwright/runner';

generateCMPTests('zoho', ['https://www.zoho.com/', 'https://www.zohocorp.com/', 'https://www.arattai.in/'], {
    skipRegions: ['US'],
});
