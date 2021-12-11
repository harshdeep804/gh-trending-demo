import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import './App.scss';

const TrendingRepositories = lazy(() =>
  import('./views/trendingRepositories'),
);

const TrendingDevelopers = lazy(() =>
  import('./views/trendingDevelopers'),
);

const queryClient = new QueryClient();

function App() {
  return (
    <div className="github-app">
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={null}>
          <Routes>
            <Route exact path="/" element={<TrendingRepositories />} />
            <Route exact path="/developers" element={<TrendingDevelopers />} />
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}

export default App;
