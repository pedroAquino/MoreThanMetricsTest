import { library } from '@fortawesome/fontawesome-svg-core';
import { 
faSave, 
faCog, 
faTimes, 
faImage, 
faImages, 
faInfoCircle, 
faUser,
faEdit,
faPlusSquare,
faShare,
faCopy,
faArrowRight,
faQuestionCircle,
faEllipsisH
} from '@fortawesome/free-solid-svg-icons';

const configureFontAwesome = () => {
    library.add(faSave);
    library.add(faCog);
    library.add(faTimes);
    library.add(faImage);
    library.add(faImages);
    library.add(faInfoCircle);
    library.add(faUser);
    library.add(faEdit);
    library.add(faPlusSquare);
    library.add(faShare);
    library.add(faCopy);
    library.add(faArrowRight);
    library.add(faQuestionCircle);
    library.add(faEllipsisH);
};

export default configureFontAwesome;