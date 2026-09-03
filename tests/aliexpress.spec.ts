import generateCMPTests from '../playwright/runner';

generateCMPTests('aliexpress', ['https://es.aliexpress.com/', 'https://nl.aliexpress.com/', 'https://pl.aliexpress.com/']);
// Mobile user agents get the 2025 bottom-sheet layout instead of the #gdpr-new-container banner.
generateCMPTests('aliexpress', ['https://pl.aliexpress.com/', 'https://de.aliexpress.com/'], { mobile: true });
