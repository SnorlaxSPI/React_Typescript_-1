import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from "react";

import '../styles/repositories.scss';

interface Repository {
  name: string;
  language: string;
  html_url: string;
}

export function RepositoryList() {

  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/SnorlaxSPI/repos')
    .then(response => response.json())
    .then((data: any) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository = {repository} />
        })};
      </ul>
    </section>
  );
}

