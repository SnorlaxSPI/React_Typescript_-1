export function RepositoryItem(props : any) {
  return (
    <li>
    <strong>{props.repository}</strong>
    <p>Forms in React</p>

    <a href="">
      Acessar repositório
    </a>
  </li>
  );
}