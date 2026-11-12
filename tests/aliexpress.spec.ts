import generateCMPTests from '../playwright/runner';

generateCMPTests('aliexpress', ['https://es.aliexpress.com/', 'https://nl.aliexpress.com/', 'https://pl.aliexpress.com/']);

generateCMPTests('aliexpress', ['https://pl.aliexpress.com/', 'https://nl.aliexpress.com/'], {
    mobile: true,
});
