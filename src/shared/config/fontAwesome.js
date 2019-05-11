import { library } from '@fortawesome/fontawesome-svg-core';
import { faSave, faCog } from '@fortawesome/free-solid-svg-icons';

const configureFontAwesome = () => {
    library.add(faSave);
    console.log('faCog', faCog);
    library.add(faCog);
};

export default configureFontAwesome;