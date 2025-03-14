import React from 'react';
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FaAndroid, FaWindows, FaGlobe, FaLinux, FaApple } from 'react-icons/fa';
import { Button } from "@/components/ui/button";

const DownloadPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="container py-16 md:py-24">
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Downloads</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Dynamo is coming soon! Select your platform below to stay updated.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <PlatformButton platform="Android" icon={FaAndroid} />
            <PlatformButton platform="Windows" icon={FaWindows} />
            <PlatformButton platform="Web" icon={FaGlobe} />
            <PlatformButton platform="Linux" icon={FaLinux} />
            <PlatformButton platform="macOS" icon={FaApple} />
            <PlatformButton platform="iOS" icon={FaApple} />
          </div>

          <p className="mt-12 text-muted-foreground">
            We'll notify you when Dynamo is available for your platform!
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

interface PlatformButtonProps {
  platform: string;
  icon: React.ComponentType<any>;
}

const PlatformButton: React.FC<PlatformButtonProps> = ({ platform, icon }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <icon className="h-12 w-12 text-[#00AFF0] mb-4" />
      <h3 className="text-xl font-semibold mb-2">{platform}</h3>
      <Button disabled className="bg-gray-200 text-gray-500 cursor-not-allowed hover:bg-gray-300">
        Coming Soon
      </Button>
    </div>
  );
};

export default DownloadPage;
