import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSignOutAlt, faEdit, faEraser, faAtom, faPenFancy } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return(
        library.add(faTrash, faSignOutAlt, faEdit, faEraser, faAtom, faPenFancy)
    );
}

export default Icons;