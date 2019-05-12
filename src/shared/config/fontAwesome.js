import { library } from '@fortawesome/fontawesome-svg-core';
import { faSave, faCog, faTimes, faImage, faImages, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const configureFontAwesome = () => {
    library.add(faSave);
    library.add(faCog);
    library.add(faTimes);
    library.add(faImage);
    library.add(faImages);
    library.add(faInfoCircle);
};

export default configureFontAwesome;