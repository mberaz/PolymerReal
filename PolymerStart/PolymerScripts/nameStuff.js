Polymer({
    is: "name-stuff",
    properties: {
        labelClass: {
            type: String,
            value: ""
        },
        textValue: {
            type: String,
            value: "",
            notify: true,
            reflectToAttribute: true,
        },
        label: {
            type: String,
            value: "Test"
        },
        placeholderText: {
            type: String,
            value: "Enter text here..."
        },
        time: {
            type: String,
            value: new Date().toLocaleString()
        },
        buttonText: {
            type: String,
            value: "Click"
        },
        sithName: {
            type: String,
            value: ""
        },
        resultsStyle: {
            type: String,
            value: "display:none;"
        }

    },
    ready: function (e) {
        this.buttonText = (new Date().getHours() > 12) ? "Click me!" : "Click here..";
    },
    buttonClickEvent: function (event) {
        this.changeSithName(this.textValue);
    },
    changeSithName: function (newName) {
        this.sithName = "Darth " + newName.split("").reverse().join("");
        this.resultsStyle = "display:block;"

        this.fire('darthNameChanged', { newName: this.sithName });
    },
    getSithName: function () {
        return this.sithName;

    },
    clearValue: function () {
        this.textValue = "";
    },
    hideSithName: function () {
        this.sithName = "";
        this.resultsStyle = "display:none;"
    }
});