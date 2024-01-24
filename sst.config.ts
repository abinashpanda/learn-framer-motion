import { SSTConfig } from 'sst'
import { StaticSite } from 'sst/constructs'

export default {
  config: () => {
    return {
      name: 'learn-framer-motion',
      region: 'ap-south-1',
    }
  },
  stacks: (app) => {
    app.stack(({ stack }) => {
      const site = new StaticSite(stack, 'site', {
        buildCommand: 'pnpm run build',
        path: 'dist/',
        customDomain: {
          hostedZone: 'prodioslabs.com',
          domainName: 'learn-framer-motion.prodioslabs.com',
        },
      })
      stack.addOutputs({
        SiteUrl: site.url,
      })
    })
  },
} satisfies SSTConfig
