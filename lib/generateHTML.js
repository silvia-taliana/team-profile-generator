let templateHTML = "";

function generateHTML(team) {
    let templateStart =
        `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Acme&family=Noto+Sans+JP&display=swap" rel="stylesheet">
    <title>Team Profile Generator</title>
</head>

<body>
    <header>
        <h1>MY TEAM</h1>
    </header>

    <main>
        <div class="card">
            <img src="./assets/manager.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${manager.name}</h5>
                <h5>Manager</h5>
                <p class="card-text">
                    <li>
                        Id number: ${manager.id}
                    </li>
                    <li>
                        Email: ${manager.email}
                    </li>
                    <li>
                        Office Number: ${manager.officeNumber}
                    </li>
                </p>
            </div>
        </div>
    `;

    const templateEnd = `
</main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
        crossorigin="anonymous"></script>
</body>

</html>
`;

    function renderEngineer(engineer) {
        let templateEngineer = `
    <div class="card">
            <img src="./assets/engineer.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${engineer.name}</h5>
                <h5>Engineer</h5>
                <p class="card-text">
                    <li>
                        Id number: ${engineer.id}
                    </li>
                    <li>
                        Email:${engineer.email}
                    </li>
                    <li>
                        Github: ${engineer.github}
                    </li>
                </p>
            </div>
        </div>`;
        return templateEngineer;
    };

    function renderIntern(intern) {
        let templateIntern = `<div class="card">
    <img src="./assets/intern.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <h5>Intern</h5>
        <p class="card-text">
            <li>
                Id number: ${intern.id}
            </li>
            <li>
                Email: ${intern.email}
            </li>
            <li>
                School: ${intern.school}
            </li>
        </p>
    </div>
</div>`;
        return templateIntern;
    };

    console.log(team);

    templateHTML += templateStart;
    for (i = 1; i < team.length; i++) {
        if (team[i] === "Engineer") {
            renderEngineer(engineer);
            templateHTML += engineer;
        }
        else if (team[i] === "Intern") {
            renderIntern(intern);
            templateHTML += intern;
        }
        else {
            templateHTML += templateEnd;
            return templateHTML;
        };
    };
};

module.exports = generateHTML;