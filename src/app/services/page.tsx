import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12 md:px-6 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg text-muted-foreground">
          We provide a range of services to help you discover, integrate, and
          manage MCP servers for your AI model development needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Server Discovery</CardTitle>
            <CardDescription>
              Find the perfect MCP server for your needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Advanced search and filtering</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Detailed server metadata</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>User ratings and reviews</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Trending and popular servers</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Server Integration</CardTitle>
            <CardDescription>
              Seamlessly integrate MCP servers into your workflow
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Comprehensive API documentation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Integration guides and examples</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>SDK and client libraries</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Technical support</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Server Publishing</CardTitle>
            <CardDescription>
              Share your MCP server with the community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Easy server registration</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Version management</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Usage analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>User feedback collection</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-card border border-border rounded-lg p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Enterprise Solutions</h2>
            <p className="text-muted-foreground mb-6">
              We offer custom enterprise solutions for organizations with
              specific requirements. Our team can work with you to develop
              tailored MCP server solutions that meet your unique needs.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Custom server development</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Private registry deployment</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Advanced security features</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Dedicated support</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Enterprise Features</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary-600 rounded-full h-8 w-8 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                  <Check className="h-5 w-5 text-text-50" />
                </div>
                <div>
                  <h4 className="font-bold">Private Registry</h4>
                  <p className="text-sm text-text-400">
                    Deploy a private registry within your organization's
                    infrastructure
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary-600 rounded-full h-8 w-8 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                  <Check className="h-5 w-5 text-text-50" />
                </div>
                <div>
                  <h4 className="font-bold">SSO Integration</h4>
                  <p className="text-sm text-text-400">
                    Integrate with your existing identity provider
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary-600 rounded-full h-8 w-8 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                  <Check className="h-5 w-5 text-text-50" />
                </div>
                <div>
                  <h4 className="font-bold">Advanced Analytics</h4>
                  <p className="text-sm text-text-400">
                    Gain insights into server usage and performance
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary-600 rounded-full h-8 w-8 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                  <Check className="h-5 w-5 text-text-50" />
                </div>
                <div>
                  <h4 className="font-bold">SLA Guarantees</h4>
                  <p className="text-sm text-text-400">
                    Enterprise-grade support with guaranteed response times
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
