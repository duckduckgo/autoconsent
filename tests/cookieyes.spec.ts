import generateCMPTests from '../playwright/runner';

generateCMPTests('cookieyes', [
    'https://www.cookieyes.com/',
    'https://www.primefaces.org/',
    'https://www.undip.ac.id/',
    'https://ttinteractive.com/',
    'https://www.chronofhorse.com/',
    'https://nl.flaminfitness.com/products/30l-tactical-backpack',
    // CCPA "Do Not Share My Personal Information" variant (US visitors only)
    'https://www.quantamagazine.org/at-17-hannah-cairo-solved-a-major-math-mystery-20250801/',
    'https://taxfoundation.org/',
]);
