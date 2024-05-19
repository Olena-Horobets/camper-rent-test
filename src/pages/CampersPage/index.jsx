import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
// import { selectIsLoading } from 'store/campers/selectors';
import { getAllCampersAction } from 'store/campers/slice';
import { selectCampers } from 'store/campers/selectors';

function CampersPage() {
  const navigate = useNavigate();
  const location = useLocation();
  // const isLoading = useSelector(selectIsLoading);
  const campers = useSelector(selectCampers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampersAction());
  }, [dispatch]);

  const onOpenModalClick = id => {
    document.querySelector('body').classList.add('bodyFixed');
    navigate(`camper/${id}`, {
      state: { background: location },
    });
  };

  return (
    <div>
      <ul>
        {campers.map(el => {
          return (
            <li key={el._id}>
              <h2>{el.name}</h2>
              <p>{el.price}</p>
              <p>{el.rating}</p> <p>{el.location}</p>
              {/* <p>{el.description}</p> */}
              <h3>Vehicle details</h3>
              <ul>
                <li>
                  <span>Form</span>
                  <span>{el.form}</span>
                </li>
                <li>
                  <span>Length</span>
                  <span>{el.length}</span>
                </li>
                <li>
                  <span>Width</span>
                  <span>{el.width}</span>
                </li>
                <li>
                  <span>Height</span>
                  <span>{el.height}</span>
                </li>
                <li>
                  <span>Tank</span>
                  <span>{el.tank}</span>
                </li>
                <li>
                  <span>Consumption</span>
                  <span>{el.consumption}</span>
                </li>
              </ul>
              <button onClick={() => onOpenModalClick(el._id)}>
                Show more
              </button>
            </li>
          );
        })}
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default CampersPage;
