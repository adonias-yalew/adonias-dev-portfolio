import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";
import { reportLovableError } from "./lib/lovable-error-reporting";
import { CustomCursor } from "./components/ui/CustomCursor";
import { FloatingNav } from "./components/ui/FloatingNav";
import { AnimatedBackground } from "./components/ui/AnimatedBackground";

export function NotFound() {
  return (
    <AnimatedBackground>
      <CustomCursor />
      <FloatingNav />
      <div className="flex min-h-screen items-center justify-center bg-transparent px-4 relative z-10">
        <div className="max-w-md text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-white/50">Error 404</p>
          <h1 className="mt-4 text-4xl font-bold text-white">Page not found</h1>
          <p className="mt-3 text-sm text-white/60">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
            >
              Return home
            </Link>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export function ErrorBoundary({ error }: { error?: Error }) {
  useEffect(() => {
    if (error) {
      reportLovableError(error, { boundary: "react_router_error_component" });
    }
  }, [error]);

  return (
    <AnimatedBackground>
      <CustomCursor />
      <FloatingNav />
      <div className="flex min-h-screen items-center justify-center bg-transparent px-4 relative z-10">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-bold tracking-tight text-white">
            Something went wrong
          </h1>
          <p className="mt-2 text-sm text-white/60">
            Try refreshing or head back home.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
            >
              Try again
            </button>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              Go home
            </a>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export default function Layout() {
  return (
    <AnimatedBackground>
      <CustomCursor />
      <FloatingNav />
      <div className="relative z-10 pt-20">
        <Outlet />
      </div>
    </AnimatedBackground>
  );
}
