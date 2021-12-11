import PropTypes from 'prop-types';
import { FlameIcon, RepoIcon, HeartIcon } from '@primer/octicons-react';
import './DevelopersListItem.scss';

function DevelopersListItem({ data }) {
  return (
    <article className="developers-list-item-wrap">
      <div className="col flex">
        <div className="rank">{data?.rank}</div>
        <div className="avatar"><a href={data?.url}><img src={data?.avatar} alt={data?.name}/></a></div>
        <div className="user-info">
          <div className="full-name"><a href={data?.url}>{data?.name}</a></div>
          <div className="user-name"><a href={data?.url}>{data?.username}</a></div>
        </div>
      </div>
      <div className="col">
        {data?.popularRepository?.repositoryName && <div className="popular-label"><FlameIcon /> POPULAR REPO</div>}
        {data?.popularRepository?.repositoryName && <div className="popular-repo"><RepoIcon /> <a href={data?.popularRepository?.url}>{data?.popularRepository?.repositoryName}</a></div>}
        {data?.popularRepository?.repositoryName && <div className="repo-desc">{data?.popularRepository?.description}</div>}
      </div>
      <div className="col flex actions">
        {/* Arbitrary logic to display Sponsor button since it cannot be deduced from this API for which user the button needs to be displayed */}
        {((data?.rank || 0) % 2) === 0 && <button type="button"><HeartIcon/> Sponsor</button>}
        <button type="button">Follow</button>
      </div>
    </article>
  )
}

DevelopersListItem.propTypes = {
  data: PropTypes.shape({
    rank: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    since: PropTypes.string,
    popularRepository: PropTypes.shape({
      repositoryName: PropTypes.string,
      url: PropTypes.string,
      description: PropTypes.string,
    }),
  })  
}

export default DevelopersListItem;
