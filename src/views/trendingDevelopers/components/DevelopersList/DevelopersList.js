import { useQuery } from "react-query";
import DevelopersListItem from "../DevelopersListItem";

function DevelopersList() {
  const { isLoading, error, data } = useQuery("developersData", () =>
    fetch(
      "http://localhost:8011/proxy/developers"
    ).then((res) => res.json())
  );

  if (isLoading) return <div style={{ padding: '1rem' }}>Loading...</div>;

  if (error) return <div style={{ padding: '1rem' }}>{`An error has occurred: ${error.message}`}</div>;
  
  return (
    <div className="developers-list-wrap">
      {data?.map(repo => (
        <DevelopersListItem data={repo} key={repo.rank}/>
      ))}
    </div>
  )
}

export default DevelopersList;
