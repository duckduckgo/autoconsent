import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fr.pornlive.eu_8jd', ['https://fr.pornlive.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
