import Collaborator from "./Collaborator";
import styles from "./CollaboratorsList.module.css";

function CollaboratorsList() {
    const numberOfCollaborators = 4;

    // Dummy data for collaborators
    const dummyCollaborators = [
        { firstname: "John", lastname: "Doe" },
        { firstname: "Jane", lastname: "Smith" },
        { firstname: "Alice", lastname: "Johnson" },
        { firstname: "Bob", lastname: "Williams" },
    ];

    return (
        <div className={styles.collaboratorList}>
            <div className={styles.collaboratorContainer}>
                {dummyCollaborators.map((collaborator, index) => (
                    <Collaborator
                        key={index}
                        firstname={collaborator.firstname}
                        lastname={collaborator.lastname}
                    />
                ))}
            </div>
        </div>
    );
}

export default CollaboratorsList;
