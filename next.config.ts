import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Fix OpenTelemetry optional dependencies for Vercel deployment
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Ignore OpenTelemetry optional dependencies that are not needed in production
      config.externals = config.externals || [];
      config.externals.push({
        '@opentelemetry/exporter-jaeger': 'commonjs @opentelemetry/exporter-jaeger',
        '@opentelemetry/exporter-zipkin': 'commonjs @opentelemetry/exporter-zipkin',
        '@opentelemetry/exporter-prometheus': 'commonjs @opentelemetry/exporter-prometheus',
      });

      // Ignore warnings about missing optional dependencies
      config.ignoreWarnings = [
        { module: /node_modules\/@opentelemetry/ },
        /Critical dependency: the request of a dependency is an expression/,
      ];
    }
    return config;
  },
};

export default nextConfig;
