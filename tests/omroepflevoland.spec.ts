import generateCMPTests from '../playwright/runner';

const urls = [
    'https://www.omroepflevoland.nl/',
    'https://www.omroepflevoland.nl/sport/529032/almere-city-bekert-een-ronde-verder-na-een-knappe-0-2-zege-op-telstar',
];

generateCMPTests('omroepflevoland', urls, { mobile: true });
generateCMPTests('omroepflevoland', urls, { mobile: false });
