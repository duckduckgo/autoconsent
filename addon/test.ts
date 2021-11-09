import "chai";
import "mocha";
import AutoConsent, { waitFor } from "../lib/web";
import { expect } from "chai";

mocha.setup("bdd");
mocha.timeout(12000);

describe("CMP Tests", () => {
  let autoconsent: AutoConsent;

  before(async () => {
    const bg: any = await browser.runtime.getBackgroundPage();
    autoconsent = bg.autoconsent;
  });

  async function waitForCmp(tabId: number) {
    await waitFor(() => autoconsent.tabCmps.has(tabId), 50, 100);
    return autoconsent.tabCmps.get(tabId);
  }

  function cmpTest(cmpName: string, url: string, { selfTest = true } = {}) {
    describe(`${url} (${cmpName})`, () => {
      let tabId: number;

      before(async () => {
        const tab = await browser.tabs.create({ url });
        tabId = tab.id;
      });

      after(async () => {
        await browser.tabs.remove(tabId);
      });

      it("CMP is detected", async () => {
        const tab = await waitForCmp(tabId);
        await tab.checked;
        expect(tab.getCMPName()).to.eql(cmpName);
      });

      it("Opt out runs", async () => {
        await autoconsent.tabCmps.get(tabId).doOptOut()
        await waitFor(
          () => {
            return (
              autoconsent.tabCmps.has(tabId) &&
              autoconsent.tabCmps.get(tabId).optOutStatus !== null
            );
          },
          50,
          100
        );
        const tab = autoconsent.tabCmps.get(tabId);
        expect(tab.optOutStatus).to.be.true;
      });

      if (selfTest) {
        it("Self test", async () => {
          await waitFor(
            () => {
              return (
                autoconsent.tabCmps.has(tabId) &&
                autoconsent.tabCmps.get(tabId).optOutStatus !== null
              );
            },
            50,
            100
          );
          const tab = autoconsent.tabCmps.get(tabId);
          expect(await tab.testOptOutWorked()).to.be.true;
        });
      }
    });
  }

  it("autoconsent exists", () => {
    console.log(autoconsent);
    expect(autoconsent).to.not.be.null;
  });

  describe("Cybotcookiebot", () => {
    const cmp = "Cybotcookiebot";
    [
      "https://www.ab-in-den-urlaub.de/",
      "https://www.centralpoint.nl/",
      "https://www.vatera.hu/",
      "https://www.smartsheet.com/",
    ].forEach((url) => {
      cmpTest(cmp, url);
    });
  });

  describe("TrustArc", () => {
    const cmp = "TrustArc";
    cmpTest(cmp, "https://www.zoom.us");
  });

  describe("Sirdata", () => {
    [
      "https://www.futura-sciences.com/",
      "https://www.abcbourse.com/",
      "https://www.journaldugeek.com/",
    ].forEach((url) => {
      cmpTest("Sirdata", url, { selfTest: false });
    });
  });

  describe("Sourcepoint", () => {
    [
      "https://www.brianmadden.com/",
      "https://www.channelpro.co.uk/news",
      "https://www.csoonline.com/blogs",
      "https://www.deine-tierwelt.de/",
      "https://www.theguardian.com/",
      "https://www.independent.co.uk/",
      "https://www.n-tv.de/",
    ].forEach((url) => {
      cmpTest("Sourcepoint", url, { selfTest: false });
    });
  });

  describe("Cevent", () => {
    ["https://www.cvent.com/"].forEach((url) => {
      cmpTest("Cevent", url, { selfTest: false });
    });
  });

  describe("InternetBrands", () => {
    ["https://www.vbulletin.com/"].forEach(
      (url) => {
        cmpTest("InternetBrands", url, { selfTest: false });
      }
    );
  });

  describe("Drupal", () => {
    ["https://www.drupal.org/"].forEach((url) => {
      cmpTest("Drupal", url, { selfTest: false });
    });
  });

  describe("com_consentmanager.net", () => {
    const cmp = "com_consentmanager.net";
    cmpTest(cmp, "https://sourceforge.net/");
  });

  describe("com_quantcast", () => {
    const cmp = "quantcast";
    [
      "https://imgur.com",
      "https://www.cyclingnews.com/",
      "https://9gag.com",
      "https://www.anandtech.com/",
      "https://myanimelist.net/",
      "https://www.techradar.com/",
      "https://www.livescience.com",
      "https://www.gamesradar.com",
    ].forEach((url) => {
      cmpTest(cmp, url);
    });
  });

  describe("com_quantcast2", () => {
    const cmp = "com_quantcast2";
    ["https://www.fandom.com/"].forEach((url) => {
      cmpTest(cmp, url);
    });
  });

  describe("com_didomi.io", () => {
    const cmp = "com_didomi.io";
    [
      "https://www.20minutes.fr/",
      "https://www.planet.fr/",
      "http://www.allocine.fr/",
      "https://www.01net.com/",
      "https://www.boursorama.com/",
    ].forEach((url) => {
      cmpTest(cmp, url);
    });
  });

  describe("com_optanon", () => {
    const cmp = "com_optanon";
    [
      "https://worldofwarcraft.com/",
    ].forEach((url) => {
      cmpTest(cmp, url);
    });
  });

  describe("com_onetrust", () => {
    [
      "https://www.accenture.com/",
      "https://edition.cnn.com/",
      "https://www.lovescout24.de/",
      "https://mailchimp.com/",
      "https://www.okcupid.com/",
      "https://arstechnica.com/",
      "https://www.jeux.fr/",
      "https://www.adobe.com/de/",
      "https://genius.com/",
      "https://bitbucket.org/",
      "https://www.atlassian.com/",
      "https://www.digitaltrends.com/",
      "https://about.gitlab.com",
      "https://doodle.com/"
    ].forEach((url) => {
      cmpTest("com_onetrust", url);
    });
  });

  describe("com_EvidonBanner", () => {
    [, ].forEach(
      (url) => {
        cmpTest("com_EvidonBanner", url);
      }
    );
  });

  describe("com_cookiecontrolcivic", () => {
    [
      "https://www.civicuk.com/",
    ].forEach((url) => {
      cmpTest("com_cookiecontrolcivic", url);
    });
  });

  describe("com_tealium.com", () => {
    [
      "https://www.constantcontact.com/",
      "https://www.economist.com/"
    ].forEach((url) => {
      cmpTest("com_tealium.com", url);
    });
  });

  describe("com_SFR", () => {
    ["https://www.sfr.fr/"].forEach((url) => {
      cmpTest("com_SFR", url);
    });
  });

  describe("com_springer", () => {
    ["https://www.ofeminin.pl/"].forEach((url) => {
      cmpTest("com_springer", url);
    });
  });

  describe("funding-choices", () => {
    [
      "https://www.dinarguru.com/",
      "https://blog.alltolearn.com/",
      "https://www.schulferien.org/deutschland/feiertage/november/"
    ].forEach((url) => {
      cmpTest("funding-choices", url);
    })
  })

  xdescribe("unsupported", () => {
    [
      "https://www.lepoint.fr/",
      'https://lemonde.fr',
      "https://www.lefigaro.fr/"
    ].forEach((url) => {
      cmpTest("", url);
    });
  });
});

mocha.checkLeaks();
mocha.run();
