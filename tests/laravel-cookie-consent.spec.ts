import generateCMPTests from '../playwright/runner';

// podstatus.com and knobcloud.com use the older markup without an "essentials only" button,
// the other two expose it directly in the alert modal.
const urls = ['https://podstatus.com/', 'https://www.knobcloud.com/', 'https://resifacile.fr/', 'https://asma.sinscrire.be/fr'];

generateCMPTests('laravel-cookie-consent', urls);
