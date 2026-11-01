import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";
import { reportLovableError } from "./lib/lovable-error-reporting";
import { CustomCursor } from "./components/ui/CustomCursor";

export function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#111110] px-4 relative z-10 text-[#f1eedf]">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-[#ae4c31]">Error 404</p>
        <h1 className="mt-4 text-4xl font-bold text-[#24241f]">Page not found</h1>
        <p className="mt-3 text-sm text-[#6c6a60]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[#24241f] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: { error?: Error }) {
  useEffect(() => {
    if (error) {
      reportLovableError(error, { boundary: "react_router_error_component" });
    }
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#111110] px-4 relative z-10 text-[#f1eedf]">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold tracking-tight text-[#24241f]">Something went wrong</h1>
        <p className="mt-2 text-sm text-[#6c6a60]">Try refreshing or head back home.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center rounded-full bg-[#24241f] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[#d4cfc2] bg-transparent px-6 py-3 text-sm font-medium text-[#24241f] transition-colors hover:bg-[#e9e4d9]"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Layout() {
  return (
    <>
      <Outlet />
      <CustomCursor />
    </>
  );
}
