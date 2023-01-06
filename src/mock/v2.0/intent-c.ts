import { closeWindowOnCompletion, onFdc3Ready } from "./mock-functions";
import { DesktopAgent } from "fdc3_2_0/dist/api/DesktopAgent";
import { sendContextToTests } from "../v2.0/mock-functions";
import { AppControlContext } from "../../context-types";
declare let fdc3: DesktopAgent;
onFdc3Ready().then(async () => {
  await closeWindowOnCompletion();

  try {
    await fdc3.addContextListener(null, async (context) => {
      // broadcast that this app has received context
      if (context.type === "fdc3.instrument") {
        await sendContextToTests({
          type: "context-received",
          context: context,
        } as AppControlContext);
      }
    });
  } catch (ex) {
    await sendContextToTests({
      type: "context-received",
      errorMessage: `${ex.message ?? ex}`,
    } as AppControlContext);
  }

  fdc3.addIntentListener("cTestingIntent", async (context) => {
    return context;
  });
});
