import { AutoCMP, TabActor } from "../types";

export type DetectorConfig = {
  presentMatcher: {};
  showingMatcher: {};
};
export type MethodConfig = {
  action?: any;
  name: string;
};

export type ConsentOMaticConfig = {
  detectors: DetectorConfig[];
  methods: MethodConfig[];
};

export class ConsentOMaticCMP implements AutoCMP {
  methods = new Map<string, {}>();
  hasSelfTest: boolean;

  constructor(public name: string, public config: ConsentOMaticConfig) {
    config.methods.forEach(methodConfig => {
      if (methodConfig.action) {
        this.methods.set(methodConfig.name, methodConfig.action);
      }
    });
    this.hasSelfTest = this.methods.has("TEST_CONSENT");
  }

  async detectCmp(tab: TabActor): Promise<boolean> {
    return (
      await Promise.all(
        this.config.detectors.map(detectorConfig =>
          tab.matches(detectorConfig.presentMatcher)
        )
      )
    ).some(matched => matched);
  }

  async detectPopup(tab: TabActor): Promise<boolean> {
    return (
      await Promise.all(
        this.config.detectors.map(detectorConfig =>
          tab.matches(detectorConfig.showingMatcher)
        )
      )
    ).some(matched => matched);
  }

  async executeAction(tab: TabActor, method: string, param?: any) {
    if (this.methods.has(method)) {
      return tab.executeAction(this.methods.get(method), param);
    }
    return true;
  }

  async optOut(tab: TabActor): Promise<boolean> {
    await this.executeAction(tab, "HIDE_CMP");
    await this.executeAction(tab, "OPEN_OPTIONS");
    await this.executeAction(tab, "HIDE_CMP");
    await this.executeAction(tab, "DO_CONSENT", []);
    await this.executeAction(tab, "SAVE_CONSENT");
    return true;
  }

  async optIn(tab: TabActor): Promise<boolean> {
    await this.executeAction(tab, "HIDE_CMP");
    await this.executeAction(tab, "OPEN_OPTIONS");
    await this.executeAction(tab, "HIDE_CMP");
    await this.executeAction(tab, "DO_CONSENT", ['D', 'A', 'B', 'E', 'F', 'X']);
    await this.executeAction(tab, "SAVE_CONSENT");
    return true;
  }
  async openCmp(tab: TabActor): Promise<boolean> {
    await this.executeAction(tab, "HIDE_CMP");
    await this.executeAction(tab, "OPEN_OPTIONS");
    return true;
  }

  test(tab: TabActor): Promise<boolean> {
    return this.executeAction(tab, "TEST_CONSENT");
  }
  detectFrame(tab: TabActor, frame: { url: string }): boolean {
    return false;
  }
}
