import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'tunnelsats',
  title: 'TunnelSats',
  license: 'mit',
  wrapperRepo: 'https://github.com/Tunnelsats/startos',
  upstreamRepo: 'https://github.com/Tunnelsats/tunnelsats',
  supportSite: 'https://guide.tunnelsats.com/FAQ.html',
  marketingSite: 'https://tunnelsats.com/',
  donationUrl: 'https://ln.tunnelsats.com/lnurlp/link/AJo7s4',
  description: {
    short: 'VPN Connection For Your Lightning Node',
    long: 'Providing Lightning ⚡ Services is about privacy, reliability, connectivity, speed and liquidity. Relying your node connectivity to a single service Tor is a risk regarding connectivity and network stability, as anyone running a lightning node can testify. With Hybrid connectivity, you offer your payment and routing services to be faster, more reliable, and yet, there is a privacy concern when you do it with your home-IP: you both expose your rough location of your node, potentially your home and your node\'s system to attacks from the internet. With our solution Tunnel⚡Sats, you get the best of both worlds. Your node and home IP stays hidden, behind Tor and our VPS public IP address, which will be your node\'s face to the public internet, is shared with other peers. You may see higher reliability causing not only higher uptime, fewer offline peer nodes but also greater routing numbers. This isn\'t a promise, but an eventually expected outcome.',
  },
  assets: [],
  volumes: ['main'],
  images: {
    'tunnelsats': {
      source: {
        dockerTag: 'start9/tunnelsats',
      },
    },
  },
  hardwareRequirements: {},
  alerts: {
    install: 'Optional alert to display before installing the service',
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
