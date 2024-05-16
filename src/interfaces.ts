import { IBrowser, ICPU, IDevice, IEngine, IOS } from 'ua-parser-js';
import { BrowserName, DeviceVendor, DeviceType, CPUArch, EngineName, OSName } from './types';

export interface Browser extends IBrowser {
  name: BrowserName;
};

export interface CPU extends ICPU {
  architecture: CPUArch;
};

export interface Device extends IDevice {
  type: DeviceType;
  vendor: DeviceVendor;
};

export interface Engine extends IEngine {
  name: EngineName;
};

export interface OS extends IOS {
  name: OSName;
};

export interface UserAgent {
  ua: string;
  browser: Partial<Browser>;
  device: Partial<Device>;
  engine: Partial<Engine>;
  os: Partial<OS>;
  cpu: Partial<CPU>;
};
