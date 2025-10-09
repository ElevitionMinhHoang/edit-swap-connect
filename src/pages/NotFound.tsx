import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <Card className="max-w-md p-8 md:p-12 text-center shadow-elevated">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Page Not Found</p>
        <p className="text-sm text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button className="w-full sm:w-auto">
              <Home className="h-4 w-4 mr-2" />
              Return Home
            </Button>
          </Link>
          <Link to="/marketplace">
            <Button variant="outline" className="w-full sm:w-auto">
              <Search className="h-4 w-4 mr-2" />
              Browse Marketplace
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
