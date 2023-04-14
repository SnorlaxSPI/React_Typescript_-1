function RepositoryItem(props: any) {
  return (
    <li>
    <strong>{props.repository.name ?? 'Default'}</strong>
    <p>{props.repository.description}</p>
    <a href='https://github.com/unform/unform'>Acessar repositório</a>
  </li>
  );
}

export { RepositoryItem };
