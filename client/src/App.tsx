import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Rules from "@/pages/Rules";
import Support from "@/pages/Support";
import Layout from "@/components/Layout";
import { ConfigProvider } from "@/lib/config-context";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/rules" component={Rules} />
      <Route path="/support" component={Support} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ConfigProvider>
          <Layout>
            <Toaster />
            <Router />
          </Layout>
        </ConfigProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
