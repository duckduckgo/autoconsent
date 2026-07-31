import generateCMPTests from '../playwright/runner';

generateCMPTests('simyo-nl', ['https://www.simyo.nl/klantenservice/roaming'], { testOptIn: false, testSelfTest: true });
