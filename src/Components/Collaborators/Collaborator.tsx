import styles from "./Collaborator.module.css";

interface CollaboratorProps {
    firstname: string;
    lastname: string;
}

function Collaborator({ firstname, lastname }: CollaboratorProps) {
    // Get the initials from the first and last name
    const initials = `${firstname.charAt(0)}${lastname.charAt(0)}`;

    return (
        <div className={styles.Collaborator}>
            <div className={styles.CollaboratorAvatar}>
                {initials}
            </div>
        </div>
    );
}

export default Collaborator;
