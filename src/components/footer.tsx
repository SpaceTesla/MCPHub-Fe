import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-6">
      <div className="container mx-auto md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium">MCP Registry</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-text-100">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-text-100">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-text-100">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-text-100">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/docs" className="hover:text-text-100">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-text-100">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/api" className="hover:text-text-100">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Community</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/forum" className="hover:text-text-100">
                  Forum
                </Link>
              </li>
              <li>
                <Link href="/discord" className="hover:text-text-100">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/github" className="hover:text-text-100">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-text-100">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-text-100">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-text-100">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MCP Registry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
