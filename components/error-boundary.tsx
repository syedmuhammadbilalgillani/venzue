"use client";

import { Component, type ReactNode } from "react";
import { ErrorFallback } from "@/components/error-fallback";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  title?: string;
  message?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("ErrorBoundary caught an error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <ErrorFallback
            title={this.props.title ?? "This section failed to load"}
            message={this.props.message ?? "Try refreshing the page."}
            className="size-full"
            reset={() => this.setState({ hasError: false })}
          />
        )
      );
    }

    return this.props.children;
  }
}
