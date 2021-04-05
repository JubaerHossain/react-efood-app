import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export function localAddres() {
    const { address} =useSelector(state => state.users);
    let addres = address ? address : JSON.parse(localStorage.getItem('address'));
    if (addres && addres.city) {
        return addres;
    } else {
        const history = useHistory();
        history.push(`/`)
    }
}