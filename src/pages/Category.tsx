import { useParams } from 'react-router-dom';

export default function Category() {
  const { categoryId } = useParams();
  return (
    <section className="c-container">
      <h1 className="h1">Category {categoryId}</h1>
    </section>
  );
}
