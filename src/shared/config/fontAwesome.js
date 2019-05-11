import { library } from '@fortawesome/fontawesome-svg-core';
import { faSave, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';

const configureFontAwesome = () => {
    library.add(faSave);
    library.add(faCog);
    library.add(faTimes);
};

export default configureFontAwesome;