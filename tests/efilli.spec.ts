import generateCMPTests from '../playwright/runner';

generateCMPTests('efilli', [
    'https://www.akakce.com/',
    'https://www.turkcell.com.tr/',
    'https://webrazzi.com/',
    'https://www.emlakjet.com/',
    'https://www.araskargo.com.tr/',
]);

// the site is unreachable from German IPs
generateCMPTests('efilli', ['https://www.iddaa.com/'], {
    skipRegions: ['DE'],
});
