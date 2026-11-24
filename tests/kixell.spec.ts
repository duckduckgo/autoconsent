import generateCMPTests from '../playwright/runner';

generateCMPTests('kixell', ['https://ocarat.com/']);
// the site answers German IPs with 403 Forbidden
generateCMPTests('kixell', ['https://www.magellan-bio.fr/'], {
    skipRegions: ['DE'],
});
generateCMPTests('kixell', ['https://www.mamaisonmonjardin.com/'], {
    onlyRegions: ['FR'],
});
