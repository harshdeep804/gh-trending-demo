import PropTypes from 'prop-types';
import { StarIcon, RepoForkedIcon, RepoIcon, TriangleDownIcon } from '@primer/octicons-react';
import './RepositoriesListItem.scss';

function RepositoriesListItem({ data }) {
  return (
    <article className="repositories-list-item-wrap">
      <div className="row">
        <div className="repo-details">
          <div className="repo-name"><RepoIcon /> <a href={data?.url}>{data?.username} / <span>{data?.repositoryName}</span></a></div>
          <div className="repo-desc">{data?.description}</div>
        </div>
        <div className="stars-action">
          <button type="button"><StarIcon /> Star</button>
          <button type="button"><TriangleDownIcon /></button>
        </div>
      </div>
      <div className="row">
        <div className="repo-meta">
          <div className="repo-language">{data?.language}</div>
          <div className="repo-total-stars"><StarIcon /> {data?.totalStars}</div>
          <div className="repo-forks"><RepoForkedIcon /> {data?.forks}</div>
          <div className="repo-users">Built by {data?.builtBy?.map(u => (<a href={u.url} key={u.username}><img src={u.avatar} alt={u.username} /></a>))}</div>
        </div>
        <div className="repo-stars">
          <StarIcon /> {data?.starsSince} stars today
        </div>
      </div>
    </article>
  )
}

RepositoriesListItem.propTypes = {
  data: PropTypes.shape({
    rank: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    repositoryName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
    language: PropTypes.string,
    languageColor: PropTypes.string,
    totalStars: PropTypes.number,
    forks: PropTypes.number,
    starsSince: PropTypes.number,
    since: PropTypes.string,
    builtBy: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        avatar: PropTypes.string,
      }),
    ),
  })  
}

export default RepositoriesListItem;
