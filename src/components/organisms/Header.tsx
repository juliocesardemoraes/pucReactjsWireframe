import SearchInput from "../molecules/SearchInput";

export default function Header() {
  return (
    <header className="flex fspace__between p__2">
      <h1>JM</h1>
      <nav className="flex fg__1 flex__column align__end">
        <ul className="flex fg__1">
          <li>Topic 1</li>
          <li>Topic 2</li>
          <li>Topic 3</li>
          <li>Topic 4</li>
        </ul>
        <SearchInput></SearchInput>
      </nav>
    </header>
  );
}
