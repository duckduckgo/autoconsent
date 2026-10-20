import generateCMPTests from '../playwright/runner';

const urls = [
    'https://www.energyplus.co.uk/',
    'https://bestbuilders.co.uk/',
    'https://myinsuranceexpert.co.uk/',
    'https://eyesurgeryclinic.co.uk/',
    'https://airconsurrey.co.uk/',
];

generateCMPTests('sc-cookie-banner', urls, { mobile: true });
generateCMPTests('sc-cookie-banner', urls, { mobile: false });
