// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StringObject = (string & { fromT: any });

export type CPUArch = '68k' | 'amd64' | 'arm' | 'arm64' | 'avr' | 'ia32' | 'ia64' | 'irix' | 'irix64' | 'mips' | 'mips64' | 'pa-risc' | 'ppc' | 'sparc' | 'sparc64' | StringObject;

export type EngineName = 'Amaya' | 'EdgeHTML' | 'Gecko' | 'iCab' | 'KHTML' | 'Links' | 'Lynx' | 'NetFront' | 'NetSurf' | 'Presto' | 'Tasman' | 'Trident' | 'w3m' | 'WebKit' | StringObject;

export type BrowserName =
  'Amaya' |
  'Android Browser' |
  'Arora' |
  'Avant' |
  'Baidu' |
  'Blazer' |
  'Bolt' |
  'Camino' |
  'Chimera' |
  'Chrome' |
  'Chromium' |
  'Comodo Dragon' |
  'Conkeror' |
  'Dillo' |
  'Dolphin' |
  'Doris' |
  'Edge' |
  'Epiphany' |
  'Fennec' |
  'Firebird' |
  'Firefox' |
  'Flock' |
  'GoBrowser' |
  'iCab' |
  'ICE Browser' |
  'IceApe' |
  'IceCat' |
  'IceDragon' |
  'Iceweasel' |
  'IE[Mobile]' |
  'Iron' |
  'Jasmine' |
  'K - Meleon' |
  'Konqueror' |
  'Kindle' |
  'Links' |
  'Lunascape' |
  'Lynx' |
  'Maemo' |
  'Maxthon' |
  'Midori' |
  'Minimo' |
  'MIUI Browser' |
  '[Mobile] Safari' |
  'Mosaic' |
  'Mozilla' |
  'Netfront' |
  'Netscape' |
  'NetSurf' |
  'Nokia' |
  'OmniWeb' |
  'Opera[Mini / Mobi / Tablet]' |
  'Phoenix' |
  'Polaris' |
  'QQBrowser' |
  'RockMelt' |
  'Silk' |
  'Skyfire' |
  'SeaMonkey' |
  'SlimBrowser' |
  'Swiftfox' |
  'Tizen' |
  'UCBrowser' |
  'Vivaldi' |
  'w3m' |
  'Yandex' |
  StringObject;

export type DeviceType = 'console' | 'mobile' | 'tablet' | 'smarttv' | 'wearable' | 'embedded' | StringObject;

export type DeviceVendor =
  'Acer' |
  'Alcatel' |
  'Amazon' |
  'Apple' |
  'Archos' |
  'Asus' |
  'BenQ' |
  'BlackBerry' |
  'Dell' |
  'GeeksPhone' |
  'Google' |
  'HP' |
  'HTC' |
  'Huawei' |
  'Jolla' |
  'Lenovo' |
  'LG' |
  'Meizu' |
  'Microsoft' |
  'Motorola' |
  'Nexian' |
  'Nintendo' |
  'Nokia' |
  'Nvidia' |
  'Ouya' |
  'Palm' |
  'Panasonic' |
  'Polytron' |
  'RIM' |
  'Samsung' |
  'Sharp' |
  'Siemens' |
  'Sony-Ericsson' |
  'Sprint' |
  'Xbox' |
  'ZTE' |
  StringObject;

export type OSName =
  'AIX' |
  'Amiga OS' |
  'Android' |
  'Arch' |
  'Bada' |
  'BeOS' |
  'BlackBerry' |
  'CentOS' |
  'Chromium OS' |
  'Contiki' |
  'Fedora' |
  'Firefox OS' |
  'FreeBSD' |
  'Debian' |
  'DragonFly' |
  'Gentoo' |
  'GNU' |
  'Haiku' |
  'Hurd' |
  'iOS' |
  'Joli' |
  'Linpus' |
  'Linux' |
  'Mac OS' |
  'Mageia' |
  'Mandriva' |
  'MeeGo' |
  'Minix' |
  'Mint' |
  'Morph OS' |
  'NetBSD' |
  'Nintendo' |
  'OpenBSD' |
  'OpenVMS' |
  'OS/2' |
  'Palm' |
  'PCLinuxOS' |
  'Plan9' |
  'Playstation' |
  'QNX' |
  'RedHat' |
  'RIM Tablet OS' |
  'RISC OS' |
  'Sailfish' |
  'Series40' |
  'Slackware' |
  'Solaris' |
  'SUSE' |
  'Symbian' |
  'Tizen' |
  'Ubuntu' |
  'UNIX' |
  'VectorLinux' |
  'WebOS' |
  'Windows [Phone/Mobile]' |
  'Zenwalk' |
  StringObject;
