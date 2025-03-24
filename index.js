document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("view-invitation-btn");
    const invitationContent = document.getElementById("invitation-content");

    button.addEventListener("click", function () {
        invitationContent.scrollIntoView(
            { behavior: "smooth" }
        );
    });
});
