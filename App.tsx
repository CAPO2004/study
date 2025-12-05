import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import LessonsPage from "./pages/Lessons";
import ExamplesPage from "./pages/Examples";
import QuizPage from "./pages/Quiz";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/lessons"} component={LessonsPage} />
      <Route path={"/examples"} component={ExamplesPage} />
      <Route path={"/quiz"} component={QuizPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Header />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
