import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-blue-light">
      <div className="container text-center">
        <h1 className="text-6xl font-display font-bold mb-4 gradient-text">404</h1>
        <p className="text-2xl font-semibold text-foreground mb-4">Page Not Found</p>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/">
          <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
