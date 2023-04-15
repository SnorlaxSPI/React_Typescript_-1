function RepositoryItem(props: any) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href = {props.repository.html_url}>
        Acessar repositório</a>
    </li>
  );
}

export { RepositoryItem };
