import generateCMPTests from '../playwright/runner';

generateCMPTests('transcend', ['https://www.verizon.com/support/account-pin-faqs/', 'https://www.hagerty.com/']);

// only shows the consent dialog outside the US
generateCMPTests('transcend', ['https://www.mayoclinic.org/drugs-supplements/paroxetine-oral-route/description/drg-20067632'], {
    skipRegions: ['US'],
});
