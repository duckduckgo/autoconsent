import generateCMPTests from "./runner";
import { test } from '@playwright/test';

generateCMPTests('TrustArc', [
    'https://www.garmin.com/de-DE/',
    'https://www.wish.com/',
    'https://www.forbes.com/',
    'https://www.starbucks.com/',
], {
    testOptOut: true,
    testSelfTest: false,
    skipRegions: ["US"]
});
