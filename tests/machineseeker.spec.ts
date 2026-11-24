import generateCMPTests from '../playwright/runner';

generateCMPTests('machineseeker', [
    'https://www.maschinensucher.de/',
    'https://www.machineseeker.com/',
    'https://www.machineseeker.fr/',
    'https://www.truckscout24.de/',
]);
