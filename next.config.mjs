/** @type {import('next').NextConfig} */
let userConfig = undefined;

try {
  userConfig = await import('./userconfig-next.mjs').then(m => m.default);
} catch (e) {
  console.error("Error importing ./userconfig-next.mjs.  Using default configuration.", e);
}

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

const mergedConfig = mergeConfig(nextConfig, userConfig);

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return nextConfig;
  }

  const merged = { ...nextConfig };

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key]) &&
      nextConfig[key] !== null &&
      userConfig[key] !== null
    ) {
      merged[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      merged[key] = userConfig[key];
    }
  }

  return merged;
}

export default mergedConfig;
