import { useNavigate } from 'react-router-dom';
import DevelopersList from './components/DevelopersList';

function TrendingDevelopers() {
  const navigate = useNavigate();
  
  return (
    <main className="trending-developers-container page-wrapper">
      <header className="page-header">
        <h1>Trending</h1>
        <p>These are the developers building the hot tools today.</p>
      </header>
      <div className="content-wrap">
        <div className="filters-wrap">
          <nav className="tabs-wrap">
            <div className="tab" onClick={() => navigate('/')}>Repositories</div>
            <div className="tab active">Developers</div>
          </nav>
          <div className="dd-filters">
            <div className="single-filter">
              <div className="filter-label">Language:</div>
              <div className="filter-action">Any</div>
            </div>
            <div className="single-filter">
              <div className="filter-label">Date range:</div>
              <div className="filter-action">Today</div>
            </div>
          </div>          
        </div>
        <DevelopersList />
      </div>
    </main>
  )
}

export default TrendingDevelopers;