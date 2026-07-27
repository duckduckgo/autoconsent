import generateCMPTests from '../playwright/runner';

const globalUrls = ['https://www.bestwordlist.com/'];
const euOnlyUrls = ['https://www.meteociel.fr/', 'https://www.maxifoot.fr/'];

generateCMPTests('appconsent-sfbx', globalUrls, { mobile: false });
generateCMPTests('appconsent-sfbx', globalUrls, { mobile: true });

generateCMPTests('appconsent-sfbx', euOnlyUrls, {
    mobile: false,
    onlyRegions: ['FR', 'DE', 'GB', 'ES', 'IT', 'NL', 'PL', 'SE', 'DK', 'NO', 'CH'],
});
generateCMPTests('appconsent-sfbx', euOnlyUrls, {
    mobile: true,
    onlyRegions: ['FR', 'DE', 'GB', 'ES', 'IT', 'NL', 'PL', 'SE', 'DK', 'NO', 'CH'],
});
