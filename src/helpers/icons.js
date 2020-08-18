import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSignOutAlt, faEdit, faEraser, faAtom, faPenFancy, faMapMarkerAlt, faMobile, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return(
        library.add(faTrash, faSignOutAlt, faEdit, faEraser, faAtom, faPenFancy, faMapMarkerAlt, faMobile, faEnvelope, faKey)
    );
}

export default Icons;