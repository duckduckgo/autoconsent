import AutoConsent from "./web";
import { MessageSender } from "./types";
import { expect } from "@playwright/test";

// eslint-disable-next-line no-global-assign
global.crypto = undefined;
global.window = {
  location: {
    href: ""
  },
  addEventListener: () => {
  }
};
global.document = {
  readyState: "loading" // so that this.start() is not called right away from constructor()-->initialize()
};

const collectingMessageSenderFactory = function() {
  type Message = Parameters<MessageSender>[0]
  const messages: Message[] = [];

  return {
    messageSender: (msg: Message) => {
      messages.push(msg);
      return Promise.resolve();
    },
    getLastMessage: () => {
      return messages.at(messages.length - 1);
    }
  };
};

const cmpFactory = ({ isCosmetic }: {isCosmetic: boolean}) => {
  return {
    isCosmetic, detectPopup(): Promise<boolean> {
    return Promise.resolve(false);
  },
    name: 'test'
  }
}

describe("AutoConsent", () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  describe("_start", () => {
    describe("detects nothing when no cmps found", () => {
      it("undoes prehide when prehide enabled", async () => {
        // Given
        const collectingMessageSender = collectingMessageSenderFactory();

        const autoConsent = new AutoConsent(collectingMessageSender.messageSender, {});

        vi.spyOn(autoConsent, "findCmp")
          .mockResolvedValue([]);

        const undoPrehideSpy = vi.spyOn(autoConsent.domActions, "undoPrehide")
          .mockReturnValue(false);

        // When
        const result = await autoConsent._start();

        // Then
        expect(result).toBe(false);
        expect(undoPrehideSpy).toHaveBeenCalledTimes(1);
        expect(collectingMessageSender.getLastMessage()).toEqual(expect.objectContaining({ state: expect.objectContaining({ lifecycle: "nothingDetected" }) }));
      });

      it("does not undo prehide when prehide not enabled", async () => {
        const collectingMessageSender = collectingMessageSenderFactory();

        const autoConsent = new AutoConsent(collectingMessageSender.messageSender, { enablePrehide: false });

        vi.spyOn(autoConsent, "findCmp")
          .mockResolvedValue([]);

        const undoPrehideSpy = vi.spyOn(autoConsent.domActions, "undoPrehide")
          .mockReturnValue([]);

        // When
        const result = await autoConsent._start();

        // Then
        expect(result).toBe(false);
        expect(undoPrehideSpy).not.toHaveBeenCalled();
        expect(collectingMessageSender.getLastMessage()).toEqual(expect.objectContaining({ state: expect.objectContaining({ lifecycle: "nothingDetected" }) }));
      });
    });

    it("does not search for popups in cosmetic cmps if static found", async () => {
      // Given
      const collectingMessageSender = collectingMessageSenderFactory();

      const autoConsent = new AutoConsent(collectingMessageSender.messageSender, {enablePrehide: false});

      const staticCmp = cmpFactory({isCosmetic: false })

      const expectedResult = true

      vi.spyOn(autoConsent, "findCmp")
        .mockResolvedValue([staticCmp]);

      const handlePopupSpy = vi.spyOn(autoConsent, 'handlePopup')
        .mockResolvedValue(expectedResult)

      const detectPopupsMock = vi.spyOn(autoConsent, 'detectPopups')
        .mockImplementation((cmps, onFirstPopupAppears) => {
          onFirstPopupAppears(cmps[0])
          return cmps[0]
        })

      // When
      const result = await autoConsent._start();

      // Then
      expect(result).toBe(expectedResult);
      expect(handlePopupSpy).toHaveBeenCalledTimes(1)
      expect(detectPopupsMock).toHaveBeenCalledTimes(1)
      expect(detectPopupsMock).toHaveBeenNthCalledWith(1, [staticCmp], expect.any(Function))
    });
    it("searches for popups in cosmetic cmps if static not found", async () => {
      // Given
      const collectingMessageSender = collectingMessageSenderFactory();

      const autoConsent = new AutoConsent(collectingMessageSender.messageSender, {enablePrehide: false});

      const staticCmp = cmpFactory({isCosmetic: false })
      const cosmeticCmp = cmpFactory({isCosmetic: true })

      vi.spyOn(autoConsent, "findCmp")
        .mockResolvedValue([staticCmp, cosmeticCmp]);

      const detectPopupsMock = vi.spyOn(autoConsent, 'detectPopups')
        .mockResolvedValue([])

      // When
      const result = await autoConsent._start();

      // Then
      expect(result).toBe(false);
      expect(detectPopupsMock).toHaveBeenCalledTimes(2)
      expect(detectPopupsMock).toHaveBeenNthCalledWith(1, [staticCmp], expect.any(Function))
      expect(detectPopupsMock).toHaveBeenNthCalledWith(2, [cosmeticCmp], expect.any(Function))
    });

    it('reports error details when multiple popups found', async () => {
      const collectingMessageSender = collectingMessageSenderFactory();

      const autoConsent = new AutoConsent(collectingMessageSender.messageSender, {enablePrehide: false});

      const foundCmp = [cmpFactory({ isCosmetic: false }), cmpFactory({ isCosmetic: false })]

      vi.spyOn(autoConsent, "findCmp")
        .mockResolvedValue(foundCmp);

      const detectPopupsMock = vi.spyOn(autoConsent, 'detectPopups')
        .mockResolvedValue(foundCmp)

      // When
      const result = await autoConsent._start();

      // Then
      expect(result).toBe(false);
      expect(detectPopupsMock).toHaveBeenCalledTimes(1)
      expect(collectingMessageSender.getLastMessage()).toEqual(expect.objectContaining({ type: 'autoconsentError', details: expect.objectContaining({ msg: "Found multiple CMPs, check the detection rules.", cmps: ['test', 'test'] }) }));
    })
  });
});
