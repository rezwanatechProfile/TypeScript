import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelectors";

const RepositoriesList: React.FC = () => {
 const [term, setTerm] = useState('');
 const { searchRepositories } = useActions();

 //after adding the useTypedSelector hook, we can now access the state object in the component. Now data, error, and loading are properties of the state object.
 const  { data, error, loading } = useTypedSelector((state) => state.repositories);


 const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault();
   console.log(term);
   searchRepositories(term);

 };

  return <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={(e) => setTerm(e.target.value)}/>
      <button>Search</button>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </form>
  </div>;
 }

 export default RepositoriesList;