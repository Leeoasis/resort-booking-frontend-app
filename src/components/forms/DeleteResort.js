import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchresorts } from '../../redux/features/resortsSlice';
import fetchDelete from '../../redux/features/deleteSlice';

const ResortDelete = () => {
  const { resorts } = useSelector((state) => state.resorts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchresorts());
  }, [dispatch]);

  const handleDelete = (resortId) => {
    dispatch(fetchDelete(resortId));
    window.location.reload();
  };

  return (
    <section className="d-flex p-5">
      <ul className="list-group w-100">
        {
              resorts.map((item) => (
                <li className="list-group-item d-flex justify-content-between align-items-center bg-dark" key={item.name}>
                  <p className="text-light">
                    <span className="text-primary fs-4">
                      Name:
                      {' '}
                    </span>
                    {item.name}
                  </p>
                  {' '}
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </li>
              ))
}
      </ul>
    </section>
  );
};
export default ResortDelete;
