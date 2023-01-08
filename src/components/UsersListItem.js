import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UsersListItem({ user }) {

    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    }

    const header = <>
                    <Button loading={isLoading} onClick={handleClick}>
                        <GoTrashcan />
                    </Button>
                    {error && <div>Error deleting user ...</div>}
                    {user.name}
                    </>;

    return (
         <ExpandablePanel header={header}>
            <AlbumsList user={user} />
         </ExpandablePanel>
    )

}

export default UsersListItem;