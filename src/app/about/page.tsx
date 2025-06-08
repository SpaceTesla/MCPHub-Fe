import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 md:px-6 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Context Registry</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Context Registry is a comprehensive platform for discovering,
            sharing, and managing Model Context Protocol (MCP) servers. Our
            mission is to facilitate seamless integration and collaboration in
            AI model development.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            We aim to create a centralized hub where developers can find, share,
            and collaborate on MCP servers. By providing a standardized
            registry, we enable easier discovery and integration of AI model
            servers, accelerating innovation in the field.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Comprehensive server discovery and search</li>
            <li>Detailed server documentation and metadata</li>
            <li>User ratings and reviews</li>
            <li>Version tracking and change history</li>
            <li>Integration guides and examples</li>
            <li>Community forums and discussions</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our Team</h2>
          <p className="text-muted-foreground mb-6">
            Context Registry is maintained by a team of dedicated developers and
            AI enthusiasts who are passionate about advancing the field of
            artificial intelligence through better tools and collaboration.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Get Involved</h2>
          <p className="text-muted-foreground mb-6">
            We welcome contributions from the community. Whether you're a
            developer, designer, or AI researcher, there are many ways to get
            involved with Context Registry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/community">Join Our Community</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
