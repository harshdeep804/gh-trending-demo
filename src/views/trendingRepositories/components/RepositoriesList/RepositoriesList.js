import { useQuery } from "react-query";
import RepositoriesListItem from "../RepositoriesListItem";

function RepositoriesList() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      "http://localhost:8011/proxy/repositories"
    ).then((res) => res.json())
  );

  if (isLoading) return <div style={{ padding: '1rem' }}>Loading...</div>;

  if (error) return <div style={{ padding: '1rem' }}>{`An error has occurred: ${error.message}`}</div>;
  
  return (
    <div className="repositories-list-wrap">
      {data?.map(repo => (
        <RepositoriesListItem data={repo} key={repo.rank}/>
      ))}
    </div>
  )
}

export default RepositoriesList;
