function createTable() {
    table_div = document.getElementsByClassName("generated_table")[0]
    table_div.innerHTML = ""
    drawingType = Number(localStorage.getItem("drawingType"))
    drawingSessions = Number(localStorage.getItem("drawingSessions"))

    days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    table = document.createElement("table")

    for (i = 0; i < drawingSessions + 1; i++) {
        row = document.createElement("tr")
        for (j = 0; j < 7; j++) {
            column = document.createElement("td")
            if (i == 0) {
                column.appendChild(document.createTextNode(days_of_week[j]))
            } else {
                if (drawingType == 1) {
                    column.appendChild(document.createTextNode("RISUEM SKETCH"))    
                }
                if (drawingType == 2) {
                    column.appendChild(document.createTextNode("RISUEM RENDER"))
                }
            }

            row.appendChild(column)
            row.className = "row"
            
        }
        table.appendChild(row)
    }

    table_div.appendChild(table)
}

function formSubmission() {
    const formElement = document.getElementsByTagName('form')[0]
    const formData = new FormData(formElement);
    const drawingType = formData.get('drawingType');
    const drawingSessions = formData.get('drawingSessions');

    localStorage.setItem("drawingType", drawingType)
    localStorage.setItem("drawingSessions", drawingSessions)

    createTable()
}

window.onload = () => {
    createTable()
    form = document.getElementsByTagName("form")[0]
    form.addEventListener("submit", formSubmission)
};