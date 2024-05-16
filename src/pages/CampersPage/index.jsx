import { useLocation, useNavigate } from 'react-router-dom';

function CampersPage() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log('campers page', location);
  return (
    <div>
      campers
      <ul>
        <li key={'1'} id="1">
          1
          <button
            onClick={() =>
              navigate('modal/1', { state: { previousLocation: location } })
            }
          >
            Show more
          </button>
        </li>
        <li key={'2'} id="2">
          2
          <button
            onClick={() =>
              navigate('modal/2', { state: { previousLocation: location } })
            }
          >
            Show more
          </button>
        </li>
      </ul>
    </div>
  );
}

export default CampersPage;
