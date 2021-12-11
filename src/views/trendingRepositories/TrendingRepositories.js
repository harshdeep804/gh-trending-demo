import { useNavigate } from 'react-router-dom';
import RepositoriesList from './components/RepositoriesList';

function TrendingRepositories() {
  const navigate = useNavigate();
  
  return (
    <main className="trending-repositories-container page-wrapper">
      <header className="page-header">
        <h1>Trending</h1>
        <p>See what the GitHub community is most excited about today.</p>
      </header>
      <div className="content-wrap">
        <div className="filters-wrap">
          <nav className="tabs-wrap">
            <div className="tab active">Repositories</div>
            <div className="tab" onClick={() => navigate('/developers')}>Developers</div>
          </nav>
          <div className="dd-filters">
            <div className="single-filter">
              <div className="filter-label">Spoken Language:</div>
              <div className="filter-action">Any</div>
            </div>
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
        <RepositoriesList />
      </div>
    </main>
  )
}

export default TrendingRepositories;