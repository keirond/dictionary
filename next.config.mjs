import bundlAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundlAnalyzer({
  enabled: process.env.ANALYZE === 'true'
});

export default withBundleAnalyzer();
