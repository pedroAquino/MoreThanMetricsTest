import { library } from '@fortawesome/fontawesome-svg-core';
import { faSave, faCog, faTimes, faImage, faImages } from '@fortawesome/free-solid-svg-icons';

const configureFontAwesome = () => {
    library.add(faSave);
    library.add(faCog);
    library.add(faTimes);
    library.add(faImage);
    library.add(faImages);
};

export default configureFontAwesome;