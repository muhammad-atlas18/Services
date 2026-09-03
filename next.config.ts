import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { remotePatterns: [] },
  async redirects() {
    return [
      ["/services/solar/connection-and-setup", "/services/solar/system-setup"],
      ["/services/solar/inverter-and-battery", "/services/solar/inverter-battery"],
      ["/services/solar/repair-and-diagnostics", "/services/solar/repair"],
      ["/services/electrical/rewiring-and-upgrades", "/services/electrical/rewiring"],
      ["/services/electrical/fault-finding", "/services/electrical/fault-repair"],
      ["/services/electrical/db-and-breakers", "/services/electrical/distribution-board"],
      ["/services/electrical/fixtures-and-repairs", "/services/electrical/fixtures"],
      ["/services/ac/maintenance-and-service", "/services/ac/maintenance"],
      ["/services/ac/leakage-and-cooling", "/services/ac/leakage-diagnosis"],
    ].map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
