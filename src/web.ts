import { WebPlugin } from "@capacitor/core";

import type {
  InAppBrowserPlugin,
  OpenWebViewOptions,
  OpenOptions,
  GetCookieOptions,
  ClearCookieOptions,
} from "./definitions";

export class InAppBrowserWeb extends WebPlugin implements InAppBrowserPlugin {
  clearAllCookies(): Promise<any> {
    console.log("clearAllCookies");
    return Promise.resolve();
  }
  clearCache(): Promise<any> {
    console.log("clearCache");
    return Promise.resolve();
  }
  async open(options: OpenOptions): Promise<any> {
    console.log("open", options);
    return options;
  }

  async clearCookies(options: ClearCookieOptions): Promise<any> {
    console.log("cleanCookies", options);
    return;
  }

  async getCookies(options: GetCookieOptions): Promise<any> {
    // Web implementation to get cookies
    return options;
  }

  async openWebView(options: OpenWebViewOptions): Promise<any> {
    console.log("openWebView", options);
    if (options.hidden) {
      console.log("Hidden webview mode enabled - web implementation not supported");
    }
    return options;
  }

  async executeScript({ code }: { code: string }): Promise<any> {
    console.log("code", code);
    return code;
  }

  async close(): Promise<any> {
    console.log("close");
    return;
  }

  async setUrl(options: { url: string }): Promise<any> {
    console.log("setUrl", options.url);
    return;
  }

  async reload(): Promise<any> {
    console.log("reload");
    return;
  }
  async postMessage(options: Record<string, any>): Promise<any> {
    console.log("postMessage", options);
    return options;
  }

  async updatePosition(options: { x: number; y: number; width: number; height: number }): Promise<any> {
    console.log("updatePosition", options);
    return;
  }

  async updateOpacity(options: { opacity: number }): Promise<any> {
    console.log("updateOpacity", options);
    return;
  }

  async setVisible(options: { visible: boolean }): Promise<any> {
    console.log("setVisible", options);
    return;
  }
}
