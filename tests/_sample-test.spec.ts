import coverageData from "../data/coverage.json";
import generateCMPTests from "../playwright/runner";

const region = (process.env.REGION || "US").trim();

Object.keys(coverageData).forEach((name) => {
  if (!coverageData[name][region]) {
    // no coverage in this region
    return;
  }
  const siteList = coverageData[name][region].exampleSites.slice(0, 1);
  generateCMPTests(name, siteList, {
    testOptIn: false,
  });
});
